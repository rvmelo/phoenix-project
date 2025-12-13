/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Exclui .svg da regra padrão do Next
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test && rule.test.test('.svg'),
    )
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i
    }

    // Suporte a importar SVG como componente React (e opção ?url para URL)
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      oneOf: [
        { resourceQuery: /url/, type: 'asset/resource' }, // import iconUrl from './icon.svg?url'
        { use: ['@svgr/webpack'] }, // import Icon from './icon.svg'
      ],
    })

    return config
  },
}

module.exports = nextConfig

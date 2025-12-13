import { extendTailwindMerge } from 'tailwind-merge'

export const customTwMerge = extendTailwindMerge({
  classGroups: {
    // Font sizes personalizados definidos no tailwind.config.js (extend.fontSize)
    'font-size': [
      'text-t1',
      'text-t2',
      'text-t3',
      'text-s1',
      'text-s2',
      'text-s3',
    ],

    // Famílias de fonte personalizadas (extend.fontFamily)
    'font-family': ['font-inter', 'font-grotesk', 'font-montserrat'],

    // Cores personalizadas do projeto (theme.colors)
    // Mantém a última cor aplicada para cada tipo (bg/text/border)
    'bg-color': [
      'bg-background',
      'bg-text',
      'bg-primary',
      'bg-error',
      'bg-error2',
      'bg-disabled',
      'bg-white',
    ],
    'text-color': [
      'text-background',
      'text-text',
      'text-primary',
      'text-error',
      'text-error2',
      'text-disabled',
      'text-white',
    ],
    'border-color': [
      'border-background',
      'border-text',
      'border-primary',
      'border-error',
      'border-error2',
      'border-disabled',
      'border-white',
    ],
  },
})

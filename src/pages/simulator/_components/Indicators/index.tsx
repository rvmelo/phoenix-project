import React from 'react'

interface IndicatorsProps {
  plansIndicators: {
    name: string
    conversion: string
    roi: string
    value: string
  }[]
}

export const Indicators: React.FC<IndicatorsProps> = ({ plansIndicators }) => {
  return (
    <div className="flex h-full w-full max-w-[30rem] flex-col gap-8 rounded-3xl border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] p-10">
      <span className="font-montserrat text-s1 text-white">Indicadores</span>
      <div className="flex h-full w-full flex-col items-center gap-8">
        {plansIndicators.map((indicator) => (
          <div
            key={indicator.name}
            className="flex w-full flex-row items-center justify-between rounded-2xl border border-white/10 bg-[#FFFFFF0D] px-6 py-5"
          >
            <div className="flex flex-col gap-2">
              <span className="font-montserrat text-s1 text-white">
                {indicator.name}
              </span>
              <div className="flex flex-row items-center gap-4 font-inter text-t1">
                <span className="text-[#FBFBFB80]">
                  Conversão:{' '}
                  <span className="font-semibold text-[#4ADE80]">
                    {indicator.conversion}%
                  </span>
                </span>
                <span className="font-montserrat text-t1 text-white">
                  ROI:{' '}
                  <span className="font-semibold text-[#4ADE80]">
                    {indicator.roi}%
                  </span>
                </span>
              </div>
            </div>
            <span className="font-montserrat text-s1 text-white">R$ 89,90</span>
          </div>
        ))}
      </div>
    </div>
  )
}

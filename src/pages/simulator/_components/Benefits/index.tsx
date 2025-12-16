import React from 'react'

interface BenefitsProps {
  includedBenefits: string[]
}

export const Benefits: React.FC<BenefitsProps> = ({ includedBenefits }) => {
  return (
    <div className="flex w-full max-w-[30rem] flex-col gap-8 rounded-3xl border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] p-10">
      <h2 className="font-montserrat text-s1 text-white">
        Benefícios Inclusos
      </h2>
      <div className="flex flex-row items-center gap-[0.625rem]">
        {includedBenefits.map((benefit) => (
          <div
            key={benefit}
            className="flex flex-row items-center gap-2 rounded-[6.25rem] border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] p-[0.75rem]"
          >
            <div className="h-2 w-2 rounded-full bg-[#006FFF]"></div>
            <span className="whitespace-nowrap font-montserrat text-[0.75rem] font-medium text-[#EFF6FF]">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

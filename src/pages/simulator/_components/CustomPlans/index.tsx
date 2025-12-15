import { useSafeState } from '@/pages/hooks/useSafeState'
import { customTwMerge } from '@/utils/customTwMerge'
import React from 'react'
import { CustomSlider } from '../CustomSlider'

export const CustomPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useSafeState<
    'basic' | 'intermediate' | 'premium'
  >('basic')

  return (
    <div className="w-full max-w-[53.25rem] rounded-3xl bg-[#FFFFFF0D] px-6 pb-[2.7rem] pt-20">
      <h2 className="font-montserrat text-s1 text-white">
        Planos Personalizados
      </h2>

      <div className="mt-6 flex w-full flex-row items-center justify-between gap-6">
        <button
          onClick={() => setSelectedPlan('basic')}
          className={customTwMerge(
            'block w-full rounded-2xl border border-white/10 bg-[#FFFFFF0D] px-6 py-8 text-left',
            selectedPlan === 'basic' &&
              'border-primary shadow-[0_0_0_1px_rgba(59,130,246,0.35)]',
          )}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <span className="font-montserrat text-t1 font-semibold text-white">
              Básico
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <span className="font-montserrat text-s2 font-semibold text-white">
              R$ 89,90
            </span>
            <span className="font-inter text-t1 font-normal text-[#FBFBFB80]">
              Por mês
            </span>
          </div>
        </button>

        <button
          onClick={() => setSelectedPlan('intermediate')}
          className={customTwMerge(
            'block w-full rounded-2xl border border-white/10 bg-[#FFFFFF0D] px-6 py-8 text-left',
            selectedPlan === 'intermediate' &&
              'border-primary shadow-[0_0_0_1px_rgba(59,130,246,0.35)]',
          )}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <span className="font-montserrat text-t1 font-semibold text-white">
              Intermediário
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <span className="font-montserrat text-s2 font-semibold text-white">
              R$ 145,90
            </span>
            <span className="font-inter text-t1 font-normal text-[#FBFBFB80]">
              Por mês
            </span>
          </div>
        </button>

        <button
          onClick={() => setSelectedPlan('premium')}
          className={customTwMerge(
            'block w-full rounded-2xl border border-white/10 bg-[#FFFFFF0D] px-6 py-8 text-left',
            selectedPlan === 'premium' &&
              'border-primary shadow-[0_0_0_1px_rgba(59,130,246,0.35)]',
          )}
        >
          <div className="flex w-full flex-row items-center justify-between gap-3">
            <span className="font-montserrat text-t1 font-semibold text-white">
              Premium
            </span>
            <span className="rounded-full bg-[#43D2CB] px-3 py-1 font-inter text-[0.75rem] font-medium text-background">
              Recomendado
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <span className="font-montserrat text-s2 font-semibold text-white">
              R$ 225,90
            </span>
            <span className="font-inter text-t1 font-normal text-[#FBFBFB80]">
              Por mês
            </span>
          </div>
        </button>
      </div>

      <div className="mt-10 w-full">
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-t1 font-semibold text-white">
              Valor do veículo: R$ 50.000
            </span>
          </div>
          <div className="flex w-full flex-col items-center gap-3">
            <CustomSlider />
            <div className="flex w-full flex-row items-center justify-between">
              <span className="text-left font-montserrat text-t1 text-white">
                R$ 10.000
              </span>
              <span className="text-right font-montserrat text-t1 text-white">
                R$ 500.000
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-t1 font-semibold text-white">
              Idade do Cliente: 28 anos
            </span>
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            <CustomSlider />
            <div className="flex w-full flex-row items-center justify-between">
              <span className="text-left font-montserrat text-t1 text-white">
                18 anos
              </span>
              <span className="text-left font-montserrat text-t1 text-white">
                90 anos
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col gap-4">
        <h2 className="font-montserrat text-t3 font-bold text-white">
          Coberturas Adicionais
        </h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center justify-between gap-3 text-white">
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              <span className="font-inter text-t1 text-white">
                Cobertura contra roubo e furto
              </span>
            </span>
            <span className="font-montserrat text-[0.75rem] font-bold text-white">
              + R$ 25,00
            </span>
          </label>

          <label className="flex items-center justify-between gap-3 text-white">
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              <span className="font-inter text-t1 text-white">
                Danos por colisão
              </span>
            </span>
            <span className="font-montserrat text-[0.75rem] font-bold text-white">
              + R$ 35,00
            </span>
          </label>

          <label className="flex items-center justify-between gap-3 text-white">
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-primary"
              />
              <span className="font-inter text-t1 text-white">
                Cobertura contra incêndio
              </span>
            </span>
            <span className="font-montserrat text-[0.75rem] font-bold text-white">
              + R$ 20,00
            </span>
          </label>

          <label className="flex items-center justify-between gap-3 text-white">
            <span className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              <span className="font-inter text-t1 text-white">
                Fenômenos naturais (granizo, enchente)
              </span>
            </span>
            <span className="font-montserrat text-[0.75rem] font-bold text-white">
              + R$ 30,00
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { GetKPISServiceResponseDTO } from '@/services/getKPISService'
import { useSafeState } from '@/hooks/useSafeState'
import dynamic from 'next/dynamic'
import type { ApexOptions } from 'apexcharts'
import { customTwMerge } from '@/utils/customTwMerge'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface KPISChartProps {
  kpis: GetKPISServiceResponseDTO
}

enum KPIS_TRENDS_ENUM {
  RETENTION = 'retentionTrend',
  CONVERSION = 'conversionTrend',
  CHURN = 'churnTrend',
  ARPU = 'arpuTrend',
}

export const KPISChart: React.FC<KPISChartProps> = ({ kpis }) => {
  const [trend, setTrend] = useSafeState<KPIS_TRENDS_ENUM>(
    KPIS_TRENDS_ENUM.ARPU,
  )

  const data = {
    options: {
      chart: {
        id: "KPI'S TRENDS",
        width: '100%',
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: '#A3A7B2',
      },
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' as const, width: 3 },
      colors: ['#33E6D8'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.08,
          stops: [0, 85, 100],
        },
      },
      grid: {
        borderColor: 'rgba(255,255,255,0.12)',
        strokeDashArray: 6,
        padding: { left: 12, right: 12 },
      },
      markers: { size: 0, hover: { size: 5 } },
      tooltip: { theme: 'dark' },
      xaxis: {
        categories: kpis.kpisTrend.labels,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: '#A3A7B2' } },
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
        labels: { style: { colors: '#A3A7B2' } },
      },
    } as unknown as ApexOptions,
    series: [
      {
        data: kpis.kpisTrend[trend].data,
      },
    ],
  }

  return (
    <div className="w-full max-w-[53.25rem] rounded-3xl bg-[#1A2033] p-6">
      <div className="flex h-full flex-col gap-8">
        <div className="flex w-full flex-row items-center justify-between">
          <span className="text-s1 font-bold text-white">
            Evolução dos KPI&apos;s
          </span>
          <div className="flex flex-row items-center gap-3 rounded-[6.25rem] bg-[#FFFFFF0D] px-3 py-2">
            <button
              className={customTwMerge(
                'flex w-[5.2rem] items-center justify-center rounded-[6.25rem] bg-[#F6F8FC1A] p-3 font-montserrat text-[0.75rem] font-semibold text-white',
                trend === KPIS_TRENDS_ENUM.RETENTION &&
                  'bg-[#2DB3C8] text-white',
              )}
              onClick={() => setTrend(KPIS_TRENDS_ENUM.RETENTION)}
            >
              Retenção
            </button>
            <button
              className={customTwMerge(
                'flex w-[5.2rem] items-center justify-center rounded-[6.25rem] bg-[#F6F8FC1A] p-3 font-montserrat text-[0.75rem] font-semibold text-white',
                trend === KPIS_TRENDS_ENUM.CONVERSION &&
                  'bg-[#2DB3C8] text-white',
              )}
              onClick={() => setTrend(KPIS_TRENDS_ENUM.CONVERSION)}
            >
              Conversão
            </button>
            <button
              className={customTwMerge(
                'flex w-[5.2rem] items-center justify-center rounded-[6.25rem] bg-[#F6F8FC1A] p-3 font-montserrat text-[0.75rem] font-semibold text-white',
                trend === KPIS_TRENDS_ENUM.CHURN && 'bg-[#2DB3C8] text-white',
              )}
              onClick={() => setTrend(KPIS_TRENDS_ENUM.CHURN)}
            >
              Churn
            </button>
            <button
              className={customTwMerge(
                'flex w-[5.2rem] items-center justify-center rounded-[6.25rem] bg-[#F6F8FC1A] p-3 font-montserrat text-[0.75rem] font-semibold text-white',
                trend === KPIS_TRENDS_ENUM.ARPU && 'bg-[#2DB3C8] text-white',
              )}
              onClick={() => setTrend(KPIS_TRENDS_ENUM.ARPU)}
            >
              ARPU
            </button>
          </div>
        </div>
        <Chart
          options={data.options}
          series={data.series}
          type="area"
          height={208}
        />
      </div>
    </div>
  )
}

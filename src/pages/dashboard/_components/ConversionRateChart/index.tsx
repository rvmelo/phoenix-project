import React from 'react'
import ChevronRightIcon from '@/assets/svg/chevron-right-icon.svg'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface ConversionRateChartProps {
  conversionRateValues: number[]
}

export const ConversionRateChart: React.FC<ConversionRateChartProps> = ({
  conversionRateValues,
}) => {
  const data = {
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: '#A3A7B2',
      },
      plotOptions: {
        bar: {
          columnWidth: '52%',
          borderRadius: 2,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      stroke: { show: false },
      colors: ['#7DE7FF'],
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.95,
          opacityTo: 0.25,
          stops: [0, 100],
        },
      },
      grid: {
        borderColor: 'rgba(255,255,255,0.12)',
        strokeDashArray: 6,
        padding: { left: 8, right: 8 },
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } },
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: '#A3A7B2' } },
      },
      yaxis: {
        min: 0,
        tickAmount: 5,
        labels: { style: { colors: '#A3A7B2' } },
      },
      tooltip: {
        theme: 'dark',
        x: { show: false },
        y: {
          formatter: (val: number) => `${Math.round(val)}`,
        },
      },
    } as unknown as ApexOptions,
    series: [
      {
        data: conversionRateValues.slice(0, 6),
      },
    ],
  }

  return (
    <div className="flex w-full max-w-[30rem] flex-col gap-[2.8rem] rounded-2xl bg-[#FFFFFF0D] p-6">
      <div className="flex w-full flex-row items-center justify-between">
        <span className="font-montserrat text-s1 text-white">
          Taxa de Conversão
        </span>
        <ChevronRightIcon />
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={208}
      />
    </div>
  )
}

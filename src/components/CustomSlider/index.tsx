import React from 'react'

export const CustomSlider: React.FC = () => {
  return (
    <input
      type="range"
      min={18}
      max={90}
      defaultValue={28}
      className="h-2 w-full appearance-none rounded-full bg-white accent-primary"
      style={{
        background:
          'linear-gradient(to right, #3B82F6 0%, #3B82F6 13.89%, #FFFFFF 13.89%, #FFFFFF 100%)',
      }}
      onInput={(e) => {
        const t = e.target as HTMLInputElement
        const min = Number(t.min)
        const max = Number(t.max)
        const val = ((Number(t.value) - min) / (max - min)) * 100
        t.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${val}%, #FFFFFF ${val}%, #FFFFFF 100%)`
      }}
      onChange={(e) => {
        const t = e.target as HTMLInputElement
        const min = Number(t.min)
        const max = Number(t.max)
        const val = ((Number(t.value) - min) / (max - min)) * 100
        t.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${val}%, #FFFFFF ${val}%, #FFFFFF 100%)`
      }}
    />
  )
}

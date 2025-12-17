import React from 'react'
import { Map, Marker, TileLayer, View } from 'react-openlayers'
import { OSM } from 'ol/source'
import { DefaultInput } from '@/components/Inputs/DefaultInput'
import DropdownIcon from '@/assets/svg/dropdown-arrow-icon.svg'

interface MapLocationsProps {
  locations: {
    coordinates: [number, number]
    category: string
  }[]
}

export const MapLocations: React.FC<MapLocationsProps> = ({ locations }) => {
  return (
    <div className="flex w-full max-w-[85.625rem] flex-col gap-6 rounded-3xl bg-[#FFFFFF0D] px-6 pb-6 pt-8">
      <div className="flex flex-row items-center justify-between">
        <span className="font-montserrat text-s1 text-white">
          Mapa de clientes por região
        </span>
        <div className="flex flex-row items-center gap-2">
          <DefaultInput
            rightIcon={<DropdownIcon />}
            disabled={true}
            inputWrapperClassName="cursor-pointer"
            className="h-[2.375rem] w-[12.625rem] rounded-3xl border-none bg-background"
            placeholder="Todos os locais"
            inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
          />
          <DefaultInput
            rightIcon={<DropdownIcon />}
            disabled={true}
            inputWrapperClassName="cursor-pointer"
            className="h-[2.375rem] w-[12.625rem] rounded-3xl border-none bg-background"
            placeholder="Todos os tipos"
            inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <Map>
          <TileLayer source={new OSM()} />
          <View
            center={[locations[0].coordinates[0], locations[0].coordinates[1]]}
            zoom={8}
          />
          {locations.map((location) => (
            <Marker
              key={location.coordinates.toString()}
              lonLat={location.coordinates}
            />
          ))}
        </Map>
      </div>
    </div>
  )
}

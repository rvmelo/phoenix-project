import React from 'react'
import { Map, Marker, TileLayer, View } from 'react-openlayers'
import { OSM } from 'ol/source'

interface MapLocationsProps {
  locations: {
    coordinates: [number, number]
    category: string
  }[]
}

export const MapLocations: React.FC<MapLocationsProps> = ({ locations }) => {
  return (
    <div className="flex w-full max-w-[85.625rem] flex-col gap-6 rounded-3xl bg-[#FFFFFF0D] px-6 pb-6 pt-8">
      <span className="font-montserrat text-s1 text-white">
        Mapa de clientes por região
      </span>
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

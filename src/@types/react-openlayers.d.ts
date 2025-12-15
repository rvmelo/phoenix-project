// src/@types/react-openlayers.d.ts
import 'react-openlayers'
import type { Coordinate } from 'ol/coordinate'

declare module 'react-openlayers' {
  export function Marker(props: {
    lonLat?: Coordinate
    address?: string
    color?: string
    char?: string
    addOnClick?: boolean
    removeOnClick?: boolean
  }): null
}

export {}

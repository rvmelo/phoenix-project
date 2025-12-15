import { api } from '..'

export interface GetMapLocationsServiceResponseDTO {
  data: {
    locations: {
      coordinates: [number, number]
      category: string
    }[]
  }
}

export const getMapLocationsService = async (accessToken: string) => {
  const { data } = await api.get<GetMapLocationsServiceResponseDTO>(
    '/map/locations',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  )

  return data
}

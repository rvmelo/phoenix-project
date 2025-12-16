import { api } from '..'

export interface GetPlansDataServiceResponseDTO {
  includedBenefits: string[]
  plansIndicators: {
    name: string
    conversion: string
    roi: string
    value: string
  }[]
}

export const getPlansDataService = async (accessToken: string) => {
  const { data } = await api.get<GetPlansDataServiceResponseDTO>(
    '/nortus-v1/simulador-planos',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  )

  return data
}

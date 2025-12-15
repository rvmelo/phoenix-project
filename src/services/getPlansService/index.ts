import { api } from '..'

export interface GetPlansServiceResponseDTO {
  includedBenefits: string[]
  plansIndicators: {
    name: string
    conversion: number
    roi: number
    value: number
  }[]
}

export const getPlansService = async (accessToken: string) => {
  const { data } = await api.get<GetPlansServiceResponseDTO>(
    '/nortus-v1/simulador-planos',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  )

  return data
}

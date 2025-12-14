import { api } from '..'

export interface GetKPISServiceResponseDTO {
  kpisTrend: {
    labels: string[]
    arpuTrend: {
      data: number[]
    }
    conversionTrend: {
      data: number[]
    }
    churnTrend: {
      data: number[]
    }
    retentionTrend: {
      data: number[]
    }
  }
}

export const getKPISService = async (accessToken: string) => {
  const { data } = await api.get<GetKPISServiceResponseDTO>(
    '/nortus-v1/dashboard',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return data
}

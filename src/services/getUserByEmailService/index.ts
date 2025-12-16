import { api } from '..'

interface GetUsersByEmailServiceRequestDTO {
  email: string
  accessToken: string
}

export interface GetPlansDataServiceResponseDTO {
  id: string
  email: string
  name: string
  state: string
}

export const getUsersByEmailService = async ({
  email,
  accessToken,
}: GetUsersByEmailServiceRequestDTO) => {
  const { data } = await api.get<GetPlansDataServiceResponseDTO>(
    `/users/by-email/${email}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  )

  return data
}

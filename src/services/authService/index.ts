import { api } from '..'

interface AuthRequestDTO {
  email: string
  password: string
}

interface AuthResponseDTO {
  access_token: string
}

export const authService = async ({ email, password }: AuthRequestDTO) => {
  const { data } = await api.post<AuthResponseDTO>(`/auth/login`, {
    email,
    password,
  })

  return data
}

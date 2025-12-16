import { api } from '..'

export interface GetChatDataServiceResponseDTO {
  messages: {
    id: string
    author: string
    content: string
    timestamp: string
    type: 'user_message' | 'assistant_message'
  }[]
  iaSuggestion: string
  futureSteps: {
    actions: {
      id: string
      action: string
      priority: string
    }[]
  }
}

export const getChatDataService = async (accessToken: string) => {
  const { data } = await api.get<GetChatDataServiceResponseDTO>(
    '/nortus-v1/chat',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  )

  return data
}

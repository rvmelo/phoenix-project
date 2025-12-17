import { ChatInput } from '@/components/Inputs/ChatInput'
import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import { GetServerSideProps } from 'next/types'
import { parse } from 'cookie'
import {
  getChatDataService,
  GetChatDataServiceResponseDTO,
} from '@/services/getChatDataService'
import { ChatMessage } from '../../components/ChatMessage'
import { customTwMerge } from '@/utils/customTwMerge'

type ChatPageProps = {
  data: GetChatDataServiceResponseDTO
}

export default function Chat({ data }: ChatPageProps) {
  return (
    <div>
      <>
        <UserSideBar />
        <UserTopBar sectionTitle="Chat & Assistente Virtual" />
        <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
          <aside className="row-span-2"></aside>
          <header className="h-[5.5rem] w-full"></header>
          <main className="flex flex-col items-center gap-12 px-[12.5rem] py-12">
            <div className="flex h-full max-h-[30rem] w-full flex-col gap-12 overflow-y-auto rounded-3xl border border-[#F6F8FC1A] bg-[#FFFFFF0D] px-6 pb-12 pt-8 custom-scroll">
              <div className="flex w-full flex-row justify-center">
                <span className="font-montserrat text-[0.75rem] font-normal text-[#EFF6FF]">
                  Hoje,{' '}
                  {new Date().toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              {data.messages.map((message) => (
                <div
                  key={message.id}
                  className={customTwMerge(
                    'flex w-full flex-row',
                    message.type === 'user_message'
                      ? 'justify-start'
                      : 'justify-end',
                  )}
                >
                  <ChatMessage message={message} />
                </div>
              ))}
            </div>
            <ChatInput
              className="max-h-16 w-full max-w-2xl"
              placeholder="Escreva aqui..."
            />
          </main>
        </div>
      </>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.access_token || ''

  if (!accessToken) {
    return {
      redirect: { destination: '/login', permanent: false },
    }
  }

  const data = await getChatDataService(accessToken)

  return {
    props: { data },
  }
}

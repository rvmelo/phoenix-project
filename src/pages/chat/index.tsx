import { ChatInput } from '@/components/Inputs/ChatInput'
import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'

export default function Chat() {
  return (
    <div>
      <>
        <UserSideBar />
        <UserTopBar sectionTitle="Chat & Assistente Virtual" />
        <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
          <aside className="row-span-2"></aside>
          <header className="h-[5.5rem] w-full"></header>
          <main className="flex flex-col items-center gap-12 px-[12.5rem] py-12">
            <div className="h-full w-full rounded-3xl border border-[#F6F8FC1A] bg-[#FFFFFF0D] px-6 pb-12 pt-8">
              <div className="flex w-full flex-row justify-center">
                <span className="font-montserrat text-[0.75rem] font-normal text-[#EFF6FF]">
                  Hoje,{' '}
                  {new Date().toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
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

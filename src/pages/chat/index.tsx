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
          <main></main>
        </div>
      </>
    </div>
  )
}

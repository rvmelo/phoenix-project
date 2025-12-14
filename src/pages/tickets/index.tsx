import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'

export default function Tickets() {
  return (
    <div>
      <UserSideBar />
      <UserTopBar sectionTitle="Gestão de Tickets" buttonTitle="Novo Ticket" />
    </div>
  )
}

import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'

export default function Simulator() {
  return (
    <div>
      <UserSideBar />
      <UserTopBar sectionTitle="Simulador de Planos" />
    </div>
  )
}

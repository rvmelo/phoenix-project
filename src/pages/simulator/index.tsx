import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import { CustomPlans } from '../../components/CustomPlans'
import { Benefits } from '../../components/Benefits'
import { Indicators } from '../../components/Indicators'
import { GetServerSideProps } from 'next/types'
import { parse } from 'cookie'
import { getPlansDataService } from '@/services/getPlansDataService'

type SimulatorPageProps = {
  includedBenefits: string[]
  plansIndicators: {
    name: string
    conversion: string
    roi: string
    value: string
  }[]
}

export default function Simulator({
  includedBenefits,
  plansIndicators,
}: SimulatorPageProps) {
  return (
    <div>
      <>
        <UserSideBar />
        <UserTopBar sectionTitle="Simulador de Planos" />
        <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
          <aside className="row-span-2"></aside>
          <header className="h-[5.5rem] w-full"></header>
          <main className="flex flex-row justify-center gap-10 py-14">
            <CustomPlans />
            <div className="flex flex-col gap-10">
              <Benefits includedBenefits={includedBenefits} />
              <Indicators plansIndicators={plansIndicators} />
            </div>
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

  const { includedBenefits, plansIndicators } = await getPlansDataService(
    accessToken,
  )

  return { props: { includedBenefits, plansIndicators } }
}

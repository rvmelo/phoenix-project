import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import type { GetServerSideProps } from 'next'
import { parse } from 'cookie'
import {
  getKPISService,
  type GetKPISServiceResponseDTO,
} from '@/services/getKPISService'
import dynamic from 'next/dynamic'
import {
  getMapLocationsService,
  GetMapLocationsServiceResponseDTO,
} from '@/services/getMapLocationsService'
import { KPISChart } from '@/components/KPISChart'
import { ConversionRateChart } from '@/components/ConversionRateChart'

type MapLocationsComponentProps = {
  locations: GetMapLocationsServiceResponseDTO['data']['locations']
}

const MapLocations = dynamic<MapLocationsComponentProps>(
  () => import('../../components/MapLocations').then((mod) => mod.MapLocations),
  { ssr: false },
)

type DashboardPageProps = {
  kpis: GetKPISServiceResponseDTO
  mapLocations: GetMapLocationsServiceResponseDTO
}

export default function Dashboard({ kpis, mapLocations }: DashboardPageProps) {
  return (
    <div>
      <>
        <UserSideBar />
        <UserTopBar sectionTitle="Dashboard" />
        <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
          <aside className="row-span-2"></aside>
          <header className="h-[5.5rem] w-full"></header>
          <main className="flex flex-col items-center gap-6 pb-8">
            <div className="flex w-full flex-row justify-center gap-10 px-10 pt-14">
              <KPISChart kpis={kpis} />
              <ConversionRateChart
                conversionRateValues={kpis.kpisTrend.conversionTrend.data}
              />
            </div>
            <div className="flex w-full flex-row justify-center px-10">
              <MapLocations locations={mapLocations.data.locations} />
            </div>
          </main>
        </div>
      </>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  DashboardPageProps
> = async ({ req }) => {
  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.access_token || ''

  if (!accessToken) {
    return {
      redirect: { destination: '/login', permanent: false },
    }
  }

  try {
    const [kpis, mapLocations] = await Promise.all([
      getKPISService(accessToken),
      getMapLocationsService(accessToken),
    ])

    return { props: { kpis, mapLocations } }
  } catch {
    return {
      props: {
        kpis: {
          kpisTrend: {
            labels: [],
            arpuTrend: { data: [] },
            conversionTrend: { data: [] },
            churnTrend: { data: [] },
            retentionTrend: { data: [] },
          },
        },
        mapLocations: {
          data: {
            locations: [],
          },
        },
      },
    }
  }
}

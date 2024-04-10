import {
  Badge,
  Card,
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
} from '@mantine/core'
import { OverviewCard } from '@/components'
import invoiceData from '@/lib/invoices'
import { IconCash, IconFileInvoice } from '@tabler/icons-react'
import { AreaChart } from '@mantine/charts'

const icons = {
  revenue: IconCash,
  invoice: IconFileInvoice,
}

const Home = () => {
  /* const data = [23, 100, 30, 50, 40, 68, 12]
  const label = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'] */
  const data = [
    {
      day: 'Mon',
      claims: 50,
    },
    {
      day: 'Tue',
      claims: 60,
    },
    {
      day: 'Wed',
      claims: 40,
    },
    {
      day: 'Thur',
      claims: 30,
    },
    {
      day: 'Fri',
      claims: 53,
    },
    {
      day: 'Sat',
      claims: 20,
    },
    {
      day: 'Sun',
      claims: 20,
    },
  ]

  const analyticData = [
    {
      title: 'Revenue',
      icon: 'revenue',
      value: '500,000 FCFA',
      color: 'green',
      diff: 34,
    },
    {
      title: 'Invoices',
      icon: 'invoice',
      value: 2,
      color: 'orange',
      diff: -13,
    },
  ] as const

  const stats = analyticData.map((stat) => {
    const Icon = icons[stat.icon]
    return (
      <Paper withBorder p='md' radius='md' key={stat.title}>
        <Group justify='start'>
          <ThemeIcon
            variant='light'
            size={'lg'}
            color={stat.color}
            radius={'xl'}
          >
            <Icon size='1.4rem' stroke={1.5} />
          </ThemeIcon>
          <Text size='md' className={'text-slate-700'}>
            {stat.title}
          </Text>
        </Group>

        <Group align='flex-end' gap='xs' mt={25}>
          <Text className={'font-bold text-slate-700 text-xl lg:text-2xl'}>
            {stat.value}
          </Text>
        </Group>
      </Paper>
    )
  })

  return (
    <div className=''>
      <div className='flex flex-col mb-8'>
        <h1 className='text-lg font-semibold md:text-2xl'>
          Hi HealthCare Center 👋🏽
        </h1>
        <Text fz={'sm'} c={'dimmed'} mt={2}>
          Welcome to your dashboard
        </Text>
      </div>
      <div className='container p-0'>
        <Text fw={'bold'} mb={20} className='text-slate-700' tt={'capitalize'}>
          Overview
        </Text>

        <SimpleGrid cols={{ base: 1, xs: 2, md: 2 }} mb={40}>
          <>{stats}</>
        </SimpleGrid>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <Card padding={20} radius={'lg'}>
            <Text fw={'bold'} mb={20}>
              Analytics
            </Text>
            <AreaChart
              h={300}
              data={data}
              dataKey='day'
              series={[{ name: 'claims', color: 'indigo.6' }]}
            />
            {/* <LineChart data={data} labels={label} /> */}
          </Card>
          <div className='grid grid-cols-1 gap-5'>
            <OverviewCard title='Recent Invoices' link='/dashboard/invoices'>
              {invoiceData.map((invoice) => {
                let statusVariant
                switch (invoice.status) {
                  case 'in progress':
                    statusVariant = 'yellow'
                    break
                  case 'validated':
                    statusVariant = 'green'
                    break
                  case 'rejected':
                    statusVariant = 'red'
                    break
                  default:
                    statusVariant = 'gray'
                }
                return (
                  <div
                    key={invoice.id}
                    className='flex items-center justify-between mt-5'
                  >
                    <Text fz={'sm'} className='text-slate-700'>
                      {invoice.clinic}
                    </Text>
                    <Text fz={'sm'} className='text-slate-700'>
                      {invoice.amount}
                    </Text>

                    <Badge color={statusVariant} variant='light'>
                      {invoice.status}
                    </Badge>
                  </div>
                )
              })}
            </OverviewCard>
            {/* <OverviewCard
              title='Recent Clinics'
              link='/dashbord/settings/profile'
            >
              {clinicsData.map((clinic) => (
                <div key={clinic.name} className='flex justify-between mt-5'>
                  <div className='flex gap-3'>
                    <Image
                      src={clinic.imageUrl}
                      className='w-16'
                      radius={'md'}
                      alt={clinic.name}
                    />
                    <div className='flex flex-col gap-1'>
                      <Text fz={'sm'} fw={'bold'} className='text-slate-700'>
                        {clinic.name}
                      </Text>
                      <Text fz={'xs'} className='text-slate-700'>
                        {clinic.email}
                      </Text>
                    </div>
                  </div>
                  <Text fz={'xs'} className='text-red-300'>
                    {clinic.city}
                  </Text>
                </div>
              ))}
            </OverviewCard> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import AppLayout from '@/layout/AppLayout'
import { Card, Text } from '@mantine/core'
import { IconBook, IconPlug, IconProgressCheck } from '@tabler/icons-react'
import Link from 'next/link'

const docs = [
  {
    title: 'API Quickstart',
    link: '/dashboard',
    icon: <IconBook color='#69d5e8' />,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat dolorum nihil assumenda aperiam.',
  },
  {
    title: 'Processing claims',
    link: '/dashboard',
    icon: <IconProgressCheck color='#69d5e8' />,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat dolorum nihil assumenda aperiam.',
  },
  {
    title: 'Payout Integration',
    link: '/dashboard',
    icon: <IconPlug color='#69d5e8' />,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat dolorum nihil assumenda aperiam.',
  },
]

const Documentation = () => {
  return (
    <AppLayout>
      <div className='flex flex-col gap-2 mb-20'>
        <h4 className='uppercase text-green-600 font-semibold text-xs'>
          Leverage our resources
        </h4>
        <h2 className='text-3xl text-slate-700'>Most Popular</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {docs.map((doc) => (
          <Link key={doc.title} href={doc.link}>
            <Card shadow='lg' radius={'md'} padding={20}>
              <div className='flex items-center gap-2 mb-2'>
                {doc.icon}
                <Text fw={'bold'}>{doc.title}</Text>
              </div>
              <Text c={'dimmed'} fz={'sm'}>
                {doc.desc}
              </Text>
            </Card>
          </Link>
        ))}
      </div>
    </AppLayout>
  )
}
export default Documentation

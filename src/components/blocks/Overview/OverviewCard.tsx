import { Box, Card, Text } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import Link from 'next/link'

interface OverviewCardProps {
  children: React.ReactNode
  link: string
  title: string
}

const OverviewCard = ({ children, link, title }: OverviewCardProps) => {
  return (
    <Card>
      <div className='flex justify-between items-center'>
        <Text className='text-slate-700 font-semibold'>{title}</Text>
        <Link href={`${link}`}>
          <IconExternalLink color='gray' size={20} />
        </Link>
      </div>

      <Box mt={20}>{children}</Box>
    </Card>
  )
}

export default OverviewCard

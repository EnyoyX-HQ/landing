import { ComingSoonBanner } from '@/images'
import AppLayout from '@/layout/AppLayout'
import { Box, Text } from '@mantine/core'
import Image from 'next/image'
const Salaries = () => {
  return (
    <AppLayout>
      <Box className='flex flex-col items-center'>
        <Image src={ComingSoonBanner} alt='coming soon illustration' />
        <p className='font-bold text-2xl text-slate-600'>
          This page is currently unavailable
        </p>
      </Box>
    </AppLayout>
  )
}
export default Salaries

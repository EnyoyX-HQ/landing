import AppLayout from '@/layout/AppLayout'
import { ComingSoonBanner } from '@/images'
import { Box } from '@mantine/core'
import Image from 'next/image'
// import ContactPage from '../../components/Contact'
const Contact = () => {
  return (
    <AppLayout>
      {/* <ContactPage  /> */}
      <Box className='flex flex-col items-center'>
        <Image src={ComingSoonBanner} alt='coming soon illustration' />
        <p className='font-bold text-2xl text-slate-600'>
          This page is currently unavailable
        </p>
      </Box>
    </AppLayout>
  )
}
export default Contact
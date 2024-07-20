import AppLayout from '@/layout/AppLayout'
// import SignUpPage from '../../components/Submissions'
import { ComingSoonBanner } from '@/images'
import { Box } from '@mantine/core'
import Image from 'next/image'
const Signup = () => {
  return (
    <AppLayout>
      {/* <SignUpPage /> */}
      <Box className='flex flex-col items-center'>
        <Image src={ComingSoonBanner} alt='coming soon illustration' />
        <p className='font-bold text-2xl text-slate-600'>
          This page is currently unavailable
        </p>
      </Box>
    </AppLayout>
  )
}
export default Signup
import AppLayout from '@/layout/AppLayout'
//import '../../shadcn.css'
import HomePage from '../components/home'

export default function Dashboard() {
  return (
    <AppLayout>
      <HomePage businessType='payer' />
    </AppLayout>
  )
}
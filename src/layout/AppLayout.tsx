'use client'

import { Header } from '@/components'
import SideNav from './SideNav'
import { AppShell, Group, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

interface AppLayoutProps {
  children: React.ReactNode
  title?: string
}

const AppLayout = ({ children, title }: AppLayoutProps) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' className={`flex items-center justify-between`} px='md'>
          <Header openNav={opened} onClick={toggle} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <SideNav />
      </AppShell.Navbar>
      <AppShell.Main className='bg-slate-50' pb={100}>
        <Title order={2} mb={30}>
          {title}
        </Title>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default AppLayout

'use client'

import { ScrollArea, AppShell, Box, ThemeIcon, rem, Text } from '@mantine/core'
import {
  IconUser,
  IconSettings,
  IconLogout,
  IconLayoutDashboard,
  IconInvoice,
  //IconFiles,
  IconCoins,
  IconQuestionMark,
  IconCurrencyDollar,
} from '@tabler/icons-react'
import classes from '@/styles/SideNav.module.css'
import LinksGroup from './LinksGroup'
import { useRouter } from 'next/navigation'

const SideNav = () => {
  const router = useRouter()
  const clinicsNavLinks = [
    { label: 'Overview', navLink: '/dashboard/provider', icon: IconLayoutDashboard },
    { label: 'Invoices', navLink: '/dashboard/provider/invoices', icon: IconInvoice },
    { label: 'Salaries', navLink: '/dashboard/provider/salaries', icon: IconCoins },
    { label: 'Billing', navLink: '/dashboard/provider/billing', icon: IconCurrencyDollar },
    {
      label: 'My profile',
      navLink: '/dashboard/provider/settings/profile',
      icon: IconUser,
    },
    { label: 'Documentation', navLink: '/dashboard/provider/docs', icon: IconSettings },
    { label: 'Support', navLink: '/dashboard/provider/support', icon: IconQuestionMark },
  ]
  const links = clinicsNavLinks.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ))
  return (
    <>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <AppShell.Section>
        <Box
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => router.push('/login')}
        >
          <ThemeIcon variant='light' color={'red'} size={30}>
            <IconLogout style={{ width: rem(18), height: rem(18) }} />
          </ThemeIcon>
          <Box ml='md' c={'red'}>
            Log out
          </Box>
        </Box>
      </AppShell.Section>
    </>
  )
}

export default SideNav

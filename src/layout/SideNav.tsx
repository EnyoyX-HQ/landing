'use client'

import { ScrollArea, AppShell, Box, ThemeIcon, rem, /*Text*/} from '@mantine/core'
import {
  IconUser,
  IconSettings,
  IconLogout,
  IconLayoutDashboard,
  IconInvoice,
  IconCoins,
  IconUsers,
  IconQuestionMark,
  IconCurrencyDollar,
  IconFileInvoice,
  IconTablePlus,
} from '@tabler/icons-react'
import classes from '@/styles/SideNav.module.css'
import LinksGroup from './LinksGroup'
import { useRouter } from 'next/navigation'

const SideNav = () => {
  const IconContract = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-contract">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
        <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
        <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
        <path d="M9 7h4" />
        <path d="M9 11h4" />
        <path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" />
      </svg>
    )
  }
  const router = useRouter()
  const clinicsNavLinks = [
    { label: 'Overview', navLink: '/dashboard/provider', icon: IconLayoutDashboard },
    { label: 'Invoices', navLink: '/dashboard/provider/invoices', icon: IconInvoice },
    { label: 'Accounts', navLink: '/dashboard/admin/accounts', icon: IconUsers },
    { label: 'Invoice List', navLink: '/dashboard/admin/invoices', icon: IconFileInvoice },
    { label: 'Signup', navLink: '/dashboard/admin/signup', icon: IconContract },
    { label: 'Contacts', navLink: '/dashboard/admin/contact-us', icon: IconTablePlus },
    { label: 'Salaries', navLink: '/dashboard/provider/salaries', icon: IconCoins },
    { label: 'Billing', navLink: '/dashboard/provider/billing', icon: IconCurrencyDollar },
    { label: 'My profile', navLink: '/dashboard/provider/settings/profile', icon: IconUser },
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

'use client'
// import { ExButton } from '@/components'
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  List,
  ScrollArea,
  Table,
  Tabs,
  Text,
  TextInput,
  rem,
  Skeleton,
} from '@mantine/core'
import TableSort from '@/components/elements/AdminTable/user'
// import { IconCircleCheck, IconPencil } from '@tabler/icons-react'
import Image from 'next/image'
import { ComingSoonBanner } from '@/images'
// import Link from 'next/link'
import { useEffect, useState } from 'react'
// import classes from '@/styles/InputStyle.module.css'



const Users = () => {
  //states
  const [isFetching, setIsFetching] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 5000)
  })

  return (
    <div>
      <h1 className='text-lg font-semibold md:text-2xl mb-4'>Accounts</h1>

      <Tabs color='green' defaultValue='provider' mt={40}>
        <Tabs.List>
          <Tabs.Tab value='provider'>Providers</Tabs.Tab>
          <Tabs.Tab value='payer'>Insurers</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='provider'>
          <Box mt={20}>
            <div>
              <div className='mt-10'>
                {isFetching ? (
                  <Skeleton height={125} mt={6} radius='md' />
                ) : (
                  <TableSort />
                )}
              </div>
            </div>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value='payer'>
          <Box mt={24} className='flex flex-col items-center'>
            <Image src={ComingSoonBanner} alt='coming soon illustration' />
          </Box>
        </Tabs.Panel>

      </Tabs>
    </div>
  )
}

export default Users

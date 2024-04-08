'use client'

import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Group,
  TextInput,
  rem,
} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
import { LogoDark } from '@/images'
import UserMenu from '../UserMenu'

const Header = ({ openNav, onClick }: any) => {
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />

  return (
    <>
      <Burger opened={openNav} onClick={onClick} hiddenFrom='sm' size='sm' />

      <Link href={'/'}>
        <Image src={LogoDark} width={100} alt='logo' />
      </Link>

      <Box className='flex gap-5'>
        <TextInput
          leftSectionPointerEvents='none'
          leftSection={icon}
          placeholder='Search'
          className='hidden md:block'
          radius='xl'
        />
        <Group display={{ sm: 'none' }}>
          <ActionIcon
            variant='default'
            radius='xl'
            size='lg'
            aria-label='Search'
          >
            <IconSearch size={20} />
          </ActionIcon>
        </Group>

        <UserMenu />
      </Box>
    </>
  )
}

export default Header

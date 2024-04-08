'use client'

import { Group, Box, ThemeIcon, UnstyledButton, rem } from '@mantine/core'
import classes from '@/styles/LinksGroup.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  navLink?: any
}

const LinksGroup = ({ icon: Icon, label, navLink }: LinksGroupProps) => {
  const currentPath = usePathname()

  return (
    <>
      <Link href={navLink}>
        <UnstyledButton
          className={`${classes.control} ${
            navLink === currentPath && classes.active
          }`}
        >
          <Group justify='space-between' gap={0}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon variant='light' color={'green'} size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml='md'>{label}</Box>
            </Box>
          </Group>
        </UnstyledButton>
      </Link>
    </>
  )
}

export default LinksGroup

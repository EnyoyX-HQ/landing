'use client'

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconArrowRight,
} from '@tabler/icons-react'
import classes from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/images'
import { ExButton } from '@/components'

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
]

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap='nowrap' align='flex-start'>
        <ThemeIcon size={34} variant='default' radius='md'>
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size='sm' fw={500}>
            {item.title}
          </Text>
          <Text size='xs' c='dimmed'>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box pb={120}>
      <header className={`ex--container ${classes.header}`}>
        <Group justify='space-between' h='100%'>
          <Link href={'/'}>
            <Image src={Logo} width={100} alt='logo' />
          </Link>

          <Group h='100%' gap={0} visibleFrom='sm'>
            <a href='#' className={classes.link}>
              About
            </a>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
            >
              <HoverCard.Target>
                <a href='#' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={'white'}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify='space-between' px='md'>
                  <Text fw={500}>Features</Text>
                  <Anchor href='#' fz='xs'>
                    View all
                  </Anchor>
                </Group>

                <Divider my='sm' />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify='space-between'>
                    <div>
                      <Text fw={500} fz='sm'>
                        Get started
                      </Text>
                      <Text size='xs' c='dimmed'>
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant='default'>Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href='#' className={classes.link}>
              Blog
            </a>
            <a href='#' className={classes.link}>
              Careers
            </a>
          </Group>

          <Group visibleFrom='sm'>
            <ExButton
              type='link'
              href='/'
              rightIcon={<IconArrowRight />}
              isGradient
            >
              Get started
            </ExButton>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            color='white'
            hiddenFrom='sm'
          />
        </Group>
      </header>

      <Drawer.Root
        opened={drawerOpened}
        onClose={closeDrawer}
        size='80%'
        position='right'
        hiddenFrom='sm'
        zIndex={1000000}
      >
        <Drawer.Overlay backgroundOpacity={0.5} blur={4} />
        <Drawer.Content bg={'#001a1b'}>
          <Drawer.Header className={classes.drawer}>
            <Drawer.Title>
              <Link href={'/'}>
                <Image src={Logo} width={100} alt='logo' />
              </Link>
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <ScrollArea h={`calc(100vh - ${rem(80)})`} pt={30} mx='-md'>
              <a href='#' className={classes.drawerLink}>
                Home
              </a>
              <UnstyledButton
                className={classes.drawerLink}
                onClick={toggleLinks}
              >
                <Center inline>
                  <Box component='span' mr={5}>
                    Features
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={'white'}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened} c={'white'}>
                {links}
              </Collapse>
              <a href='#' className={classes.drawerLink}>
                Blog
              </a>
              <a href='#' className={classes.drawerLink}>
                Careers
              </a>

              <Group pb='xl' mt={40} px='md'>
                <ExButton
                  type='link'
                  href='/'
                  rightIcon={<IconArrowRight />}
                  isGradient
                >
                  Get started
                </ExButton>
              </Group>
            </ScrollArea>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar

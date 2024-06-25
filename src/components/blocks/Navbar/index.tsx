'use client'

import {useState, useEffect} from 'react';
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
  Combobox,
  Input, 
  InputBase,
  useCombobox,
  Menu, 
  Avatar,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconCoin,
  IconChevronDown,
  IconArrowRight,
  IconInvoice,
  IconUsers,
  IconArticle,
  IconSquares,
  IconWorld,
} from '@tabler/icons-react'
import classes from '@/styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/images'
import { ExButton } from '@/components'
import AnnouncementSaleBar from '../Announcement'
//import Dashboard from '../../../app/dashboard/page';

const clinicNavbarData = [
  {
    icon: IconNotification,
    title: 'Salaries',
    description: 'Advanced data analytical tools for employees salary data',
  },
  /*{
    icon: IconCode,
    title: 'Claims Processing',
    description: 'Advanced AI-powered tools to process and claims',
  },*/
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'Real-time analytics and results to generate insights',
  },
  {
    icon: IconBook,
    title: 'Fraud Detection',
    description: 'Robust fraud detection system to identify fraudulent claims',
  },
  {
    icon: IconCoin,
    title: 'Payment',
    description: 'Enhance revenue by getting paid quickly',
  },
  {
    icon: IconInvoice,
    title: 'Invoice Management',
    description: 'AI-powered tools to process & verify clinic invoice submission',
  },
]

const payerNavbarData = [
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'Real-time analytics and results to generate insights',
  },
  {
    icon: IconInvoice,
    title: 'Invoice Management',
    description: 'Analyze and approve invoice submission from clinics',
  },
]

const companyData = [
  {
    icon: IconUsers,
    title: 'About Us',
    description: 'Learn more about our company',
  },
  {
    icon: IconCoin,
    title: 'Partner With Us',
    description: 'Get started by partnering with us',
  },
  {
    icon: IconSquares,
    title: 'Careers',
    description: 'Join our team',
  },
  {
    icon: IconArticle,
    title: 'Blog',
    description: 'Envoyx latest news & updates',
  },
]

const languages = [
  'French', 
  'English',
];
const Navbar = () => {
  //states
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpenedCo, { toggle: toggleLinksCo }] = useDisclosure(false)
  const [linksOpenedClinic, { toggle: toggleLinksClinic }] =
    useDisclosure(false)
  const [linksOpenedPayer, { toggle: toggleLinksPayer }] = useDisclosure(false)
  const [linksOpenedSolutions, { toggle: toggleLinkSolutions }] =
    useDisclosure(false)

  //states
  const [language, setLanguage] = useState<string | null>(null);

  const languageOptions = languages.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const theme = useMantineTheme()

  const clinicNavBarLinks = clinicNavbarData.map((item) => (
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
  
  const payerNavBarLinks = payerNavbarData.map((item) => (
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

  const companyLinks = companyData.map((item) => (
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
    <>
    <AnnouncementSaleBar />
    <Box pb={43}>
      <header className={`ex--container ${classes.header}`}>
        <Group justify='space-between' h='100%'>
          <Link href={'/'}>
            <Image src={Logo} width={100} alt='logo' />
          </Link>

          <Group h='100%' gap={0} visibleFrom='md'>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
              id='about-us-container'
            >
              <HoverCard.Target>
                <a href='#' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      Company
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={'white'}
                    />
                  </Center>
                </a>
              </HoverCard.Target>
              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <SimpleGrid cols={2} spacing={0}>
                  {companyLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
              id='clinic-container'
            >
              <HoverCard.Target>
                <a href='#' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      For Clinics
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
                  <Text fw={500}>Clinics</Text>
                  <Anchor href='#' fz='xs'>
                    View all
                  </Anchor>
                </Group>

                <Divider my='sm' />

                <SimpleGrid cols={2} spacing={0}>
                  {clinicNavBarLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify='space-between'>
                    <div>
                      <Text fw={500} fz='sm'>
                        Get started
                      </Text>
                      <Text size='xs' c='dimmed'>
                        Login to get started
                      </Text>
                    </div>
                    {/*<Button  
                      variant='default'
                      onClick={(event) => event.preventDefault()}
                    >
                      Login
                    </Button>*/}
                    <ExButton
                      type='link'
                      href='/dashboard/provider'
                      isGradient
                    >
                      Login
                    </ExButton>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
              id='clinic-container'
            >
              <HoverCard.Target>
                <a href='#' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      For Payers
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
                  <Text fw={500}>Payers</Text>
                  <Anchor href='#' fz='xs'>
                    View all
                  </Anchor>
                </Group>

                <Divider my='sm' />

                <SimpleGrid cols={2} spacing={0}>
                  {payerNavBarLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify='space-between'>
                    <div>
                      <Text fw={500} fz='sm'>
                        Get started
                      </Text>
                      <Text size='xs' c='dimmed'>
                        Login to get started
                      </Text>
                    </div>
                    {/*<Button 
                      variant='default'
                      onClick={(event) => event.preventDefault()}
                    >
                      Login
                    </Button>*/}
                    <ExButton
                      type='link'
                      href='#'
                      isGradient
                    >
                      Login
                    </ExButton>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            {/*<HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
              id='features-container'
            >
              <HoverCard.Target>
                <a href='#' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      Solutions
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
                  <Text fw={500}>Solutions</Text>
                  <Anchor href='#' fz='xs'>
                    View all
                  </Anchor>
                </Group>

                <Divider my='sm' />

                <SimpleGrid cols={2} spacing={0}>
                  {clinicNavBarLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify='space-between'>
                    <div>
                      <Text fw={500} fz='sm'>
                        Get started
                      </Text>
                      <Text size='xs' c='dimmed'>
                        Login to get started
                      </Text>
                    </div>
                    <Button variant='default'>Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>*/}
            <a href='#' className={classes.link}>
              Pricing
            </a>
          </Group>
          <Group visibleFrom='md' className='flex justify-center items-center'>
            {/*<Combobox
              withArrow
              store={combobox}
              onOptionSubmit={(val) => {
                setLanguage(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <Button
                  rightSection={<IconChevronDown style={{width: rem(15), height: rem(15)}} />}
                  onClick={() => combobox.toggleDropdown()}
                  styles={{
                    root: {backgroundColor: 'transparent'}
                  }}
                >
                  {language || <IconWorld style={{ color: 'white', width: rem(23), height: rem(23) }} />}
                </Button>
              </Combobox.Target>
              <Combobox.Dropdown>
                <Combobox.Options>{languageOptions}</Combobox.Options>
              </Combobox.Dropdown>
              </Combobox>*/}
            <Menu
              withArrow
              width={80}
              position='bottom'
              transitionProps={{ transition: 'pop' }}
              withinPortal
            >
              <Menu.Target>
                {/*<Button  
                  variant='default'
                  onClick={(event) => event.preventDefault()}
                  rightSection={<IconChevronDown color={'white'} style={{ width: rem(16), height: rem(16) }} />}
                  styles={{
                    root: { backgroundColor: 'transparent', border: '0px' },
                  }}
                >
                  <IconWorld style={{ color: 'white', width: rem(25), height: rem(25) }} />
                </Button>*/}
                <Center inline className='cursor-pointer'>
                  <Box component='span' mr={5}>
                    <IconWorld style={{ color: 'white', width: rem(25), height: rem(25) }} />
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={'white'}
                  />
                </Center>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <a href="/fr" className="flex justify-center m-auto items-center">
                    French
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="/en" className="flex justify-center m-auto items-center">
                    English
                  </a>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <div>
              <a href='/dashboard/provider' className={`${classes.link}`}>
                Login
              </a>
            </div>
            <ExButton
              type='link'
              href='/contact-us'
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
            hiddenFrom='md'
          />
        </Group>
      </header>

      <Drawer.Root
        opened={drawerOpened}
        onClose={closeDrawer}
        size='80%'
        position='right'
        hiddenFrom='md'
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
                onClick={toggleLinksCo}
              >
                <Center inline>
                  <Box component='span' mr={5}>
                    Company
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={'white'}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpenedCo} c={'white'}>
                {companyLinks}
              </Collapse>
              <UnstyledButton
                className={classes.drawerLink}
                onClick={toggleLinksClinic}
              >
                <Center inline>
                  <Box component='span' mr={5}>
                    For Clinics
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={'white'}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpenedClinic} c={'white'}>
                {clinicNavBarLinks}
              </Collapse>
              <UnstyledButton
                className={classes.drawerLink}
                onClick={toggleLinksPayer}
              >
                <Center inline>
                  <Box component='span' mr={5}>
                    For Payers
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={'white'}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpenedPayer} c={'white'}>
                {payerNavBarLinks}
              </Collapse>
              <UnstyledButton
                className={classes.drawerLink}
                onClick={toggleLinkSolutions}
              >
                <Center inline>
                  <Box component='span' mr={5}>
                    Solutions
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={'white'}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpenedSolutions} c={'white'}>
                {clinicNavBarLinks}
              </Collapse>
              <a href='#' className={classes.drawerLink}>
                Pricing
              </a>

              <Group pb='xl' mt={40} px='md' wrap='wrap'>
                <a href='/dashboard/provider' className={`${classes.link}`}>
                  Login
                </a>
                <ExButton
                  type='link'
                  href='/contact-us'
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
    </>
  )
}

export default Navbar

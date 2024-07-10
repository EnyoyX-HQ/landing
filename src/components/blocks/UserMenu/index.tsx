import { Menu, Group, Text, Avatar, rem } from '@mantine/core'
import {useEffect, useState} from 'react';
import {
  IconLogout,
  // IconHeart,
  // IconMessage,
  IconSettings,
  // IconPlayerPause,
  IconQuestionMark,
  // IconSwitchHorizontal,
  IconChevronRight,
  // IconDots,
} from '@tabler/icons-react'
import { getClinics } from '@/lib/actions';
const UserMenu = () => {
  const[email, setEnail] = useState<any>(null);
  const[name, setName] = useState<any>(null);
  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await getClinics()
        setEnail(data.data[0].email)
        setName(data.data[0].name)
      } catch (error) {
        console.error('Error fetching clinics:', error)
      }
    }
    fetchClinics()
  }, [])
  return (
    <Group justify='center'>
      <Menu
        withArrow
        width={300}
        position='bottom'
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <Avatar
            radius='xl'
            className='cursor-pointer'
            src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww'
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            rightSection={
              <IconChevronRight
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            <Group>
              <Avatar
                radius='xl'
                src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww'
              />

              <div>
                <Text fw={500}>
                  {name ?? `HealthCare Center`} 
                </Text>
                <Text size='xs' c='dimmed'>
                  {email ?? `envoyx.org@gmail.com`}
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            <a href="/dashboard/provider/settings/profile">
              Account settings
            </a>
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconQuestionMark
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            <a href="/dashboard/provider/support">
              Support
            </a>  
          </Menu.Item>
          {/*<Menu.Item
            leftSection={
              <IconSwitchHorizontal
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Change account
          </Menu.Item>*/}

          <Menu.Divider />

          <Menu.Item
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Log out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export default UserMenu

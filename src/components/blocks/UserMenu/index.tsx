import { Menu, Group, Text, Avatar, rem } from '@mantine/core'
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronRight,
  IconDots,
} from '@tabler/icons-react'

const UserMenu = () => {
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
            src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'
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
                src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'
              />

              <div>
                <Text fw={500}>HealthCare Center</Text>
                <Text size='xs' c='dimmed'>
                  admin@healthcarecenter.com
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
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Change account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export default UserMenu

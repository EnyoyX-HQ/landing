import { Menu, Group, Text, Avatar, rem } from '@mantine/core'
import {
  IconBell
} from '@tabler/icons-react'


const NotificationMenu = () => {
  const icon = <IconBell style={{ width: rem(25), height: rem(25) }} />
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
            color="green"
            className='cursor-pointer' 
            radius="sm"
          >
            {icon}
          </Avatar>
        </Menu.Target>
        <Menu.Dropdown>
          {/*<Menu.Item
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
                <Text fw={500}>HealthCare Center</Text>
                <Text size='xs' c='dimmed'>
                  admin@healthcarecenter.com
                </Text>
              </div>
            </Group>
          </Menu.Item>*/}
          <Menu.Label>Notifications</Menu.Label>
          <Menu.Item
            /*leftSection={
              <IconSettings
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }*/
          >
            <p className="flex justify-center m-auto items-center">
              No new notifcations
            </p>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item>
            Live updates
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export default NotificationMenu
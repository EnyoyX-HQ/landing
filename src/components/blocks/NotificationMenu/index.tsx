import {
  Menu,
  Group,
  Text,
  Avatar,
  rem,
  ActionIcon,
  ScrollArea,
  Indicator,
} from '@mantine/core'
import { IconBell, IconNotification, IconProgress } from '@tabler/icons-react'

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
          <Indicator inline label='1' color='red' size={16}>
            <Avatar color='green' className='cursor-pointer' radius='sm'>
              {icon}
            </Avatar>
          </Indicator>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Notifications</Menu.Label>
          <ScrollArea.Autosize mah={250}>
            <Menu.Item
              leftSection={
                <ActionIcon
                  variant='light'
                  color='yellow'
                  aria-label='Settings'
                >
                  <IconProgress
                    style={{ width: '70%', height: '70%' }}
                    stroke={1.5}
                  />
                </ActionIcon>
              }
            >
              <div>
                <Text fw={500} fz={'sm'}>
                  New Invoice
                </Text>
                <Text size='xs' c='dimmed'>
                  Your invoice of 53,400 CFA for ASCOMA is in progress.
                </Text>
              </div>
            </Menu.Item>
          </ScrollArea.Autosize>
          {/* <Menu.Item>
            <p className='flex justify-center m-auto items-center'>
              No new notifcations
            </p>
          </Menu.Item> */}

          <Menu.Divider />

          <Menu.Item>Live updates</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export default NotificationMenu

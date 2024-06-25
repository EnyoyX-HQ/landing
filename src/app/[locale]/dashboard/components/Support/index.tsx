'use client'

import { ExButton } from '@/components'
import { Box, Card, List, ThemeIcon, rem } from '@mantine/core'
import {
  IconBrandDiscordFilled,
  IconCircleCheck,
  IconCircleDashed,
} from '@tabler/icons-react'

const Support = () => {
  return (
    <div>
      <h1 className='text-lg font-semibold md:text-2xl mb-4'>Help & Support</h1>

      <Box my={40}>
        <Card padding={'lg'} withBorder>
          <h3 className='font-semibold text-lg'>How to start Envoyx</h3>
          <p className='my-2 text-xs text-gray-500'>
            This video will be your guiding hand to everything masterfiler.
            Learn about our product family: from how to get it to how to set it
            up.
          </p>

          <List
            spacing='xs'
            size='sm'
            mt={20}
            className='text-gray-500'
            center
            icon={
              <ThemeIcon color='black' size={24} radius='xl'>
                <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            }
          >
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>
              To start development server run npm start command
            </List.Item>
            <List.Item>
              Run tests to make sure your changes do not break the build
            </List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Card>
      </Box>

      <Card padding={'lg'} className='w-fit' withBorder>
        <h3 className='font-semibold text-lg'>Envoyx Community</h3>
        <h5 className='my-3 text-gray-600'>Discord</h5>
        <p className='text-xs text-gray-500'>
          Connect with other users, share best practices and learn from one
          another.
        </p>

        <div className='btn-area mt-5'>
          <ExButton
            type='action'
            leftIcon={<IconBrandDiscordFilled />}
            className='w-full mt-10'
            isGradient
          >
            Join Discord
          </ExButton>
        </div>
      </Card>
    </div>
  )
}

export default Support

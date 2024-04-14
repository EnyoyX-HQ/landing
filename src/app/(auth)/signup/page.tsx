'use client'

import { ExButton, GlowingBalls } from '@/components'
import { LogoDark, LogoWhite } from '@/images'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Box,
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter()

  return (
    <div className='h-full md:h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='auth-section hidden md:flex items-center justify-center'>
        <GlowingBalls />
        <Box>
          <Box>
            <h1 className='text-white text-5xl text-center font-bold'>
              Create an account
            </h1>
            <Text c='gray' size='xl' ta='center' mt={5}>
              Enter your details to proceed
            </Text>
          </Box>
        </Box>
      </div>
      <Container size={520} py={40}>
        <Link href={'/'} className='w-full'>
          <Image
            src={LogoDark}
            width={150}
            className='mx-auto mb-12'
            alt='logo'
          />
        </Link>

        <Paper p={10} mt={30}>
          <Group grow mb='md' mt='md'>
            <TextInput label='First name' required />
            <TextInput label='Last name' required />
          </Group>
          <Group grow mb='md' mt='md'>
            <TextInput label='Company' required />
            <TextInput label='Email' placeholder='you@email.com' required />
          </Group>
          <PasswordInput
            label='Password'
            placeholder='Your password'
            required
            mt='md'
          />
          <ExButton
            type='link'
            href='/dashboard'
            className='w-full mt-10'
            isGradient
          >
            Sign up
          </ExButton>

          <Text c='dimmed' size='sm' ta='center' mt={40}>
            Already have an account?{' '}
            <Anchor
              onClick={() => router.push('/login')}
              size='sm'
              c={'green'}
              fw={'bold'}
              component='button'
            >
              Sign in
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  )
}

export default SignUp

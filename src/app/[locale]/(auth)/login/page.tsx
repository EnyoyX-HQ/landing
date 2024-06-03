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
  Stack,
} from '@mantine/core'
import { IconKeyFilled } from '@tabler/icons-react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function GoogleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 256 262'
      style={{ width: '0.9rem', height: '0.9rem' }}
      {...props}
    >
      <path
        fill='#4285F4'
        d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
      />
      <path
        fill='#34A853'
        d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
      />
      <path
        fill='#FBBC05'
        d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
      />
      <path
        fill='#EB4335'
        d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
      />
    </svg>
  )
}

const Login = () => {
  const router = useRouter()

  return (
    <div className='h-full md:h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='auth-section hidden md:flex items-center justify-center'>
        <GlowingBalls />
        <Box>
          <Box>
            <h1 className='text-white text-5xl text-left px-4 font-bold mb-6'>
              Welcome back!
            </h1>
            <Text c='gray' size='md' ta='left' pl={16} pr={16}>
              Enter your details to proceed
            </Text>
          </Box>
        </Box>
      </div>
      <Container size={420} py={40}>
        <Paper p={10} mt={30}>
          <Link href={'/'} className='w-full'>
            <Image
              src={LogoDark}
              width={150}
              className='mx-auto mb-12'
              alt='logo'
            />
          </Link>
          <Box mb={10}>
            <Text c='dimmed' size='sm' ta='center' mt={5}>
              Do not have an account yet?{' '}
              <Anchor
                onClick={() => router.push('/contact-us')}
                size='sm'
                c={'green'}
                fw={'bold'}
                component='button'
              >
                Contact us
              </Anchor>
            </Text>
          </Box>
          <Stack h={100} align="stretch" justify="center" gap="md">
            <Button variant='outline' leftSection={<IconKeyFilled />} color='gray' size='sm' radius={'xl'}>
              SSO Login
            </Button>
            <Button
              variant='outline'
              leftSection={<GoogleIcon />}
              color='gray'
              size='sm'
              radius={'xl'}
            >
              Sign in with Google
            </Button>
          </Stack>
          <Divider
            label='Or continue with email'
            labelPosition='center'
            my='lg'
          />
          <TextInput /*label='Email'*/ placeholder='Email Address' required />
          <PasswordInput
            /*label='Password'*/
            placeholder='Password'
            required
            mt='md'
          />
          <Group justify='space-between' mt='lg'>
            <Checkbox label='Remember me' />
            <Anchor component='button' c='green' size='sm'>
              Forgot password?
            </Anchor>
          </Group>
          <ExButton
            type='link'
            href='/dashboard/provider'
            className='w-full mt-10'
            isGradient
          >
            Login
          </ExButton>
        </Paper>
      </Container>
    </div>
  )
}

export default Login

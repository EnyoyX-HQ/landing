'use client'

import { ExButton } from '@/components'
import { EksellDisplay } from '@/components/elements/FontContainer'
import { LogoWhite } from '@/images'
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

const SignIn = () => {
  const router = useRouter()

  return (
    <div className='h-full md:h-screen gradient-bg'>
      <Container size={420} py={40}>
        <Link href={'/'} className='w-full'>
          <Image
            src={LogoWhite}
            width={150}
            className='mx-auto mb-12'
            alt='logo'
          />
        </Link>

        <Paper withBorder shadow='md' p={30} mt={30} radius='lg'>
          <Box mb={10}>
            <Title
              ta='center'
              className={`${EksellDisplay.variable} text-slate-700`}
            >
              Welcome back!
            </Title>
            <Text c='dimmed' size='sm' ta='center' mt={5}>
              Do not have an account yet?{' '}
              <Anchor
                onClick={() => router.push('/signup')}
                size='sm'
                c={'green'}
                fw={'bold'}
                component='button'
              >
                Create account
              </Anchor>
            </Text>
          </Box>
          <Group grow mb='md' mt='md'>
            <Button variant='outline' color='gray' size='md' radius={'xl'}>
              SSO
            </Button>
            <Button
              variant='outline'
              leftSection={<GoogleIcon />}
              color='gray'
              size='md'
              radius={'xl'}
            >
              Google
            </Button>
          </Group>

          <Divider
            label='Or continue with email'
            labelPosition='center'
            my='lg'
          />
          <TextInput label='Email' placeholder='you@mantine.dev' required />
          <PasswordInput
            label='Password'
            placeholder='Your password'
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
            href='/dashboard'
            className='w-full mt-10'
            isGradient
          >
            Sign in
          </ExButton>
        </Paper>
      </Container>
    </div>
  )
}

export default SignIn

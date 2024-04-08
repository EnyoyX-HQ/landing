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

const SignUp = () => {
  const router = useRouter()

  return (
    <div className='h-full md:h-screen gradient-bg'>
      <Container size={520} py={40}>
        <Link href={'/'} className='w-full'>
          <Image
            src={LogoWhite}
            width={150}
            className='mx-auto mb-12'
            alt='logo'
          />
        </Link>

        <Paper withBorder shadow='md' p={30} mt={30} radius='lg'>
          <Title ta='center' mb={4} className='text-slate-700'>
            Create an account
          </Title>
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
              onClick={() => router.push('/signin')}
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

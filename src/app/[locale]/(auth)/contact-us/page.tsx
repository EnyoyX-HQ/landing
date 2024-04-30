'use client'
import { useState } from 'react';
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
  Combobox,
  Input, 
  InputBase,
  useCombobox,
  Textarea
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const countries = [
  '🇨🇮 Côte d’Ivoire', 
  '🇬🇭 Ghana', 
  '🇳🇬 Nigeria', 
  '🇫🇷 France', 
  '🇺🇸 United States',
];
const interests = [
  'Newsletter', 
  'Social Media', 
  'Internet search', 
  'Blog',
  'YouTube', 
  'Word-of-Mouth',
  'Podcast'
];
const business = [
  'Healthcare Clinic', 
  'Healthcare Payer',
];

const SignUp = () => {
  const router = useRouter()
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const comboboxInterests = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const comboboxBusiness = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  //states
  const [value, setValue] = useState<string | null>(null);
  const [valueInterest, setValueInterest] = useState<string | null>(null);
  const [valueBusiness, setValueBusiness] = useState<string | null>(null);
  const [valueText, setValueText] = useState('');

  const countryOptions = countries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const interestOptions = interests.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const businessOptions = business.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  return (
    <div className='h-full md:h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='auth-section hidden md:flex items-center justify-center'>
        <GlowingBalls />
        <Box>
          <Box>
            <h1 className='text-white text-5xl text-left px-4 font-bold mb-6'>
              Contact Us
            </h1>
            <Text c='gray' size='md' ta='left' pl={16} pr={16}>
              We are here to provide the optimal solution to meet your needs.
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
            <TextInput placeholder='First name' required />
            <TextInput placeholder='Last name' required />
          </Group>
          <Group grow mb='md' mt='md'>
            <TextInput placeholder='Company' required />
            <TextInput placeholder='Email address' required />
          </Group>
          <Group grow mb='md' mt='md'>
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {value || <Input.Placeholder>Select Country</Input.Placeholder>}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{countryOptions}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <TextInput placeholder='Phone number' required />
          </Group>
          <Group grow mb='md' mt='md'>
            <Combobox
              store={comboboxBusiness}
              onOptionSubmit={(val) => {
                setValueInterest(val);
                comboboxBusiness.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => comboboxBusiness.toggleDropdown()}
                >
                  {valueBusiness || <Input.Placeholder>Type of Business</Input.Placeholder>}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{businessOptions}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <Combobox
              store={comboboxInterests}
              onOptionSubmit={(val) => {
                setValueInterest(val);
                comboboxInterests.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => comboboxInterests.toggleDropdown()}
                >
                  {valueInterest || <Input.Placeholder>Source of awareness</Input.Placeholder>}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{interestOptions}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Group>
          <Group grow mb='md' mt='md'>
            <Textarea
              size="sm"
              resize="vertical"
              placeholder="Tell us about your business"
              value={valueText}
              onChange={(event) => setValue(event.currentTarget.value)}
              autosize
              minRows={4}
            />
          </Group>
          {/*<PasswordInput
            label='Password'
            placeholder='Your password'
            required
            mt='md'
          />*/}
          <ExButton
            type='link'
            href='/dashboard/provider'
            className='w-full mt-10'
            isGradient
          >
            {/*Sign up*/}
            Submit
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

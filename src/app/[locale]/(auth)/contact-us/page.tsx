'use client'
import { useState } from 'react';
import { ExButton, GlowingBalls } from '@/components'
import { LogoDark, LogoWhite } from '@/images'
import { IMaskInput } from 'react-imask';
import { useMediaQuery } from '@mantine/hooks';
import { useForm } from '@mantine/form';
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
  /*'🇳🇬 Nigeria', 
  '🇫🇷 France', 
  '🇺🇸 United States',*/
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
  'Clinic', 
  'Payer',
  'Public Health',
  'Other'
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


  //mantine media queries
  const matches = useMediaQuery('(min-width: 769px)')
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
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { fname: '', lname: '', company: '', email: '', number: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      fname: (value: string) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
      lname: (value: string) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
      company: (value: string) => (value.length < 2 ? 'Company name must have at least 2 letters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      number: (value: string) => (/^[0-9\-\(\)\s\+]+$/.test(value) ? null : 'Invalid phone number')
    },
  });
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
              We are here to provide solutions to meet your needs.
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
        <form onSubmit={form.onSubmit(console.log)}>
          <Paper p={10} mt={30}>
            <Group grow mb='md' mt='md'>
              <TextInput required label="First name" placeholder='Enter your first name' key={form.key('fname')} {...form.getInputProps('fname')}/>
            </Group>
            <Group grow mb='md' mt='md'>
              <TextInput required label="Last name" placeholder='Enter your last name' key={form.key('lname')} {...form.getInputProps('lname')}/>
            </Group>
            <Group grow mb='md' mt='md'>
              <TextInput required label= "Company name" placeholder='Enter your company name' key={form.key('company')} {...form.getInputProps('company')} />
            </Group>
            <Group grow mb='md' mt='md'>
              <TextInput required label="Email" placeholder='Enter your email address' key={form.key('email')} {...form.getInputProps('email')} />
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
                    label="Country"
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                    required
                  >
                    {value || <Input.Placeholder>Select</Input.Placeholder>}
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>{countryOptions}</Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
              {/*<TextInput placeholder='Phone number' required />*/}
              <InputBase
                label="Telephone"
                /*component={IMaskInput}
                mask="+255 (000) 000-0000"*/
                
                placeholder="Phone"
                key={form.key('number')} 
                {...form.getInputProps('number')}
                
              />
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
                    label="Organization Type"
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => comboboxBusiness.toggleDropdown()}
                    required
                  >
                    {valueBusiness || <Input.Placeholder>Select</Input.Placeholder>}
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>{businessOptions}</Combobox.Options>
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
                    label="How did you hear about us"
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => comboboxInterests.toggleDropdown()}
                  >
                    {valueInterest || <Input.Placeholder><p className="text-[13px] leading-[18px] md:text-sm">Select</p></Input.Placeholder>}
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>{interestOptions}</Combobox.Options>
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
        </form>
      </Container>
    </div>
  )
}

export default SignUp

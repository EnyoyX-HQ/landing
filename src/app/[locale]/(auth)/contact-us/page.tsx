'use client'
import { useState } from 'react';
import { ExButton, GlowingBalls } from '@/components';
import { LogoDark, LogoWhite } from '@/images';
//import { IMaskInput } from 'react-imask';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { IconAt } from '@tabler/icons-react';
import { sendContactForm } from '@/lib/actions';
import { notifications } from '@mantine/notifications';
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
  Textarea,
  rem,
  LoadingOverlay,
  Loader,
  Code,
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const countryList = [
  '🇨🇮 Côte d’Ivoire', 
  '🇬🇭 Ghana',
  'Other' 
  /*'🇳🇬 Nigeria', 
  '🇫🇷 France', 
  '🇺🇸 United States',*/
];
const interestList = [
  'Newsletter', 
  'Social Media', 
  'Internet search', 
  'Blog',
  'YouTube',
  'LinkedIn', 
  'Word Of Mouth',
  'Podcast',
  'Other'
];
const businessTypeList = [
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
  const [country, setValueCountry] = useState('');
  const [interest, setValueInterest] = useState<string | null>(null);
  const [business, setValueBusiness] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  //const [visible, { toggle }] = useDisclosure(false);
  const initFormValues = { firstName: '', lastName: '', company: '', email: '', termOfService: false, country: country, number: '', businessType: business, interest: interest, message: '' }
  const initFormValuesState = { values: initFormValues, isLoading: false, error: '' }
  const [formValues, setFormValues] = useState(initFormValuesState);
  const [submittedValues, setSubmittedValues] = useState('');
  const { values, isLoading, error } = formValues

  //mantine media queries
  const matches = useMediaQuery('(min-width: 769px)')
  const countryOptions = countryList.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const interestOptions = interestList.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const businessOptions = businessTypeList.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  /*const sendContactForm = async(data: any) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then((response) => {
      if (!response.ok){
        console.error('Failed to send message:', response.statusText)
        throw new Error("Failed to send message.")
      }
      return response.json()
    })
  }*/
  const handleSubmit = async () => {
    setFormValues((prev) => ({
      ...prev,
      isLoading: true
    }))
    try {
      await sendContactForm(values)
      notifications.show({
        color: 'green',
        message: 'Message sent',
      })
    } catch(error) {
      console.error('Failed to submit contact form')
      let errorMsg: string;
      if (error instanceof Error) {
        errorMsg = error.message;
      }
      else {
        // Fallback for unexpected error shapes
        errorMsg = String(error);
      }
      setFormValues((prev) => {
        let errorMessage: string;
        if (error instanceof Error) {
          errorMessage = error.message;
        } else {
          // Fallback for unexpected error shapes
          errorMessage = String(error);
        }
        return {
          ...prev,
          isLoading: false,
          error: errorMessage,
        };
      });
      notifications.show({
        title: 'Oops!',
        color: 'red',
        message: errorMsg
      })
    }
  };
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { firstName: '', lastName: '', company: '', email: '', termOfService: false, country: country, number: '', businessType: business, interest: interest, message: message },
    onValuesChange: (values) => {
      setFormValues({ values, isLoading, error })
      /*setFormValues((prev) => ({
        ...prev,
        values: {
          ...prev.values,
        },
      }));*/
      //console.log(values);
    },
    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.lastName}`,
      company: values.company,
      termOfService: true,
      email: values.email,
      country: country,
      number: values.number,
      businessType: business,
      interest: interest,
      message: values.message,
    }),
    // functions will be used to validate values at corresponding key
    validate: {
      firstName: (value: string) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
      lastName: (value: string) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
      company: (value: string) => (value.length < 2 ? 'Company name must have at least 2 letters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      //country: (value: string) => (/^[A-Za-z]+$/.test(value) ? null : 'Invalid characters'),
      number: (value: string) => (/^[0-9\-\(\)\s\+]+$/.test(value) ? null : 'Invalid phone number'),
      //businessType: (value: string) => (/^[A-Za-z]+$/.test(value) ? null : 'Invalid characters'),
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
      <Container size={640} py={40}>
        <Link href={'/'} className='w-full'>
          <Image
            src={LogoDark}
            width={150}
            className='mx-auto mb-12'
            alt='logo'
          />
        </Link>
        <form 
          onSubmit={
            form.onSubmit((values) =>{
              handleSubmit()
              setValueCountry('')
              setValueInterest('')
              setValueBusiness('')
              setMessage('')
              form.setValues({
                firstName: '', 
                lastName: '', 
                company: '', 
                email: '', 
                termOfService: false, 
                country: country, 
                number: '', 
                businessType: business, 
                interest: interest, 
                message: message
              })
            }
          )}
        >
          <Paper p={5} mt={30}>
            <Group grow mb='md' mt='md'>
              <TextInput 
                required 
                label="First name" 
                placeholder='Enter your first name' 
                key={form.key('firstName')} 
                {...form.getInputProps('firstName')}
              />
            </Group>
            <Group grow mb='md' mt='md'>
              <TextInput 
                required label="Last name" 
                placeholder='Enter your last name' 
                key={form.key('lastName')} 
                {...form.getInputProps('lastName')}
              />
            </Group>
            <Group grow mb='md' mt='md'>
              <TextInput 
                required 
                label= "Company name" 
                placeholder='Enter your company name' 
                key={form.key('company')} 
                {...form.getInputProps('company')} 
              />
            </Group>
            <Group grow mb='md' mt='md'>
              <TextInput 
                required
                leftSectionPointerEvents="none"
                leftSection={icon} 
                label="Email" 
                placeholder='Enter your email address' 
                key={form.key('email')} 
                {...form.getInputProps('email')}
              />
              {/*<Checkbox
                mt="md"
                label="I agree to provide "
                key={form.key('termsOfService')}
                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
              />*/}
            </Group>
            <Group grow mb='md' mt='md'>
              <Combobox
                store={combobox}
                onOptionSubmit={(val) => {
                  setValueCountry(val);
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
                    key={form.key('country')} 
                    {...form.getInputProps('country')}
                  >
                    {country || <Input.Placeholder>Select</Input.Placeholder>}
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>{countryOptions}</Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
              {/*<TextInput placeholder='Phone number' required />*/}
              <InputBase
                label="Telephone"
                required
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
                  setValueBusiness(val);
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
                    key={form.key('businessType')} 
                    {...form.getInputProps('businessType')}
                  >
                    {business || <Input.Placeholder>Select</Input.Placeholder>}
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
                    key={form.key('interest')} 
                    {...form.getInputProps('interest')}
                  >
                    {interest || <Input.Placeholder><p className="text-[13px] leading-[18px] md:text-sm">Select</p></Input.Placeholder>}
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
                //value={message}
                key={form.key('message')}
                {...form.getInputProps('message')} 
                //onChange={(event) => setMessage(event.currentTarget.value)}
                autosize
                minRows={4}
              />
            </Group>
            <ExButton
              type='action'
              isSubmit
              className='w-full mt-10'
              disabled={!values.firstName || !values.lastName || !values.company || !values.email || !country || !values.number || !business || isLoading}
            >
              {!isLoading ? `Submit`: <Loader color={'white'} size={30} /> }
            </ExButton>
            {/*submittedValues && (
              <Code block mt="md">
                {submittedValues}
              </Code>
            )*/}
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

'use client'

import TableSort from '@/components/elements/Table'
import { ExButton } from '@/components'
import { useDisclosure } from '@mantine/hooks'
import {
  Button,
  Checkbox,
  Group,
  Modal,
  NumberInput,
  Skeleton,
  TextInput,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useEffect, useState } from 'react'
import { notifications } from '@mantine/notifications'

const Invoice = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [opened, { open, close }] = useDisclosure(false)
  const [insurance, setInsurance] = useState('')
  //const [patient, setPatient] = useState('')
  const [date, setDate] = useState<Date | null>(new Date())
  const [amount, setAmount] = useState<string | number>('')
  const [payout, setPayout] = useState<string | number>('')
  const [status, setStatus] = useState('in progress')
  const [fileBase64, setFileBase64] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 5000)
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64String = reader.result as string
        setFileBase64(base64String)
      }
      reader.onerror = (error) => {
        console.error('File reading error:', error)
      }
    }
  }

  const handleAmountChange = (value: string | number) => {
    // Convert the input value to a number
    const parsedValue = typeof value === 'string' ? parseFloat(value) : value

    // Update the amount state
    setAmount(parsedValue)

    // Calculate the payout
    const payoutCalc = parsedValue * 0.9

    // Update the payout state
    setPayout(payoutCalc)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = {
      payout,
      insurance,
      amount,
      status,
      file: fileBase64,
      createdAt: date,
    }

    try {
      const response = await fetch('/api/invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Handle success
        console.log('Invoice added successfully')
        close() // Close the modal after successful submission
        notifications.show({
          title: 'Invoice added successfully',
          color: 'green',
          message: 'Please wait while it is being processed.',
        })
      } else {
        // Handle error
        console.error('Failed to add invoice:', response.statusText)
        notifications.show({
          title: 'Oops!',
          color: 'red',
          message: 'Something went wrong.',
        })
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error)
    }
  }

  return (
    <div>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-lg font-semibold md:text-2xl mb-4'>Invoice list</h1>
        <ExButton type='action' onClick={open} isGradient>
          Add an invoice
        </ExButton>
      </div>
      <div className='mt-10'>
        {isFetching ? (
          <Skeleton height={125} mt={6} radius='md' />
        ) : (
          <TableSort />
        )}
      </div>

      {/* Add invoice modal */}

      <Modal
        opened={opened}
        onClose={close}
        title='Create invoice'
        radius={'lg'}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='fileInput' className='text-sm'>
              Upload invoice file
            </label>
            <input
              id='fileInput'
              type='file'
              onChange={handleFileChange}
              hidden
            />
            <TextInput
              value={fileBase64 ? 'File uploaded' : ''}
              onClick={() => document.getElementById('fileInput')?.click()}
              placeholder='Choose file...'
              readOnly
            />
          </div>
          <TextInput
            label='Insurance'
            value={insurance}
            onChange={(e: any) => setInsurance(e.target.value)}
            mt={'md'}
            placeholder='Enter insurance name'
          />
          <Group>
            <NumberInput
              label='Invoice amount'
              value={amount}
              onChange={handleAmountChange}
              className='w-full md:w-auto'
              thousandSeparator=','
              allowNegative={false}
              allowDecimal={false}
              suffix=' CFA'
              hideControls
              mt={'md'}
              required
            />
            <DateInput
              defaultValue={new Date()}
              onChange={setDate}
              className='w-full md:w-auto'
              mt={'md'}
              label='Register date'
              disabled
            />
          </Group>
          <Checkbox className='mt-5' label='Enable Cash Advance' checked />
          <Group>
            {/* <TextInput
              label='Patient'
              placeholder='Enter patient full name'
              className='w-full md:w-auto'
              mt={'md'}
              required
            /> 
            
            <Select
              label='Status'
              data={['In progress', 'Validated', 'Rejected']}
              className='w-full md:w-auto'
              mt={'md'}
              comboboxProps={{
                transitionProps: { transition: 'pop', duration: 200 },
                shadow: 'md',
              }}
            /> */}
          </Group>

          <ExButton type='action' className='w-full mt-10' isGradient isSubmit>
            Create
          </ExButton>
        </form>
      </Modal>
    </div>
  )
}

export default Invoice

'use client'
import TableSort from '@/components/elements/AdminTable/invoice'
import {
  Button,
  Checkbox,
  Group,
  Modal,
  NumberInput,
  Skeleton,
  TextInput,
  useCombobox,
  Combobox,
  InputBase,
  Input,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useEffect, useState } from 'react'

const InvoiceSubmissions = () => {
  
  //states
  const [isFetching, setIsFetching] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 5000)
  })

  return (
    <div>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-lg font-semibold md:text-2xl mb-4'>Invoice Submission</h1>
      </div>
      <div className='mt-10'>
        {isFetching ? (
          <Skeleton height={125} mt={6} radius='md' />
        ) : (
          <TableSort />
        )}
      </div>
    </div>
  )
}

export default InvoiceSubmissions

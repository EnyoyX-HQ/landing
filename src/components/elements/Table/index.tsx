'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams} from 'next/navigation'
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  ThemeIcon,
  Badge,
  Tooltip,
  Modal,
  NumberInput,
  Checkbox,
  useCombobox,
  Combobox,
  InputBase,
  Input,
  Button,
  HoverCard
} from '@mantine/core'
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconPencil,
  IconTrash,
  IconDownload,
  IconCoins,
  IconRefresh,
} from '@tabler/icons-react'
import classes from './TableSort.module.css'
import { ExButton, FormatDate } from '..'
import { deleteInvoice, getInvoices } from '@/lib/actions'
import { notifications } from '@mantine/notifications'
import { DateInput } from '@mantine/dates'
import { useDisclosure } from '@mantine/hooks'
import invoiceDataa from '@/lib/invoices'
import { setTimeout } from 'timers/promises'
//import Link from 'next/link'

interface RowData {
  id: string
  payout: string
  insurance: string
  //patient: string
  createdAt: string
  amount: string
  status: string
}

interface ThProps {
  children: React.ReactNode
  reversed?: boolean
  sorted?: boolean
  onSort?: () => void
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector
  return (
    <Table.Th className={classes.th}>
      {onSort ? (
        <UnstyledButton onClick={onSort} className={classes.control}>
          <Group justify='space-between'>
            <Text fw={500} fz='sm'>
              {children}
            </Text>
            <Center className={classes.icon}>
              <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Center>
          </Group>
        </UnstyledButton>
      ) : (
        <Text fw={500} fz='sm'>
          {children}
        </Text>
      )}
    </Table.Th>
  )
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim()
  // If data is empty or data[0] is undefined, return an empty array
  if (data.length === 0 || !data[0]) {
    return []
  }

  // Filter the data based on the search query
  return data.filter((item) =>
    // Check if any key in the item includes the search query
    keys(item).some((key) =>
      // If the value is not a string, convert it to a string before applying toLowerCase
      String(item[key]).toLowerCase().includes(query)
    )
  )
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload

  if (!sortBy) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy])
      }

      return a[sortBy].localeCompare(b[sortBy])
    }),
    payload.search
  )
}

/*dropdown menu to combine both filteration 
* and sorting keep search field as is
* design concept would be similar to excel 
* 
* Joseph TO-DO
*
*
*/

const TableSort = () => {
  //dropdown values
  const insurances = [
    'ASCOMA', 
    'IMPG', 
    'PPM', 
    'Other',
  ];

  const router = useRouter()
  //const currentPath = usePathname()
  //const searchParams = useSearchParams()
  //const url = `${currentPath}?${searchParams}`
  //components
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  //states
  const [search, setSearch] = useState('')
  const [invoiceData, setInvoiceData] = useState<RowData[]>([])
  const [sortedData, setSortedData] = useState<RowData[]>([])
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const [opened, { open, close }] = useDisclosure(false)
  const [
    payoutModalOpened,
    { open: openPayoutModal, close: closePayoutModal },
  ] = useDisclosure(false)
  const [editedInvoice, setEditedInvoice] = useState<RowData | null>(null)
  const [payout, setPayout] = useState<string | number>('')
  const [insurance, setInsurance] = useState('')
  const [date, setDate] = useState<Date | null>(new Date())
  const [amount, setAmount] = useState<string | number>('')
  const [status, setStatus] = useState('in progress')
  const [fileBase64, setFileBase64] = useState<string | null>(null)
  const insuranceOptions = insurances.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  // Function to handle editing an invoice
  const handleEdit = (rowData: RowData) => {
    setEditedInvoice(rowData)
    setPayout(rowData.payout)
    setInsurance(rowData.insurance)
    setAmount(rowData.amount)
    setStatus(rowData.status)
    open() // Open the modal
  }

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(invoiceData, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(
      sortData(invoiceData, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    )
  }

  function convertToCSV(data: any) {
    const keys = Object.keys(data[0])
    const csvContent =
      keys.join(',') +
      '\n' +
      data.map((row: any) => keys.map((key) => row[key]).join(',')).join('\n')
    return csvContent
  }

  const handleDownload = (rowData: any) => {
    const csvContent = convertToCSV([rowData])
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'invoice.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDelete = async (id: any) => {
    const res = await deleteInvoice(id)
    if (res) {
      notifications.show({
        color: 'green',
        message: 'Invoice deleted',
      })
    } else {
      notifications.show({
        color: 'red',
        title: 'Oops!',
        message: 'Something went wrong.',
      })
    }
  }

  //changing status data from in progress to validated
  //setTimeout
  
  useEffect(() => {
    setInvoiceData(invoiceDataa)
    const fetchInvoices = async () => {
      const data = await getInvoices()
      setInvoiceData(data.data)
      setSortedData(
        sortData(data.data, { sortBy, reversed: reverseSortDirection, search })
        //sample data
        /*sortData(invoiceDataa, {
          sortBy,
          reversed: reverseSortDirection,
          search,
        })*/
      )
      //console.log(data.data)
    }
    fetchInvoices() 
  }, [reverseSortDirection, search, sortBy])

  /*useEffect(() => {
    const url = `${currentPath}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [currentPath, searchParams])*/
  // Edit Invoice logic

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
    if (!editedInvoice) return

    const { id } = editedInvoice
    const formData: {
      payout: string | number
      insurance: string
      amount: string | number
      status: string
      updatedAt: Date
      file?: string
    } = {
      payout,
      insurance,
      amount,
      status,
      updatedAt: new Date(),
    }

    // If fileBase64 is not null, add it to formData
    if (fileBase64) {
      formData.file = fileBase64
    }

    console.log(formData)

    try {
      const response = await fetch(`/api/invoice/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const updatedInvoice = await response.json()
        console.log('Invoice updated successfully:', updatedInvoice)
        close()
        notifications.show({
          title: 'Invoice updated successfully',
          color: 'green',
          message: 'Please wait while it is being processed.',
        })
        setEditedInvoice(null)
      } else {
        console.error('Failed to update invoice:', response.statusText)
        notifications.show({
          title: 'Oops!',
          color: 'red',
          message: 'Something went wrong.',
        })
      }
    } catch (error) {
      console.error('Network error:', error)
    }
  }

  const rows = sortedData.map((row) => {
    let statusVariant
    switch (row.status) {
      case 'in progress':
        statusVariant = 'yellow'
        break
      case 'validated':
        statusVariant = 'green'
        break
      case 'rejected':
        statusVariant = 'red'
        break
      default:
        statusVariant = 'gray'
    }
    return (
      <Table.Tr key={row.id} className='text-slate-600'>
        <Table.Td>{row.insurance}</Table.Td>
        <Table.Td>{Number(row.amount).toLocaleString()} CFA</Table.Td>
        <Table.Td>{Number(row.payout).toLocaleString()} CFA</Table.Td>
        <Table.Td>
          <FormatDate data={row.createdAt} formatType='datePipeTime' />
        </Table.Td>
        <Table.Td>
          <Badge color={statusVariant} variant='light'>
            {row.status}
          </Badge>
        </Table.Td>
        <Table.Td>
          <div className='flex gap-4'>
            <Tooltip label='Payout'>
              <ThemeIcon
                variant='light'
                onClick={openPayoutModal}
                color={'pink'}
                size={30}
              >
                <IconCoins
                  className='cursor-pointer'
                  style={{ width: rem(18), height: rem(18) }}
                />
              </ThemeIcon>
            </Tooltip>
            <Tooltip label='Download'>
              <ThemeIcon
                variant='light'
                onClick={() => handleDownload(row)}
                color={'blue'}
                size={30}
              >
                <IconDownload
                  className='cursor-pointer'
                  style={{ width: rem(18), height: rem(18) }}
                />
              </ThemeIcon>
            </Tooltip>
            <Tooltip label='Edit'>
              <ThemeIcon
                className='cursor-pointer'
                onClick={() => handleEdit(row)}
                variant='light'
                color={'green'}
                size={30}
              >
                <IconPencil style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
            </Tooltip>
            <Tooltip label='Delete'>
              <ThemeIcon
                className='cursor-pointer'
                variant='light'
                color={'red'}
                onClick={() => handleDelete(row.id)}
                size={30}
              >
                <IconTrash style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
            </Tooltip>
          </div>
        </Table.Td>
      </Table.Tr>
    )
  })
  const refreshTable = async () => {
    const data = await getInvoices()
    setInvoiceData(data.data)
    setSortedData(
      sortData(data.data, { sortBy, reversed: reverseSortDirection, search })
    )
    router.refresh()
  }
  return (
    <>
      <TextInput
        placeholder='Search by any field'
        mb='md'
        radius={'xl'}
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Group justify="flex-end">
        <HoverCard width={80} shadow="md">
          <HoverCard.Target>
            <Button 
              variant='outline' 
              color='gray' 
              size='xs'
              onClick={refreshTable}
              radius={0}
            >
              <IconRefresh
                style={{ width: rem(18), height: rem(18) }}
                stroke={2}
              /> 
            </Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="xs">
              Refresh
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      <ScrollArea>
        <Table
          horizontalSpacing='md'
          verticalSpacing='xs'
          miw={700}
          layout='fixed'
        >
          <Table.Tbody>
            <Table.Tr>
              <Th
                sorted={sortBy === 'insurance'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('insurance')}
              >
                Insurance
              </Th>
              <Th
                sorted={sortBy === 'amount'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('amount')}
              >
                Amount
              </Th>
              <Th
                sorted={sortBy === 'payout'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('payout')}
              >
                Payout (90%)
              </Th>
              <Th
                sorted={sortBy === 'createdAt'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('createdAt')}
              >
                Date
              </Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Table.Tr>
          </Table.Tbody>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td
                  colSpan={
                    invoiceData && invoiceData[0]
                      ? Object.keys(invoiceData[0]).length
                      : 0
                  }
                >
                  <Text fw={500} ta='center'>
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>

      {/* Payout modal */}

      <Modal
        opened={payoutModalOpened}
        onClose={closePayoutModal}
        title='Confirm payout'
        radius={'lg'}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <div className='flex flex-col items-center gap-3 my-5'>
          <p className='font-bold text-3xl text-center'>
            {amount.toLocaleString()} CFA
          </p>

          <div className='flex'>
            <Badge
              color='blue'
              variant='light'
              size='lg'
              radius='xl'
              className='mx-auto'
            >
              Payout: {payout.toLocaleString()} CFA
            </Badge>
          </div>
        </div>

        <ExButton
          type='action'
          onClick={closePayoutModal}
          className='w-full mt-10'
          isGradient
        >
          Request payout
        </ExButton>
        <p className='text-sm text-center mt-4'>
          Got any issues?{' '}
          <span
            onClick={closePayoutModal}
            className='text-red-500 text-semibold cursor-pointer'
          >
            Contact support.
          </span>
        </p>
      </Modal>

      {/* Update invoice modal */}

      <Modal
        opened={opened}
        onClose={close}
        title='Update invoice'
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
          {/*<TextInput
            label='Insurance'
            value={insurance}
            onChange={(e: any) => setInsurance(e.target.value)}
            mt={'md'}
            placeholder='Enter insurance name'
          />*/}
          <Group grow mt='md'>
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setInsurance(val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  label="Insurance"
                  pointer
                  rightSection={<Combobox.Chevron />}
                  rightSectionPointerEvents="none"
                  onClick={() => combobox.toggleDropdown()}
                >
                  {insurance || <Input.Placeholder>Select Insurance</Input.Placeholder>}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{insuranceOptions}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Group>
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

          <ExButton type='action' className='w-full mt-10' isGradient isSubmit>
            Update
          </ExButton>
        </form>
      </Modal>
    </>
  )
}

export default TableSort

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getContacts } from '@/lib/actions'
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
  HoverCard,
  ActionIcon,
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
  IconCheck,
  IconX,
  IconEye,
  IconInvoice,
} from '@tabler/icons-react'
import classes from './TableSort.module.css'
import { ExButton, FormatDate } from '..'
// import { deleteInvoice, getInvoices, updateInvoiceStatus } from '@/lib/actions'
import { notifications } from '@mantine/notifications'
import { DateInput } from '@mantine/dates'
import { useDisclosure } from '@mantine/hooks'
//import { setTimeout } from 'timers/promises'
//import Link from 'next/link'

interface RowData {
  id: string
  name: string
  phone: string
  insurances: string
  city: string
  country: string
  address: string,
  email: string,
  website: string,
  //createdAt: string
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

// function getStatusVariant(status: string): string {
//   switch (status) {
//     case 'in progress':
//       return 'yellow'
//     case 'validated':
//       return 'green'
//     case 'rejected':
//       return 'red'
//     default:
//       return 'gray'
//   }
// }



const TableSort = () => {

  //states
  const router = useRouter()
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })
  //states
  const [search, setSearch] = useState('')
  const [contactUsData, setContactUsData] = useState<any>(null)
  const [sortedData, setSortedData] = useState<RowData[]>([])
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  // const [opened, { open, close }] = useDisclosure(false)
  // const [
  //   previewModalOpened,
  //   { open: openPreviewModal, close: closePreviewModal },
  // ] = useDisclosure(false)
  // const [
  //   payoutModalOpened,
  //   { open: openPayoutModal, close: closePayoutModal },
  // ] = useDisclosure(false)
  // const [payoutData, setPayoutData] = useState<RowData | null>(null)
  // const [previewInvoice, setPreviewInvoice] = useState<RowData | null>(null)
  // const [editedInvoice, setEditedInvoice] = useState<RowData | null>(null)
  // const [payout, setPayout] = useState<string | number>('')
  // const [insurance, setInsurance] = useState('')
  // const [date, setDate] = useState<Date | null>(new Date())
  // const [amount, setAmount] = useState<string | number>('')
  // const [status, setStatus] = useState('in progress')
  // const [fileBase64, setFileBase64] = useState<string | null>(null)
  // const insuranceOptions = insurances.map((item) => (
  //   <Combobox.Option value={item} key={item}>
  //     {item}
  //   </Combobox.Option>
  // ))

  // const handlePreview = (rowData: RowData) => {
  //   setPreviewInvoice(rowData)
  //   openPreviewModal()
  // }



  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(contactUsData, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(
      sortData(contactUsData, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    )
  }

  // function convertToCSV(data: any) {
  //   const keys = Object.keys(data[0])
  //   const csvContent =
  //     keys.join(',') +
  //     '\n' +
  //     data.map((row: any) => keys.map((key) => row[key]).join(',')).join('\n')
  //   return csvContent
  // }

  // const handleDownload = (rowData: any) => {
  //   const csvContent = convertToCSV([rowData])
  //   const blob = new Blob([csvContent], { type: 'text/csv' })
  //   const url = window.URL.createObjectURL(blob)
  //   const link = document.createElement('a')
  //   link.href = url
  //   link.setAttribute('download', 'invoice.csv')
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  

  //changing status data from in progress to validated
  //setTimeout
  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await getContacts()
        setContactUsData(data.data)
        setSortedData(
          sortData(data.data, { sortBy, reversed: reverseSortDirection, search })
        )
      } catch (error) {
        console.error('Error fetching clinics:', error)
      }
    }

    fetchClinics()
  }, [reverseSortDirection, search, sortBy])

  //refresh table data

  const refreshTable = async () => {
    const data = await getContacts()
    setContactUsData(data.data)
    setSortedData(
      sortData(data.data, { sortBy, reversed: reverseSortDirection, search })
    )
    router.refresh()
  }

  const rows = sortedData.map((row) => {
    // const statusVariant = getStatusVariant(row.status)
    return (
      <Table.Tr key={row.id} className='text-slate-600'>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>{row.phone}</Table.Td>
        <Table.Td>{row.email}</Table.Td>
        <Table.Td>{row.insurances}</Table.Td>
        <Table.Td>{row.city}</Table.Td>
        <Table.Td>{row.address}</Table.Td>
        <Table.Td>{row.country}</Table.Td>
        <Table.Td>{row.website}</Table.Td>
        {/*Claim/Invoice Submission count per clinic*/}
        {/* <Table.Td>{Number(row.amount).toLocaleString()}</Table.Td> */}
        {/* <Table.Td>
          <FormatDate data={row.createdAt} formatType='datePipeTime' />
        </Table.Td> */}
        {/* <Table.Td p={0}>
          <Badge color={statusVariant} variant='light'>
            {row.status}
          </Badge>
        </Table.Td>
        <Table.Td p={0}>
          <div className='flex gap-4'>
            <Tooltip label='Preview'>
              <ThemeIcon
                variant='light'
                onClick={() => handlePreview(row)}
                color={'violet'}
                size={30}
              >
                <IconEye
                  className='cursor-pointer'
                  style={{ width: rem(18), height: rem(18) }}
                />
              </ThemeIcon>
            </Tooltip>
            <Tooltip label='Payout'>
              <ThemeIcon
                variant='light'
                onClick={() => handlePayout(row)}
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
          </div>
        </Table.Td> */}
      </Table.Tr>
    )
  })

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
      <Group justify='flex-end'>
        <HoverCard width={80} shadow='md'>
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
            <Text size='xs'>Refresh</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      <ScrollArea>
        <Table
          horizontalSpacing='md'
          verticalSpacing='md'
          miw={700}
        >
          <Table.Tbody>
            <Table.Tr>
              <Th
                sorted={sortBy === 'name'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('name')}
              >
                Name
              </Th>
              <Th
                sorted={sortBy === 'phone'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('phone')}
              >
                Phone
              </Th>
              <Th
                sorted={sortBy === 'email'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('email')}
              >
                Email
              </Th>
              <Th>Insurance(s)</Th>
              <Th
                sorted={sortBy === 'city'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('city')}
              >
                City
              </Th>
              <Th
                sorted={sortBy === 'address'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('address')}
              >
                Address
              </Th>
              <Th
                sorted={sortBy === 'country'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('country')}
              >
                Country
              </Th>
              <Th
                sorted={sortBy === 'website'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('website')}
              >
                Website
              </Th>
              {/* <Th
                sorted={sortBy === 'createdAt'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('createdAt')}
              >
                Date
              </Th> */}
              {/* 
                <Th>Invoices</Th>
                <Th>Status</Th>
                <Th>Action</Th> 
              */}
            </Table.Tr>
          </Table.Tbody>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td
                  colSpan={
                    contactUsData && contactUsData[0]
                      ? Object.keys(contactUsData[0]).length
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

      {/* Preview Invoice Modal */}
      {/* <Modal
        opened={previewModalOpened}
        onClose={closePreviewModal}
        title='Invoice Preview'
        radius={'lg'}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {previewInvoice && (
          <div>
            <div className='flex'>
              <ActionIcon
                variant='light'
                color='violet'
                size={80}
                className='mx-auto'
                aria-label='Invoice'
              >
                <IconInvoice
                  style={{ width: '70%', height: '70%' }}
                  stroke={1.5}
                />
              </ActionIcon>
            </div>
            <div className='mt-3 mb-6 flex'>
              <Badge
                color={getStatusVariant(previewInvoice.status)}
                variant='light'
                className='mx-auto'
              >
                {previewInvoice.status}
              </Badge>
            </div>
            <div className='p-4 bg-slate-50 rounded-xl'>
              <Text>
                <span className='font-bold'>Payout:</span>{' '}
                {previewInvoice.payout.toLocaleString()} CFA
              </Text>
              <Text>
                <span className='font-bold'>Insurance:</span>{' '}
                {previewInvoice.insurance}
              </Text>
              <Text>
                <span className='font-bold'>Date:</span>{' '}
                <FormatDate
                  data={previewInvoice.createdAt}
                  formatType='datePipeTime'
                />
              </Text>
              <Text>
                <span className='font-bold'>Amount:</span>{' '}
                {previewInvoice.amount.toLocaleString()} CFA
              </Text>
            </div>
            <ExButton
              type='action'
              onClick={() => handleDownload(previewInvoice)}
              className='w-full mt-4'
              isGradient
            >
              Download
            </ExButton>
          </div>
        )}
      </Modal> */}

      
    </>
  )
}

export default TableSort

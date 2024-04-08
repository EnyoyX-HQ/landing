'use client'

import { useState } from 'react'
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
} from '@mantine/core'
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconEye,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react'
import classes from './TableSort.module.css'
import invoiceData from '@/lib/invoices'

interface RowData {
  id: string
  clinic: string
  insurance: string
  patient: string
  date: string
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
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
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

const TableSort = () => {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(invoiceData)
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

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
        <Table.Td>{row.clinic}</Table.Td>
        <Table.Td>{row.insurance}</Table.Td>
        <Table.Td>{row.patient}</Table.Td>
        <Table.Td>
          <Badge color={statusVariant} variant='light'>
            {row.status}
          </Badge>
        </Table.Td>
        <Table.Td>{row.amount}</Table.Td>
        <Table.Td>{row.date}</Table.Td>
        <Table.Td>
          <div className='flex gap-4'>
            <ThemeIcon variant='light' color={'blue'} size={30}>
              <IconEye
                className='cursor-pointer'
                style={{ width: rem(18), height: rem(18) }}
              />
            </ThemeIcon>
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              color={'green'}
              size={30}
            >
              <IconPencil style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              color={'red'}
              size={30}
            >
              <IconTrash style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
          </div>
        </Table.Td>
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
                sorted={sortBy === 'clinic'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('clinic')}
              >
                Clinic
              </Th>
              <Th
                sorted={sortBy === 'insurance'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('insurance')}
              >
                Insurance
              </Th>
              <Th
                sorted={sortBy === 'patient'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('patient')}
              >
                Patient
              </Th>
              <Th>Status</Th>
              <Th
                sorted={sortBy === 'amount'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('amount')}
              >
                Amount
              </Th>
              <Th
                sorted={sortBy === 'date'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('date')}
              >
                Date
              </Th>
              <Th>Action</Th>
            </Table.Tr>
          </Table.Tbody>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={Object.keys(invoiceData[0]).length}>
                  <Text fw={500} ta='center'>
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  )
}

export default TableSort

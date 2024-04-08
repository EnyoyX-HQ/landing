'use client'

import TableSort from '@/components/elements/Table'
import { ExButton } from '@/components'
import { useDisclosure } from '@mantine/hooks'
import { FileInput, Group, Modal, Select, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useState } from 'react'

const Invoice = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-lg font-semibold md:text-2xl mb-4'>Invoice list</h1>
        <ExButton type='action' onClick={open} isGradient>
          Add an invoice
        </ExButton>
      </div>
      {/* <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Clinic</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table> */}
      <div className='mt-10'>
        <TableSort />
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
        <form>
          <FileInput label='Upload invoice file' required />
          <Group>
            <TextInput
              label='Clinic'
              placeholder='Enter clinic name'
              className='w-full md:w-auto'
              mt={'md'}
              required
            />
            <TextInput
              label='Insurance'
              mt={'md'}
              placeholder='Enter insurance name'
              className='w-full md:w-auto'
            />
          </Group>
          <Group>
            <TextInput
              label='Patient'
              placeholder='Enter patient full name'
              className='w-full md:w-auto'
              mt={'md'}
              required
            />
            <DateInput
              value={date}
              onChange={setDate}
              className='w-full md:w-auto'
              mt={'md'}
              label='Register date'
            />
          </Group>
          <Group>
            <TextInput
              label='Invoice amount'
              className='w-full md:w-auto'
              type='tel'
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
            />
          </Group>

          <ExButton type='action' className='w-full mt-10' isGradient>
            Create
          </ExButton>
        </form>
      </Modal>
    </div>
  )
}

export default Invoice

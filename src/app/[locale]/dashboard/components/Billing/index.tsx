'use client'
import { ExButton } from '@/components'
import { Box, Card, Divider, List, Tabs, rem } from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'
import Link from 'next/link'

const billingPlans = [
  {
    name: 'Growth',
    desc: 'The cheapest option in web3',
    price: '$1,300/mo',
    action: 'Upgrade plan',
  },
  {
    name: 'Scale/mo',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$289/mo',
    action: 'Upgrade plan',
  },
  {
    name: 'Scale/yr',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$199/mo',
    action: 'Upgrade plan',
  },
  {
    name: 'Enterprise',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$---',
    action: 'Contact us',
  },
]

const Billing = () => {
  return (
    <div>
      <h1 className='text-lg font-semibold md:text-2xl mb-4'>Billing</h1>

      <Tabs color='green' defaultValue='manage_plan' mt={40}>
        <Tabs.List>
          <Tabs.Tab value='manage_plan'>Manage plan</Tabs.Tab>
          <Tabs.Tab value='past_invoices'>Past Invoices</Tabs.Tab>
          <Tabs.Tab value='payment_details'>Payment Details</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='manage_plan'>
          <Box mt={20}>
            <div className='flex flex-col md:flex-row gap-5'>
              <Card
                padding='xl'
                radius='md'
                className='w-full md:w-3/5'
                withBorder
              >
                <div className='flex flex-col gap-8'>
                  <h1 className='text-xl font-semibold'>
                    Active Plan:{' '}
                    <span className='font-bold text-green-600'>Free</span>
                  </h1>

                  <div className='text-sm'>
                    <p>
                      Renews on: <span className='font-bold'>Jun 1, 2025</span>
                    </p>
                    <p>
                      Pre-paid monthly compute units:{' '}
                      <span className='font-bold'>300 million</span>
                    </p>
                  </div>
                </div>
              </Card>
              <Card padding='lg' radius='md' className='grow' withBorder>
                <div className='flex flex-col gap-2'>
                  <p className='font-semibold'>Auto-scaling usage: Inactive</p>
                  <p className='text-sm text-gray-500'>
                    Learn more about auto-scaling <Link href='/'>here</Link>
                  </p>
                </div>
                <Divider my='md' />
                <p className='text-sm text-gray-500'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nisi iusto distinctio nostrum dolorem dolores,
                  veritatis quia nulla! Fugiat, aspernatur culpa. Asperiores
                  aperiam blanditiis similique. Animi ea temporibus sint
                  impedit!
                </p>
              </Card>
            </div>

            <div className='mt-20'>
              <h2 className='text-center font-bold text-2xl'>
                Find the best plan for you
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {billingPlans.map((plan) => (
                  <Card key={plan.name} padding='lg' radius='md' withBorder>
                    <div className='flex flex-col gap-2 items-center'>
                      <h2 className='text-lg font-semibold'>{plan.name}</h2>
                      <p className='text-xs text-center'>{plan.desc}</p>
                    </div>
                    <Divider my='md' />
                    <h1 className='font-bold text-2xl text-center'>
                      {plan.price}
                    </h1>
                    <Divider my='md' />
                    <List
                      spacing='xs'
                      size='sm'
                      center
                      icon={
                        <IconCircleCheck
                          color='green'
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      }
                    >
                      <List.Item>Lorem ipsum dolor sit amet.</List.Item>
                      <List.Item>Lorem ipsum dolor sit amet.</List.Item>
                      <List.Item>Lorem ipsum dolor sit amet.</List.Item>
                      <List.Item>Lorem ipsum dolor sit amet.</List.Item>
                      <List.Item>Lorem ipsum dolor sit amet.</List.Item>
                    </List>

                    <ExButton type='action' className='w-full mt-10' isGradient>
                      {plan.action}
                    </ExButton>
                  </Card>
                ))}
              </div>
            </div>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value='past_invoices'>
          <Box mt={20}>Past invoices</Box>
        </Tabs.Panel>

        <Tabs.Panel value='payment_details'>
          <Box mt={20}>Payment details</Box>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

export default Billing

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Menu,
  ActionIcon,
  rem,
} from '@mantine/core'
import {
  IconDots,
  IconEye,
  IconLink,
  IconMail,
  IconMapPin,
  IconPencil,
  IconPhone,
  IconTrash,
} from '@tabler/icons-react'

export interface ClinicCardProps {
  name: string
  imageUrl: string
  city: string
  phone: string
  address: string
  email: string
  website: string
  insurances: string
}

const ClinicCard = ({
  name,
  imageUrl,
  city,
  phone,
  address,
  email,
  website,
  insurances,
}: ClinicCardProps) => {
  const insurancesArray = insurances.split(' ')

  return (
    <Card padding='lg' radius='md' maw={400} className='mx-auto'>
      <div className='relative'>
        <Image src={imageUrl} radius={'md'} alt='clinic' />
      </div>

      <div className='flex justify-between my-5'>
        <Box>
          <Text fw={'bold'} fz={'sm'} className='text-slate-700'>
            {name}
          </Text>
          <Text c={'dimmed'} fz={'xs'}>
            {city}
          </Text>
        </Box>
        <Box>
          <div className='flex items-center gap-2'>
            <IconPhone size={13} color='gray' />
            <Text c={'dimmed'} fz={'xs'}>
              {phone}
            </Text>
          </div>
          <div className='flex items-center gap-2'>
            <IconMapPin size={13} color='gray' />
            <Text c={'dimmed'} fz={'xs'}>
              {address}
            </Text>
          </div>
        </Box>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <IconMail size={15} />
          <Text fz={'sm'}>{email}</Text>
        </div>

        <div className='flex items-center gap-2'>
          <IconLink size={15} />
          <Text
            component='a'
            target='_blank'
            href={`https://${website}`}
            c={'green'}
            fz={'sm'}
          >
            {website}
          </Text>
        </div>
      </div>

      <div className='mt-4'>
        <Text fz={'sm'}>Insurances</Text>
        <div className='mt-3 flex gap-3'>
          {insurancesArray.map((insurance: any) => (
            <Badge
              key={insurance}
              color='blue'
              variant='light'
              size='lg'
              radius='xl'
            >
              {insurance}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ClinicCard

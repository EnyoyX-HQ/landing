'use client'

import { ClinicCard, ExButton } from '@/components'
import { ClinicCardProps } from '@/components/blocks/ClinicCard'
import { getClinics } from '@/lib/actions'
import { FileInput, Group, Modal, TagsInput, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'

const Clinics = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [clinicData, setClinicData] = useState<ClinicCardProps | null>(null)
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await getClinics()
        setClinicData(data.data[1])
        setFormData({
          name: data.data[1].name,
          imageUrl: data.data[1].imageUrl,
          city: data.data[1].city,
          phone: data.data[1].phone,
          address: data.data[1].address,
          email: data.data[1].email,
          website: data.data[1].website,
          insurances: data.data[1].insurances,
        })
      } catch (error) {
        console.error('Error fetching clinics:', error)
      }
    }

    fetchClinics()
  }, [])

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <div className='flex items-center'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-lg font-semibold md:text-2xl mb-6'>
            Clinic Profile
          </h1>
          <ExButton type='action' onClick={open} isGradient>
            Edit Profile
          </ExButton>
        </div>
      </div>

      <div className='mt-10'>
        {clinicData && <ClinicCard {...clinicData} />}
      </div>

      {/* Add clinic modal */}

      <Modal
        opened={opened}
        onClose={close}
        title='Add a new clinic'
        radius={'lg'}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form>
          <FileInput
            accept='image/png,image/jpeg'
            label='Upload clinic cover photo'
            required
          />
          <Group>
            <TextInput
              label='Clinic'
              placeholder='Enter clinic name'
              className='w-full md:w-auto'
              value={formData?.name}
              onChange={handleChange}
              name='name'
              mt={'md'}
              required
            />
            <TextInput
              label='Phone number'
              className='w-full md:w-auto'
              mt={'md'}
              placeholder='Enter phone number'
              value={formData?.phone}
              onChange={handleChange}
              name='phone'
            />
          </Group>
          <Group>
            <TextInput
              label='Location'
              placeholder='Enter clinic location'
              className='w-full md:w-auto'
              mt={'md'}
              value={formData?.city}
              onChange={handleChange}
              name='city'
              required
            />
            <TextInput
              label='Clinic website'
              placeholder='ex. myclinic.com'
              className='w-full md:w-auto'
              mt={'md'}
              value={formData?.website}
              onChange={handleChange}
              name='website'
              required
            />
          </Group>
          <TextInput
            label='Address'
            placeholder='Enter exact address'
            mt={'md'}
            value={formData?.address}
            onChange={handleChange}
            name='address'
            required
          />

          <TagsInput
            label='Insurance'
            description='Hit enter to add. You can add up to 3 insurances'
            maxTags={3}
            value={['holla', 'senor']}
            mt='md'
          />

          <ExButton type='action' className='w-full mt-10' isGradient>
            Create
          </ExButton>
        </form>
      </Modal>
    </div>
  )
}

export default Clinics

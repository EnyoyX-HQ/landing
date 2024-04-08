'use client'

import { ClinicCard, ExButton } from '@/components'
import clinicsData from '@/lib/clinics'
import { FileInput, Group, Modal, TagsInput, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const Clinics = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div>
      <div className='flex items-center'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-lg font-semibold md:text-2xl mb-6'>Clinics</h1>
          <ExButton type='action' onClick={open} isGradient>
            Edit Profile
          </ExButton>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10'>
        {clinicsData.map((clinic) => (
          <ClinicCard key={clinic.name} {...clinic} />
        ))}
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
              mt={'md'}
              required
            />
            <TextInput
              label='Phone number'
              className='w-full md:w-auto'
              mt={'md'}
              placeholder='Enter phone number'
            />
          </Group>
          <Group>
            <TextInput
              label='Location'
              placeholder='Enter clinic location'
              className='w-full md:w-auto'
              mt={'md'}
              required
            />
            <TextInput
              label='Clinic website'
              placeholder='ex. myclinic.com'
              className='w-full md:w-auto'
              mt={'md'}
              required
            />
          </Group>
          <TextInput
            label='Address'
            placeholder='Enter exact address'
            mt={'md'}
            required
          />

          <TagsInput
            label='Insurance'
            description='Hit enter to add. You can add up to 3 insurances'
            maxTags={3}
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

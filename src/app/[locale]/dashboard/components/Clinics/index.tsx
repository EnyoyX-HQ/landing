'use client'

import { ClinicCard, ExButton } from '@/components'
import { ClinicCardProps } from '@/components/blocks/ClinicCard'
import { getClinics } from '@/lib/actions'
import { FileInput, Group, Modal, TagsInput, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'

const Clinics = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const [clinicData, setClinicData] = useState<ClinicCardProps | null>(null)
  const [formData, setFormData] = useState<any>(null)
  const [clinicId, setClinicId] = useState<any>(null)

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await getClinics()
        console.log('Data: ', data.data[0].id)
        setClinicId(data.data[0].id)
        setClinicData(data.data[0])
        setFormData({
          name: data.data[0].name,
          imageUrl: data.data[0].imageUrl,
          city: data.data[0].city,
          phone: data.data[0].phone,
          address: data.data[0].address,
          email: data.data[0].email,
          website: data.data[0].website,
          insurances: data.data[0].insurances,
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

  const handleTagsChange = (value: any) => {
    const insurancesString = value.join(' ') // Convert the array of tags to a string
    setFormData({
      ...formData,
      insurances: insurancesString, // Update the insurances field in the form data
    })
  }

  // Upload image to cloudinary and get the image url
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    console.log('File:', file)
    if (!file) return

    try {
      console.log('Uploading...')
      const imageData = new FormData()
      imageData.append('file', file)
      imageData.append('upload_preset', 'me4hwqgb') // Assuming 'me4hwqgb' is your Cloudinary upload preset

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dgyoeesf4/upload',
        {
          method: 'POST',
          body: imageData, // Don't stringify the FormData object
        }
      )

      if (res.ok) {
        const data = await res.json() // Parse the response body as JSON
        console.log('Image:', data)

        if (data.secure_url) {
          setFormData({
            ...formData,
            imageUrl: data.secure_url,
          })
        }
      } else {
        throw new Error('Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  console.log('form data: ', formData)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/clinic/${clinicId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Clinic updated successfully
        // You might want to handle success actions here, like closing the modal
        const updatedClinic = await response.json()
        console.log('Clinic updated successfully:', updatedClinic)
        close()
        notifications.show({
          color: 'green',
          message: 'Clinic updated successfully.',
        })
      } else {
        // Handle error response
        console.error('Failed to update clinic')
        notifications.show({
          title: 'Oops!',
          color: 'red',
          message: 'Something went wrong.',
        })
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error updating clinic:', error)
      notifications.show({
        title: 'Oops!',
        color: 'red',
        message: 'Something went wrong.',
      })
    }
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
        title='Update clinic info'
        radius={'lg'}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* <FileInput
            accept='image/png,image/jpeg'
            label='Upload clinic cover photo'
            onChange={() => handleFileChange}
            required
          /> */}

          <div>
            <label htmlFor='fileInput' className='text-sm'>
              Upload clinic cover photo
            </label>
            <input
              id='fileInput'
              type='file'
              onChange={handleFileChange}
              hidden
            />
            <TextInput
              value={formData?.imageUrl ? 'File uploads' : ''}
              onClick={() => document.getElementById('fileInput')?.click()}
              placeholder='Choose image...'
              readOnly
            />
          </div>
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
            description='Hit enter to add. You can add up to 5 insurances'
            maxTags={5}
            defaultValue={formData?.insurances.split(' ')}
            name='insurances'
            onChange={handleTagsChange}
            mt='md'
          />

          <ExButton type='action' className='w-full mt-10' isGradient isSubmit>
            Update
          </ExButton>
        </form>
      </Modal>
    </div>
  )
}

export default Clinics

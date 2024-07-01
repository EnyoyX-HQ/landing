'use client'

import { getClinics } from '@/lib/actions'
import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Flex,
  Loader,
  MultiSelect,
  TextInput,
  Tooltip,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconCheck, IconPencil, IconUserEdit, IconX } from '@tabler/icons-react'
import { memo, useCallback, useEffect, useState } from 'react'
import classes from '@/styles/General.module.css'

interface ProfileFieldProps {
  name: string
  children: (props: any) => React.ReactNode
  isSubmitting: boolean
  editMode: EditModes
  updateProfile: (fieldName: string) => void
  toggleEditMode: (fieldName: string) => void
  exitEditMode: (fieldName: string) => void
}

type EditModes = {
  [key: string]: boolean
}

const ProfileField = memo(
  ({
    name,
    children,
    isSubmitting,
    editMode,
    updateProfile,
    toggleEditMode,
    exitEditMode,
  }: ProfileFieldProps) => {
    const isEditMode = editMode[name]

    const profileFieldStyleProps = {
      variant: isEditMode ? 'default' : 'unstyled',
      className: 'w-full',
      mt: 'md',
    }

    return (
      <Box className='flex items-center gap-3'>
        {children(profileFieldStyleProps)}
        <Box mt={42}>
          {isEditMode ? (
            <Flex gap={10}>
              <ActionIcon
                disabled={isSubmitting}
                variant='light'
                color='green'
                size='lg'
                aria-label='save'
                onClick={() => updateProfile(name)}
              >
                {isSubmitting ? (
                  <Loader size={20} color='green' />
                ) : (
                  <IconCheck
                    style={{ width: '70%', height: '70%' }}
                    stroke={1.5}
                  />
                )}
              </ActionIcon>

              <ActionIcon
                variant='light'
                color='red'
                size='lg'
                aria-label='edit'
                onClick={() => exitEditMode(name)}
              >
                <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Flex>
          ) : (
            <ActionIcon
              variant='default'
              size='lg'
              aria-label='edit'
              onClick={() => toggleEditMode(name)}
            >
              <IconPencil
                className='text-slate-600 cursor-pointer'
                style={{ width: '70%', height: '70%' }}
                stroke={1.5}
              />
            </ActionIcon>
          )}
        </Box>
      </Box>
    )
  }
)

const Clinics = () => {
  const [editMode, setEditMode] = useState<EditModes>({
    name: false,
    phone: false,
    city: false,
    website: false,
    address: false,
    insurances: false,
  })
  const [formData, setFormData] = useState<any>(null)
  const [clinicId, setClinicId] = useState<any>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleEditMode = useCallback((fieldName: string) => {
    setEditMode((prevMode) => {
      // Set all fields to false
      const newMode = Object.keys(prevMode).reduce((acc, key) => {
        acc[key] = false
        return acc
      }, {} as EditModes)

      // Enable edit mode for the selected field
      return {
        ...newMode,
        [fieldName]: !prevMode[fieldName],
      }
    })
  }, [])

  const exitEditMode = useCallback((fieldName: string) => {
    setEditMode((prevMode) => ({
      ...prevMode,
      [fieldName]: false,
    }))
  }, [])

  const updateProfile = useCallback(
    async (fieldName: string) => {
      setIsSubmitting(true)
      try {
        const updatedField = { [fieldName]: formData[fieldName] }
        const response = await fetch(`/api/clinic/${clinicId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedField),
        })

        if (response.ok) {
          // Clinic field updated successfully
          const updatedClinic = await response.json()
          console.log('Clinic updated successfully:', updatedClinic)
          setIsSubmitting(false)
          exitEditMode(fieldName)
          notifications.show({
            color: 'green',
            message: 'Clinic updated successfully.',
          })
        } else {
          // Handle error response
          console.error('Failed to update clinic')
          setIsSubmitting(false)
          notifications.show({
            title: 'Oops!',
            color: 'red',
            message: 'Something went wrong.',
          })
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error updating clinic:', error)
        setIsSubmitting(false)
        notifications.show({
          title: 'Oops!',
          color: 'red',
          message: 'Something went wrong.',
        })
      }
    },
    [formData, clinicId, exitEditMode]
  )

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await getClinics()
        console.log('Data: ', data.data[0].id)
        setClinicId(data.data[0].id)
        setFormData({
          name: data.data[0].name,
          imageUrl: data.data[0].imageUrl,
          city: data.data[0].city,
          phone: data.data[0].phone,
          address: data.data[0].address,
          email: data.data[0].email,
          website: data.data[0].website,
          insurances: data.data[0].insurances || '',
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
      setIsUploading(true)
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
        setIsUploading(false)

        if (data.secure_url) {
          setFormData({
            ...formData,
            imageUrl: data.secure_url,
          })
          updateProfile('imageUrl')
        }
      } else {
        setIsUploading(false)
        throw new Error('Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setIsUploading(false)
    }
  }

  return (
    <div>
      <div className='flex items-center'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-lg font-semibold md:text-2xl mb-6'>
            Clinic Profile
          </h1>
        </div>
      </div>

      <div className='mt-10'>
        <Card
          padding='lg'
          radius='lg'
          shadow='md'
          maw={800}
          className='mx-auto'
        >
          {/* <div className='my-3'>
            <p className='font-bold text-slate-700'>Edit Profile</p>
            <Divider my='md' />
          </div> */}
          <div className='profile-content'>
            <div className='flex'>
              <div className='relative w-fit mx-auto'>
                <Avatar
                  src={formData?.imageUrl}
                  size={120}
                  radius={80}
                  mx='auto'
                />
                {isUploading && (
                  <div className='bg-white absolute top-0 w-full h-full flex items-center justify-center rounded-full bg-opacity-70'>
                    <Loader color='green' />
                  </div>
                )}
                <input
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  id='profile_pic'
                  onChange={handleFileChange}
                  disabled={isUploading}
                  hidden
                />
                {!isUploading && (
                  <Tooltip label='Update profile picture' position='right-end'>
                    <label
                      htmlFor='profile_pic'
                      className='w-10 h-10 profile-update-btn shadow-lg rounded-full flex items-center justify-center absolute bottom-1 -right-2 cursor-pointer'
                    >
                      <IconUserEdit className={classes.profile_action_icon} />
                    </label>
                  </Tooltip>
                )}
              </div>
            </div>

            {/* Clinic name */}
            <ProfileField
              name='name'
              isSubmitting={isSubmitting}
              editMode={editMode}
              updateProfile={updateProfile}
              toggleEditMode={toggleEditMode}
              exitEditMode={exitEditMode}
            >
              {(profileFieldStyleProps) => (
                <TextInput
                  label='Clinic'
                  placeholder='Enter clinic name'
                  value={formData?.name}
                  onChange={handleChange}
                  name='name'
                  readOnly={!editMode.name}
                  disabled={isSubmitting}
                  required
                  {...profileFieldStyleProps}
                />
              )}
            </ProfileField>
            {/* Phone number */}
            <ProfileField
              name='phone'
              isSubmitting={isSubmitting}
              editMode={editMode}
              updateProfile={updateProfile}
              toggleEditMode={toggleEditMode}
              exitEditMode={exitEditMode}
            >
              {(profileFieldStyleProps) => (
                <TextInput
                  label='Phone number'
                  placeholder='Enter phone number'
                  value={formData?.phone}
                  onChange={handleChange}
                  readOnly={!editMode.phone}
                  disabled={isSubmitting}
                  name='phone'
                  {...profileFieldStyleProps}
                />
              )}
            </ProfileField>
            {/* City */}
            <ProfileField
              name='city'
              isSubmitting={isSubmitting}
              editMode={editMode}
              updateProfile={updateProfile}
              toggleEditMode={toggleEditMode}
              exitEditMode={exitEditMode}
            >
              {(profileFieldStyleProps) => (
                <TextInput
                  label='City'
                  placeholder='What city are you located'
                  value={formData?.city}
                  onChange={handleChange}
                  name='city'
                  readOnly={!editMode.city}
                  disabled={isSubmitting}
                  required
                  {...profileFieldStyleProps}
                />
              )}
            </ProfileField>
            {/* Website */}
            <ProfileField
              name='website'
              isSubmitting={isSubmitting}
              editMode={editMode}
              updateProfile={updateProfile}
              toggleEditMode={toggleEditMode}
              exitEditMode={exitEditMode}
            >
              {(profileFieldStyleProps) => (
                <TextInput
                  label='Clinic website'
                  placeholder='ex. myclinic.com'
                  value={formData?.website}
                  onChange={handleChange}
                  name='website'
                  readOnly={!editMode.website}
                  disabled={isSubmitting}
                  {...profileFieldStyleProps}
                />
              )}
            </ProfileField>
            {/* Address */}
            <ProfileField
              name='address'
              isSubmitting={isSubmitting}
              editMode={editMode}
              updateProfile={updateProfile}
              toggleEditMode={toggleEditMode}
              exitEditMode={exitEditMode}
            >
              {(profileFieldStyleProps) => (
                <TextInput
                  label='Address'
                  placeholder='Enter exact address'
                  value={formData?.address}
                  onChange={handleChange}
                  name='address'
                  readOnly={!editMode.address}
                  disabled={isSubmitting}
                  required
                  {...profileFieldStyleProps}
                />
              )}
            </ProfileField>
            {/* Insurances */}
            {formData && formData.insurances && (
              <ProfileField
                name='insurances'
                isSubmitting={isSubmitting}
                editMode={editMode}
                updateProfile={updateProfile}
                toggleEditMode={toggleEditMode}
                exitEditMode={exitEditMode}
              >
                {(profileFieldStyleProps) => (
                  <MultiSelect
                    label='Insurance'
                    placeholder='Select up to 3 insurances'
                    maxValues={3}
                    defaultValue={formData?.insurances.split(' ')}
                    data={['ASCOMA', 'IMPG', 'PPM', 'ABC']}
                    name='insurances'
                    hidePickedOptions
                    searchable
                    onChange={handleTagsChange}
                    readOnly={!editMode.insurances}
                    disabled={isSubmitting}
                    nothingFoundMessage='Insurance does not exist...'
                    {...profileFieldStyleProps}
                  />
                )}
              </ProfileField>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Clinics

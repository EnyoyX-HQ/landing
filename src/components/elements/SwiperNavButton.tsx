'use client'

import { ActionIcon, Group } from '@mantine/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { useSwiper } from 'swiper/react'

const SwiperNavButton = () => {
  const swiper = useSwiper()

  return (
    <div className='swiper-nav-btns mt-4'>
      <Group justify='end'>
        <ActionIcon
          size='xl'
          radius={'xl'}
          color='gray'
          onClick={() => swiper.slidePrev()}
        >
          <IconArrowLeft />
        </ActionIcon>

        <ActionIcon
          size='xl'
          radius={'xl'}
          color='gray'
          onClick={() => swiper.slideNext()}
        >
          <IconArrowRight />
        </ActionIcon>
      </Group>
    </div>
  )
}

export default SwiperNavButton

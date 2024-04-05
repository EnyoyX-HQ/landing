'use client'

import { ActionIcon, Avatar, Group } from '@mantine/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SwiperNavButton from '../../elements/SwiperNavButton'
import { Navigation, Pagination } from 'swiper/modules'
import { Wish } from '@/images'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className='section--padding'>
      <div className='ex--container'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          className='mySwiper mt-10'
        >
          <SwiperNavButton />
          <SwiperSlide>
            <div className='relative py-20 testimonial-card rounded-3xl px-8 lg:px-80'>
              <p className='text-lg md:text-3xl text-slate-700'>
                Quickly send an invoice for each insurance claims and get paid
                in less than 48-hours.
              </p>
              <div className='flex gap-2 mt-16'>
                <Avatar
                  src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'
                  alt='img'
                />
                <div className='user-info'>
                  <h4 className='font-bold text-slate-700'>Dr. Halid</h4>
                  <p className='text-sm text-slate-500'>
                    From Lourdes medical clinic
                  </p>
                </div>
              </div>

              <Image
                src={Wish}
                className='w-10 lg:w-20 absolute -bottom-12 lg:-bottom-10 right-64 lg:right-36'
                alt='wish'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative py-20 testimonial-card rounded-3xl px-8 lg:px-80'>
              <p className='text-lg md:text-3xl text-slate-700'>
                Quickly send an invoice for each insurance claims and get paid
                in less than 48-hours.
              </p>
              <div className='flex gap-2 mt-16'>
                <Avatar
                  src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'
                  alt='img'
                />
                <div className='user-info'>
                  <h4 className='font-bold text-slate-700'>Dr. Halid</h4>
                  <p className='text-sm text-slate-500'>
                    From Lourdes medical clinic
                  </p>
                </div>
              </div>

              <Image
                src={Wish}
                className='w-10 lg:w-20 absolute -bottom-12 lg:-bottom-10 right-64 lg:right-36'
                alt='wish'
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial

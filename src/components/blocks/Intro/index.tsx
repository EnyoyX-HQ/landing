'use client'

import { IntroImg1, IntroImg2, Shred } from '@/images'
import { Card } from '@mantine/core'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const Intro = () => {
  return (
    <section className='section--padding'>
      <div className='ex--container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <Image src={IntroImg1} className='rounded-3xl' alt='agent' />
          <Image
            src={IntroImg2}
            className='rounded-3xl hidden lg:block'
            alt='agent'
          />
          <div className='slider'>
            <Swiper spaceBetween={50} slidesPerView={1} className='mySwiper'>
              <SwiperSlide>
                <div className='flex flex-col gap-10 justify-between'>
                  <Card
                    padding='xl'
                    radius='xl'
                    className='h-full flex justify-end'
                    withBorder
                  >
                    <p className='text-slate-700'>
                      Discover a smooth cash-flow strategy to support your
                      entire business, with advances from insurance claims
                      submitted by your customers.
                    </p>
                  </Card>
                  <Image src={Shred} alt='image' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col gap-10 justify-between'>
                  <Card
                    padding='xl'
                    radius='xl'
                    className='h-full flex justify-end'
                    withBorder
                  >
                    <p className='text-slate-700'>
                      Discover a smooth cash-flow strategy to support your
                      entire business, with advances from insurance claims
                      submitted by your customers.
                    </p>
                  </Card>
                  <Image src={Shred} alt='image' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro

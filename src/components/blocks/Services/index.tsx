'use client'

import { IconArrowRight, IconCircleCheck } from '@tabler/icons-react'
import Image from 'next/image'
import { Star, ToolCardImg, ToolCardImg2, Wish } from '@/images'
import { Avatar } from '@mantine/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EksellDisplay } from '@/components/elements/FontContainer'
import { ExButton } from '@/components'

const Services = () => {
  return (
    <section className='section--padding'>
      <div className='ex--container'>
        <div className='header'>
          <h1 className={`${EksellDisplay.variable} text-3xl lg:text-5xl`}>
            Quickly turn idle{' '}
            <span className='text-green-400'>insurance claims</span> to <br />{' '}
            working capital within <span className='gradient-text'>48</span>{' '}
            hours.
          </h1>
          <p className='text-slate-700 w-full lg:w-96 mt-4'>
            Quickly send an invoice for each insurance claims and get paid in
            less than 48-hours.
          </p>
        </div>

        <div className='desktop hidden md:block mt-10'>
          <div className='grid grid-cols-2 gap-10'>
            <div className='gray-card'>
              <div className='count'>
                <h1 className={`${EksellDisplay.variable}`}>1</h1>
              </div>

              <h1 className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}>
                Complete KYC & onboarding{' '}
              </h1>
              <p className='text-slate-700 w-full lg:w-96'>
                Quickly send an invoice for each insurance claims and get paid
                in less than 48-hours.
              </p>

              <div className='bottom mt-10 float-end'>
                <div className='flex gap-3 items-center bg-white rounded-lg p-3 w-fit mb-3'>
                  <p>Create an account</p>
                  <IconCircleCheck size={18} color='green' />
                </div>
                <div className='flex gap-3 items-center bg-white rounded-lg p-3 w-fit'>
                  <p>Complete onboarding</p>
                  <IconCircleCheck size={18} color='green' />
                </div>
              </div>
            </div>
            <div className='gray-card'>
              <h1 className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}>
                Need some help?
              </h1>
              <p className='text-slate-700 w-full lg:w-96'>
                Talk to one of our sales executives to get you cleared and
                started.
              </p>

              <ExButton
                type='link'
                href='/'
                className='mt-40'
                rightIcon={<IconArrowRight />}
                isGradient
              >
                Get started
              </ExButton>
            </div>
          </div>

          <div className='gray-card mt-10'>
            <div className='bottom-overlay'></div>
            <div className='flex justify-between'>
              <div>
                <div className='count'>
                  <h1 className={`${EksellDisplay.variable}`}>2</h1>
                </div>
                <h1 className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}>
                  Submit idle insurance claims
                </h1>
                <p className='text-slate-700 w-full lg:w-96'>
                  Quickly send an invoice for each insurance claims and get paid
                  in less than 48-hours.
                </p>
              </div>

              <Image src={ToolCardImg} className='w-72 pt-20' alt='image' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-10'>
            <div className='gray-card'>
              <div className='bottom-overlay'></div>
              <div className='flex justify-between'>
                <div>
                  <div className='count'>
                    <h1 className={`${EksellDisplay.variable}`}>3</h1>
                  </div>
                  <h1
                    className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}
                  >
                    Get credited
                  </h1>
                  <p className='text-slate-700 w-full lg:w-96'>
                    Get funds to make your business a legacy that supersedes
                    you.
                  </p>
                </div>

                <Image src={ToolCardImg2} className='w-40 pt-20' alt='image' />
              </div>
            </div>
            <div className='quote'>
              <Image
                src={Star}
                className='absolute top-10 left-10'
                alt='icon'
              />
              <Image
                src={Wish}
                className='absolute w-20 bottom-20 right-14'
                alt='icon'
              />
              <h2 className='text-2xl font-semibold text-slate-800'>
                Our billing is seamless thanks to EnvoyX's agile and
                uncomplicated solution
              </h2>

              <div className='flex gap-2 mt-16'>
                <Avatar
                  src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'
                  alt='img'
                />
                <div className='user-info'>
                  <h4 className='font-bold text-slate-800'>Loubao Kraka</h4>
                  <p className='text-sm text-slate-700'>
                    Finance @ Lourdes medical clinic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mobile md:hidden mt-10'>
          <Swiper spaceBetween={50} slidesPerView={1} className='mySwiper'>
            <SwiperSlide>
              <div className='gray-card'>
                <div className='count'>
                  <h1 className={`${EksellDisplay.variable}`}>1</h1>
                </div>

                <h1 className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}>
                  Complete KYC & onboarding{' '}
                </h1>
                <p className='text-slate-700 w-full lg:w-96'>
                  Quickly send an invoice for each insurance claims and get paid
                  in less than 48-hours.
                </p>

                <div className='bottom mt-10'>
                  <div className='flex gap-3 items-center bg-white rounded-lg p-3 w-fit mb-3'>
                    <p>Create an account</p>
                    <IconCircleCheck size={18} color='green' />
                  </div>
                  <div className='flex gap-3 items-center bg-white rounded-lg p-3 w-fit'>
                    <p>Complete onboarding</p>
                    <IconCircleCheck size={18} color='green' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='gray-card'>
                <div className='bottom-overlay'></div>
                <div className='flex flex-col gap-8 items-center'>
                  <div>
                    <div className='count'>
                      <h1 className={`${EksellDisplay.variable}`}>2</h1>
                    </div>
                    <h1
                      className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}
                    >
                      Submit idle insurance claims
                    </h1>
                    <p className='text-slate-700 w-full lg:w-96'>
                      Quickly send an invoice for each insurance claims and get
                      paid in less than 48-hours.
                    </p>
                  </div>

                  <Image src={ToolCardImg} className='w-72' alt='image' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='gray-card'>
                <div className='bottom-overlay'></div>
                <div className='flex flex-col gap-8 items-center'>
                  <div>
                    <div className='count'>
                      <h1 className={`${EksellDisplay.variable}`}>3</h1>
                    </div>
                    <h1
                      className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}
                    >
                      Get credited
                    </h1>
                    <p className='text-slate-700 w-full lg:w-96'>
                      Get funds to make your business a legacy that supersedes
                      you.
                    </p>
                  </div>

                  <Image src={ToolCardImg2} className='w-52' alt='image' />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className='mySwiper mt-10'
          >
            <SwiperSlide>
              <div className='gray-card'>
                <h1 className={`${EksellDisplay.variable} text-4xl mt-4 mb-2`}>
                  Need some help?
                </h1>
                <p className='text-slate-700 w-full lg:w-96'>
                  Talk to one of our sales executives to get you cleared and
                  started.
                </p>

                <ExButton
                  type='link'
                  href='/'
                  className='mt-40'
                  rightIcon={<IconArrowRight />}
                  isGradient
                >
                  Get started
                </ExButton>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='quote'>
                <Image
                  src={Wish}
                  className='absolute w-20 bottom-20 right-14'
                  alt='icon'
                />
                <h2 className='text-2xl font-semibold text-slate-800'>
                  Our billing is seamless thanks to EnvoyX's agile and
                  uncomplicated solution
                </h2>

                <div className='flex gap-2 mt-16'>
                  <Avatar
                    src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'
                    alt='img'
                  />
                  <div className='user-info'>
                    <h4 className='font-bold text-slate-800'>Loubao Kraka</h4>
                    <p className='text-sm text-slate-700'>
                      Finance @ Lourdes medical clinic
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Services

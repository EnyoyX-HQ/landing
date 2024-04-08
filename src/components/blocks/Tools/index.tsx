'use client'

import { Asteriks, ToolCardImg } from '@/images'
import Image from 'next/image'
import { IconArrowRight } from '@tabler/icons-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EksellDisplay } from '@/components/elements/FontContainer'
import { ExButton } from '@/components'

const Tools = () => {
  return (
    <section id='tools' className='section--padding bg-ex-deep-green'>
      <div className='ex--container'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5 lg:mx-40'>
          <h1 className={`text-5xl font-bold text-white`}>
            The tools you really need
          </h1>
          <p className='text-slate-300 w-full md:w-96'>
            Discover a smooth cash-flow strategy to support your entire
            business, with advances from insurance claims submitted by your
            customers.
          </p>
        </div>

        <div className='mt-10'>
          <div className='invoice-card flex flex-col md:flex-row justify-between lg:p-5 px-5 lg:px-10 h-[500px] rounded-3xl overflow-hidden'>
            <div className='text-area flex flex-col justify-between lg:p-5 py-10 text-white'>
              <div>
                <Image src={Asteriks} className='w-16 md:w-20' alt='img' />
                <h2
                  className={`text-3xl font-bold md:text-5xl mt-5 mb-5 lg:mb-0`}
                >
                  Claims Processing
                  {/*Invoice Crediting*/}
                </h2>
              </div>
              <div className='desc text-base lg:text-xl w-full md:w-[480px]'>
                {/*Quickly send an invoice for each insurance claims
and get paid in less than 48-hours*/}
                Envoyx's sophisticated AI powered solutions ensure swift and efficient resolution of invoices and insurance claims to increase operational efficiency. 
              </div>
            </div>
            <div className='-mt-3 md:pt-40'>
              <Image
                src={ToolCardImg}
                width={400}
                className='-mb-5'
                alt='image'
              />
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={'auto'}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className='mySwiper mt-10'
          >
            <SwiperSlide>
              <div className='focus-card rounded-3xl p-8 lg:p-20'>
                <h2
                  className={`text-3xl font-bold lg:text-5xl text-white`}
                >
                  {/*Focus on what matters. <br /> No more running out of cash.*/}
                  Reliable Fraud Detection
                </h2>
                <p className='text-white mt-5'>
                  Envoyx's fraud detection capabilities enables swift identification of suspicious patterns and anomalies in insurance claims to mitigate fraudulent activities,
                 protect revenue streams and fortify financial security.
                </p>
                <div className='flex justify-between items-center mt-20'>
                  <ExButton
                    type='link'
                    href='/signin'
                    rightIcon={<IconArrowRight className='text-yellow-200' />}
                    className='gradient-text'
                  >
                    Get started
                  </ExButton>

                  <Image src={Asteriks} width={100} alt='img' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='billing-card relative overflow-hidden rounded-3xl'>
                <div className='px-8 lg:px-20 pt-8 lg:pt-20'>
                  <h2
                    className={`text-3xl font-bold lg:text-5xl text-white`}
                  >
                    Enhanced Revenue
                    {/*Seemless Billing*/} 
                  </h2>
                  <p className='text-white mt-5'>
                    Quickly send an invoice for each insurance claim and get paid
                in less than 48-hours.
                {/*Handle your billing process, including claims submission,
                  ensuring maximum reimbursement for your
                  services.*/}
                  </p>
                </div>
                <div className='mt-4 lg:mt-[70px] flex justify-between items-center'>
                  <Image
                    src={Asteriks}
                    width={40}
                    className='absolute bottom-20 left-10 lg:left-20'
                    alt='img'
                  />
                  <Image
                    src={ToolCardImg}
                    className='relative -bottom-5 lg:-bottom-10 left-32 md:left-80 w-52 md:w-36 lg:w-72'
                    alt='image'
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Tools

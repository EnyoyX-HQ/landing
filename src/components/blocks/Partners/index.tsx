import partnersData from '@/lib/partners'
import Image from 'next/image'
import { EksellDisplay } from '@/components/elements/FontContainer'
import { ExButton } from '@/components'

const Partners = () => {
  return (
    <section className='partners bg-slate-50 section--padding'>
      <div className='ex--container'>
        <h2 className={`${EksellDisplay.variable} text-3xl lg:text-5xl mb-3`}>
          You're in safe hands 👌
        </h2>
        <p className='w-full lg:w-[520px]'>
          We've have partnered with lots of insurance and financial providers
          just to make your business soft 🤑
        </p>
      </div>

      <div className='auto-slider'>
        <div className='auto-slide-track'>
          {partnersData?.map((partner, index) => (
            <div key={index} className='auto-slide'>
              <Image src={partner.image} width={120} alt={partner.alt} />
            </div>
          ))}

          {partnersData?.map((partner, index) => (
            <div key={index} className='auto-slide'>
              <Image src={partner.image} width={120} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className='ex--container'>
        <div className='flex items-center gap-5'>
          <ExButton type='action' className='bg-yellow-200 hover:bg-yellow-300'>
            And <span className='text-green-600'>50+</span> more
          </ExButton>
          <div className='bg-slate-200 h-[1px] w-full'></div>
        </div>
      </div>
    </section>
  )
}

export default Partners

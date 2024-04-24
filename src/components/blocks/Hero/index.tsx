import { Box, Group, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { EksellDisplay } from '@/components/elements/FontContainer' /*${EksellDisplay.variable}*/
import { ExButton, GlowingBalls, Navbar } from '@/components'

const Hero = () => {
  return (
    <header className='h-screen relative hero-section'>
      <Navbar />
      <GlowingBalls />
      <Box className='hero-text h-screen ex--container relative z-50 -mt-16 lg:-mt-10'>
        <div className='flex flex-col items-center justify-center h-full text-center gap-8'>
          <h1
            className={`text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full lg:w-[800px]`}
          >
            {/*Unlock <span className='gradient-text'>Financial</span> Potential
            and propel your business operations*/}
            Empowering <span className='gradient-text'>Healthcare</span> Operations with AI
          </h1>
          <p className='text-slate-300 text-base lg:text-xl'>
            {/*Bridge cash flow gaps and invest in your growth with flexible
            invoice finance.*/}
            Transform your insurance and clinical operations with AI to 
            bridge the digital and cashflow gap.
          </p>
          <Group justify='center'>
            <ExButton
              type='link'
              href='/login'
              rightIcon={<IconArrowRight />}
              isGradient
            >
              Get started
            </ExButton>
            <ExButton
              type='link'
              href='#tools'
              rightIcon={<IconArrowRight />}
              className='text-ex-yellow'
            >
              Learn more
            </ExButton>
          </Group>
        </div>
      </Box>
    </header>
  )
}

export default Hero

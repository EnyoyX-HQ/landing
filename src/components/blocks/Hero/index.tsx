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
            className={`text-white font-bold text-3xl lg:text-6xl w-full lg:w-[800px]`}
          >
            Unlock <span className='gradient-text'>Financial</span> Potential
            and propel your business operations
          </h1>
          <p className='text-slate-300 text-base lg:text-2xl'>
            Bridge cash flow gaps and invest in your growth with flexible
            invoice finance.
          </p>
          <Group justify='center'>
            <ExButton
              type='link'
              href='/'
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

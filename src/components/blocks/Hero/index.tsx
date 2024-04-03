import { Box, Group, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { EksellDisplay } from '@/components/elements/FontContainer'
import { ExButton, GlowingBalls, Navbar } from '@/components'

const Hero = () => {
  return (
    <header className='h-screen relative hero-section'>
      <Navbar />
      <GlowingBalls />
      <Box className='hero-text ex--container relative z-50 -mt-16 lg:mt-0'>
        <div className='flex flex-col items-center text-center gap-8'>
          <h1
            className={`${EksellDisplay.variable} text-white text-3xl lg:text-6xl w-full lg:w-[800px]`}
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
              href='/'
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

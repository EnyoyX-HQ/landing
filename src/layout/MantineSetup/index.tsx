'use client'

import '@mantine/core/styles.css'
import appTheme from '@/theme'
import { MantineProvider } from '@mantine/core'
import Next13ProgressBar from 'next13-progressbar'

interface MantineSetupProps {
  children: React.ReactNode
}

const MantineSetup = ({ children }: MantineSetupProps) => {
  return (
    <MantineProvider theme={appTheme}>
      <Next13ProgressBar
        height='4px'
        color='#03A84E'
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </MantineProvider>
  )
}

export default MantineSetup

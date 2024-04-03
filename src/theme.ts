import { createTheme } from '@mantine/core'

const appTheme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },

  headings: {
    fontFamily: 'Eksell Display',
  },
})

export default appTheme

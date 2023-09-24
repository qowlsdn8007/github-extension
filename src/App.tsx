import { useEffect } from 'react'
import {  BaseStyles, Box, PageLayout, ThemeProvider, useTheme } from '@primer/react'

function App() {
  const { colorMode, setColorMode, colorScheme, theme } = useTheme();
  useEffect(() => {
    setColorMode('night')
    console.log(colorMode)
    console.log(colorScheme)
  }, [])
  return (
    <ThemeProvider theme={theme} colorMode='auto' dayScheme="light" nightScheme="dark_dimmed">
      <BaseStyles>
        <PageLayout sx={{ width: '100%', height: '100%', bg: theme}}>
          <Box sx={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'border.default', p: 3}}>Hello</Box>
        </PageLayout>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App

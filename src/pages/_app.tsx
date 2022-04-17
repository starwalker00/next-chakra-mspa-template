import type { AppPropsWithLayout } from 'src/custom-types/page'

import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NextNProgress />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default App

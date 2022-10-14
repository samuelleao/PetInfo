import type { AppProps } from 'next/app'
import { theme, globalStyles } from 'src/styles/stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <div className={theme}>
      <Component {...pageProps} />
    </div>
  )

}

export default MyApp

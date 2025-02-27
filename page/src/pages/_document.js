
import { Providers } from "../providers";

import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en" className='light'>
      <Head />
      <body >
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  )
}

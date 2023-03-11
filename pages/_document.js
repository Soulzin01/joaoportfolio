import { Html, Head, Main, NextScript } from 'next/document'
import tailwind from 'tailwind-scrollbar';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className='scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-slate-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

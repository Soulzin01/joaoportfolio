import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className='scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-slate-800 scrollbar-thumb-rounded-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

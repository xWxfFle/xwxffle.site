import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { PropsWithChildren } from 'react'
import { Rammetto_One, Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const rammetto = Rammetto_One({ weight: ['400'], subsets: ['latin'], variable: '--font-rammeto' })

export const metadata = {
  title: 'Arseniy Filatov • Frontend developer',
  description: 'This is my portfolio site',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={`antialiased ${nunito.variable} ${rammetto.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel='icon' type='image/x-icon' href='/icons/favicon.ico' />
      </head>
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

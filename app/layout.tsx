import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { PropsWithChildren } from 'react'
import { Rammetto_One } from 'next/font/google'

const inter = Rammetto_One({ weight: '400', subsets: ['latin'] })

 

export const metadata = {
  title: 'Arseniy Filatov - Dev',
  description: 'Creative frontend developer.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={`antialiased ${inter.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

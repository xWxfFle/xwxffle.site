import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { PropsWithChildren } from 'react'
import { Rammetto_One, Nunito } from 'next/font/google'
import { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const rammetto = Rammetto_One({ weight: ['400'], subsets: ['latin'], variable: '--font-rammeto' })

export const metadata: Metadata = {
  title: 'Arseniy Filatov  • Frontend developer',
  description: 'This is my portfolio site',
  keywords: ['Arseniy Filatov', 'xwxffle', 'Frontend', 'Frontend developer', 'React'],
  creator: 'Arseniy Filatov',
  themeColor: '#197550',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Arseniy Filatov  • Frontend developer',
    description: 'This is my portfolio site',
    type: 'website',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={`antialiased ${nunito.variable} ${rammetto.variable}`}>
      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='mask-icon' color='#000000' href='/icons/safari-pinned-tab.svg' />
      <link rel='apple-touch-startup-image' href='/startup.png' />
      <link rel='shortcut icon' href='/icons/apple-touch-icon.png' />
      <link rel='icon' type='image/x-icon' href='/icons/favicon.ico' />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

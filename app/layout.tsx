import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { PropsWithChildren } from 'react'
import { Rammetto_One, Nunito } from 'next/font/google'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

const nunito = Nunito({ weight: ['200', '300', '400', '500', '600'], subsets: ['latin'], variable: '--font-nunito' })
const rammetto = Rammetto_One({ weight: ['400'], subsets: ['latin'], variable: '--font-rammeto' })

export const metadata: Metadata = {
  title: 'Arseniy Filatov  • Frontend developer • xWxfFle',
  description:
    'I`m a 17 y.o. react frontend developer from Rostov-on-Don, Russia. These days I use Next.js for project development and also enjoy creating WebGL applications using Three.js and React Three Fiber.',
  keywords: ['Arseniy Filatov', 'xwxffle', 'Frontend', 'Frontend developer', 'React'],
  creator: 'Arseniy Filatov',
  metadataBase: new URL('https://xwxffle.site'),
  themeColor: '#197550',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Arseniy Filatov  • Frontend developer • xWxfFle',
    url: 'https://xwxffle.site',
    description:
      'I`m a 17 y.o. react frontend developer from Rostov-on-Don, Russia. These days I use Next.js for project development and also enjoy creating WebGL applications using Three.js and React Three Fiber.',
    type: 'website',
  },
  twitter: {
    title: 'Arseniy Filatov  • Frontend developer • xWxfFle',
    description:
      'I`m a 17 y.o. react frontend developer from Rostov-on-Don, Russia. These days I use Next.js for project development and also enjoy creating WebGL applications using Three.js and React Three Fiber.',
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
      <link rel='shortcut icon' type='image/x-icon' href='/icons/favicon.ico' />
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  )
}

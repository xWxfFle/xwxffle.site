import '@/global.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Nunito, Rammetto_One } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Layout } from '@/shared/ui'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
})
const rammetto = Rammetto_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rammeto',
})

const title = 'Arseniy Filatov • Frontend developer'
const description =
  'I`m a frontend developer. I use Next.js for project development and also enjoy creating WebGL apps using Three.js and R3F.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Arseniy Filatov', 'xwxffle', 'Frontend', 'Frontend developer'],
  creator: 'Arseniy Filatov',
  metadataBase: new URL('https://xwxffle.site'),
  themeColor: '#197550',
  manifest: '/manifest.json',
  openGraph: {
    title,
    url: 'https://xwxffle.site',
    description,
    type: 'website',
  },
  twitter: {
    title,
    description,
  },
}

const MetaLinks = () => (
  <>
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
    <link
      rel="apple-touch-icon"
      sizes="16x16"
      href="/icons/favicon-16x16.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="32x32"
      href="/icons/favicon-32x32.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon.png"
    />
    <link rel="mask-icon" color="#000000" href="/icons/safari-pinned-tab.svg" />
    <link rel="apple-touch-startup-image" href="/startup.png" />
    <link rel="shortcut icon" href="/icons/apple-touch-icon.png" />
    <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
  </>
)

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${nunito.variable} ${rammetto.variable}`}>
      <MetaLinks />
      <body>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  )
}

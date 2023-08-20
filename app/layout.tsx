'use client'
import '@/global.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Nunito, Rammetto_One } from 'next/font/google'
import { PropsWithChildren, useRef } from 'react'

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
  'I`m a 18 y.o. frontend developer. I use Next.js for project development and also enjoy creating WebGL apps using Three.js and R3F.'

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

const Canvas = dynamic(() => import('@/shared/lib/r3f/canvas'), {
  ssr: false,
})

export default function RootLayout({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <html
      lang="en"
      className={`antialiased ${nunito.variable} ${rammetto.variable}`}
    >
      <MetaLinks />
      <body>
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: ' 100%',
            height: '100%',
            overflow: 'auto',
            touchAction: 'auto',
          }}
        >
          {children}
          <Canvas
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
            }}
            eventSource={ref}
            eventPrefix="client"
          />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

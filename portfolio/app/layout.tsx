import './globals.css'
import { Montserrat, Lato } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from './components/page-components/Footer'
import FontAwesomeScript from './components/FontAwesomeScript'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata = {
  title: 'Melvin Sureshbabu',
  description: "Melvin Sureshbabu's Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
        <FontAwesomeScript />
      </body>
    </html>
  )
}
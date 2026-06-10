import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Ноён Борх | Дээд зэрэглэлийн металл боловсруулалт ба аж үйлдвэрийн шийдэл',
  description: 'Монголын тэргүүлэх дээд зэрэглэлийн ган боловсруулалт ба аж үйлдвэрийн барилгын компани. Бид дэлхийн түвшний металл бүтээц, тусгай боловсруулалт, аж үйлдвэрийн шийдлийг хүргэдэг.',
  keywords: ['ган боловсруулалт', 'металл боловсруулалт', 'аж үйлдвэрийн барилга', 'Монгол', 'металл бүтээц', 'Ноён Борх'],
  generator: 'v0.app',
  icons: {
    icon: 'https://res.cloudinary.com/dnf4kmkrx/image/upload/noynborkh_jejga4',
    apple: 'https://res.cloudinary.com/dnf4kmkrx/image/upload/noynborkh_jejga4',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
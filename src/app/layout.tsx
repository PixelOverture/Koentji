import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Koentji',
  description: 'Your one stop corporate imaging partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  )
}

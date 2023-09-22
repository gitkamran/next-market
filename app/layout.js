import Header from '@/components/header/Header'
import './globals.css'

export const metadata = {
  title: 'فروشگاه اینترنتی Next',
  description: 'خرید آنلاین از فروشگاه اینترنتی Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

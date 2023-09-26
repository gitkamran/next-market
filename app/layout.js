import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './globals.css'
import ContextProvider from '@/context/contextProvider/ContextProvider'

export const metadata = {
  title: 'فروشگاه اینترنتی Next',
  description: 'خرید آنلاین از فروشگاه اینترنتی Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}

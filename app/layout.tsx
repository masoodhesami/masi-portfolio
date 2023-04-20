import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Masoomeh Bahrami',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative">
          <Header />
          <div className="absolute top-3 right-0">
            <Navbar />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}

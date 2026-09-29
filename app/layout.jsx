import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'Playbook Core'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar 
              logo={
                <span style={{ fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>
                  PLAYBOOK<span style={{ color: 'var(--brand-accent, #2563eb)' }}>.CORE</span>
                </span>
              } 
            />
          }
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/your-username/playbook-core/tree/main"
          footer={
            <span>{new Date().getFullYear()} © Built for Self-Directed Professionals.</span>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

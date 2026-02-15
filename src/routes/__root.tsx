import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Mohammed Alabsi — Senior Backend Engineer' },
      {
        name: 'description',
        content:
          'Senior Backend Engineer specializing in scalable, high-performance backend systems for high-traffic e-commerce platforms. Expert in API design, database optimization, and SaaS infrastructure.',
      },
      { name: 'theme-color', content: '#09090b' },
      { property: 'og:title', content: 'Mohammed Alabsi — Senior Backend Engineer' },
      {
        property: 'og:description',
        content:
          'Senior Backend Engineer specializing in scalable, high-performance backend systems for high-traffic e-commerce platforms. Expert in API design, database optimization, and SaaS infrastructure.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@600;700&display=swap',
      },
    ],
    scripts: [
      {
        children: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else{document.documentElement.setAttribute('data-theme','dark')}}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`,
      },
    ],
  }),

  component: RootComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

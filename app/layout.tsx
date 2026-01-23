import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Iker Guerra - Terror Psicológico y Ciencia Ficción Distópica',
    template: '%s | Iker Guerra'
  },
  description: 'Autor de terror psicológico y ciencia ficción distópica. Explora universos donde la realidad se fractura y la mente humana enfrenta sus límites más oscuros.',
  keywords: [
    'Iker Guerra',
    'terror psicológico',
    'ciencia ficción distópica',
    'microrelatos de terror',
    'Ecos de la mente',
    'literatura de horror',
    'espacios liminales',
    'horror tecnológico',
    'thriller psicológico'
  ],
  authors: [{ name: 'Iker Guerra' }],
  creator: 'Iker Guerra',
  publisher: 'Iker Guerra',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Iker Guerra - Autor',
    title: 'Iker Guerra - Terror Psicológico y Ciencia Ficción',
    description: 'Autor de terror psicológico y ciencia ficción distópica',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Iker Guerra - Autor de Terror Psicológico'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iker Guerra - Terror Psicológico y Ciencia Ficción',
    description: 'Autor de terror psicológico y ciencia ficción distópica',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <head>
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Iker Guerra - Terror Psicológico y Ciencia Ficción Distópica',
    template: '%s | Iker Guerra'
  },
  description: 'Autor de terror psicológico y ciencia ficción distópica. Explora universos donde la realidad se fractura y la mente humana enfrenta sus límites más oscuros.',
  keywords: [
    'terror psicológico',
    'ciencia ficción distópica',
    'autor español',
    'Kindle Unlimited',
    'relatos de terror',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

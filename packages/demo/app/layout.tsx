import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'React Snowfall Effect - Beautiful Animated Snow for Your Website',
    template: '%s | React Snowfall Effect',
  },
  description:
    'Create stunning snowfall animations for your React applications with customizable snowflakes, wind effects, and interactive features. Easy to use, lightweight, and fully customizable.',
  keywords: [
    'react',
    'snowfall',
    'animation',
    'snow effect',
    'winter animation',
    'christmas effect',
    'web animation',
    'javascript',
    'typescript',
    'component',
    'customizable',
    'interactive',
  ],
  authors: [
    {
      name: 'Thành Nam Nguyễn',
      url: 'https://www.thanhnamnguyen.dev/',
    },
  ],
  creator: 'Thành Nam Nguyễn',
  publisher: 'Thành Nam Nguyễn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://react-snowfall-effect-demo.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://react-snowfall-effect-demo.vercel.app',
    title: 'React Snowfall Effect - Beautiful Animated Snow for Your Website',
    description:
      'Create stunning snowfall animations for your React applications with customizable snowflakes, wind effects, and interactive features. Easy to use, lightweight, and fully customizable.',
    siteName: 'React Snowfall Effect',
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
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

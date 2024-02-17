import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next Portfolio',
  description: 'Aimable Next Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={`${montserrat.className} bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

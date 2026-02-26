import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Zinema Music | Your Voice. Our Music. The Big Screen.',
  description:
    'The next-generation record label dropping 3 cinematic tracks a week. Join the Zinema Zing challenge, win ₹1 Lakh, and get featured in our next big release.',
  keywords: [
    'Zinema Music',
    'Indian Music',
    'Tamil Music',
    'Zinema Zing',
    'Music Contest',
    'Record Label',
    'Cinematic Music',
    'Hindi Music',
    'Telugu Music',
    'Malayalam Music',
  ],
  openGraph: {
    title: 'Zinema Music | Your Voice. Our Music. The Big Screen.',
    description:
      'The next-generation record label dropping 3 cinematic tracks a week. Join the Zinema Zing challenge, win ₹1 Lakh, and get featured in our next big release.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Providers = ({ children }: { children: ReactNode }) => <NextUIProvider>{children}</NextUIProvider>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

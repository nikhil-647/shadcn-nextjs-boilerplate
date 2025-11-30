import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import '@/styles/theme.css';

export const metadata = {
  title: 'Shinobu - Master DSA Problems',
  description: 'Master Data Structures & Algorithms with Shinobu, your personal coding companion'
};

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text-primary)'
      }} className="font-serif antialiased">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

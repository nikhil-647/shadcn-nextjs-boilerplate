import { PropsWithChildren } from 'react';
import '@/styles/globals.css';

export const metadata = {
  title: 'Hello World - Next.js App',
  description: 'A simple Hello World Next.js application'
};

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

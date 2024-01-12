import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'App To Manage Daily Tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

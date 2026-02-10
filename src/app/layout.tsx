// app/layout.tsx
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

// Headings: Playfair Display (Serif)
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair', // CSS variable for Tailwind
});

// Body: Inter (Sans-serif)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // CSS variable for Tailwind
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-primary bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
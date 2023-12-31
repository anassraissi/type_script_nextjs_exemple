import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
  
export default function RootLayout({  
   //The children prop is of type React.ReactNode, indicating that it can accept any valid React node as its value. 
   //This allows you to pass any JSX, components, or text as children to the RootLayout component.
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div>
        <Navbar></Navbar>
        {children} 
          </div>
        </ThemeProvider>
        </body>
    </html>
  )
}

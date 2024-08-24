import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image'; 
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LevelUp Economy",
  description: "Building Vibrant Economic Ecosystems",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Navbar */}
        <header className="flex items-center justify-between w-full px-10 py-4 bg-white ">
        <Link href="/" passHref> 
          <Image
            src="/levelup-economy-logo-2.png"
            alt="LevelUp Economy Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
          <nav className="flex gap-10 pr-20">
            <Link href="/about" className="text-black hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-black hover:text-blue-600">
              Contact
            </Link>
            <Link href="/newsletter" className="text-black hover:text-blue-600">
              Newsletter
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

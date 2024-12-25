import type { Metadata } from "next";
import { Trispace, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const trispace = Trispace({
  variable: "--font-trispace",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News-Site",
  description: "news for you where you can find what you need to know",
  icons:{
    icon:[{url:'/img/logo (40 x 40 px).png', sizes:'40x40'}, {url:'/img/logo 16-16_px.png', sizes:'16x16'}],
    apple:{
      url:'/img/logo- 180-180.png',
      sizes:'180x180'
    }
    },
    manifest:"/img/manifest.webmanifest",
    openGraph:{
      title:'News-Site',
      description:'news for you where you can find what you need to know',
      type:'website',
      authors:'MHRatul'
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

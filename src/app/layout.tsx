import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RandomNews from "@/components/RandomNews";


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
      sizes:'180 x 180'
    }
    },
    manifest:"/img/site.webmanifest",
    openGraph:{
      title:'News-Site',
      description:'news for you where you can find what you need to know',
      type:'article',
      authors:'MHRatul'
    },
    keywords:['news-site', 'news', 'news-for-you', 'news about everything'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={trispace.className}>
        <main className='px-2 md:px-20'>
          <Header/>
          <Navbar/>
          <section className="flex justify-between">
            {children}
            <RandomNews/>
          </section>
        </main>
      </body>
    </html>
  );
}

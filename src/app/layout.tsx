import type { Metadata } from "next";
import {Poppins}from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



//using poppins as the  default fontfamily

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Bonnie Graphics",
  description: "Graphics Designer in Kenya",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
    <body className={`${poppins.variable} bg-background text-text`}>
    {/*persistent html */}
        <Header/>
        <div> {/* Wrap main for better structure*/}
       <main>
        {children}
      </main>
    </div>
     <Footer/>
      </body>
    </html>
  );
}

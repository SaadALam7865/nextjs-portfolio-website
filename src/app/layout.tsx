
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Fronted Developer | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header/>
        {children}
        <Loader />
        <ScrollToTop />
        <Footer/>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" async></script>
      </body>
    </html>
  );
}
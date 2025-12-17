import { Bai_Jamjuree, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/ContexProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const  popins = Bai_Jamjuree({
  weight:["400", "600", "700"],
  subsets:["latin"]
}) 

export const metadata = {
  title: "Food Resturent",
  description: "Come to Our Resturent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${popins.className} antialiased`}
      >
        <Header></Header>
        <div className=" max-w-11/12 mx-auto">
          <CartProvider>{children}</CartProvider>
        </div>
      </body>
    </html>
  );
}

import "../styles/globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr Munshi GTA Online",
  description: "Created by Asif Munshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globalIcon.css";

export const metadata = {
  title: "Heintz Enterprize",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7533880397219783" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}

import { Rasa } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const rasa = Rasa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rasa',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: "Heintz Enterprize",
  description: "Your One-Stop Shop for Quality Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div><Header /></div>
        <div>{children}</div>
      </body>
    </html>
  );
}

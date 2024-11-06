import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" />
        <title>Health For Haitians</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

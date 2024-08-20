// src/app/layout.tsx

import { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./ui/global.css";
import Navbar from "./components/NavBar";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | My Portfolio",
    default: "My Portfolio",
  },
  description: "Portfolio of a Full Stack Developer",
  metadataBase: new URL("https://your-portfolio-site.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />

        <div>{children}</div>
      </body>
    </html>
  );
}

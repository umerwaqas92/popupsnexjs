import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🛡️SecureGuard",
  description: "Cutting-Edge Technology to Keep Your Data Safe and Secure",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

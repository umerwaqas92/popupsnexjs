import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🛡️SecureGuard",
  description: "Cutting-Edge Technology to Keep Your Data Safe and Secure",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">

      <body className={inter.className}>
        
      <GoogleAnalytics gaId={"AW-16602261433"} />

        {children}
        </body>
    </html>
  );
}

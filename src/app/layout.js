import ScrollToTop from "../components/global/ScrollToTop";
import "../styles/index.css";
import Header from "../components/global/Header";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Coming Soon Page",
  description:
    "We can't wait to share the exciting launch of our website with you! 🚀 Stay tuned for the event. Subscribe now to be the first to know when we go live! 🌐✨",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <link rel="icon" href="/logo/usthb.png" />
      <body
        suppressHydrationWarning={true}
        className={`bg-[#fdfdfd] dark:bg-background ${syne.className} ${inter.className}`}
      >
        <Providers children={children}>
          <Header />
          {children}
          <ScrollToTop />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

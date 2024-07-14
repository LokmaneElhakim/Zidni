import ScrollToTop from "../components/global/ScrollToTop";
import "../styles/index.css";
import { ABeeZee } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/global/Header/index";

// According to Google Fonts' official website, it's the best font for learning
const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abz",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Zidni Elearning Platform",
  description:
    "We can't wait to share the exciting launch of our website with you! 🚀 Stay tuned for the event. Subscribe now to be the first to know when we go live! 🌐✨",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <link rel="icon" href="/logo/usthb.png" />
      <body
        suppressHydrationWarning={true}
        className={`bg-[#fdfdfd] dark:bg-background ${abeezee.className}`}
      >
        <Providers>
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

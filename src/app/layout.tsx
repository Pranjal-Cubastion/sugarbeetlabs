import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sugarbeet.app"),
  title: {
    default: "Sugarbeet — Find Your Plant-Based Person",
    template: "%s | Sugarbeet",
  },
  description:
    "Sugarbeet is the #1 vegan dating app. Connect with like-minded plant-based singles who share your values. Find love, friendship, and a greener future together.",
  keywords: [
    "vegan dating app",
    "plant-based dating",
    "vegan singles",
    "vegetarian dating",
    "eco-conscious dating",
    "green dating",
    "vegan matchmaking",
    "sustainable lifestyle dating",
  ],
  authors: [{ name: "Sugarbeet Team" }],
  creator: "Sugarbeet",
  publisher: "Sugarbeet Labs",
  category: "Dating",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sugarbeet.app",
    siteName: "Sugarbeet",
    title: "Sugarbeet — Find Your Plant-Based Person",
    description:
      "Connect with vegan singles who share your values. The premium dating app built for plant-based people.",
    images: [
      {
        url: "/hero-couple.png",
        width: 1200,
        height: 630,
        alt: "Sugarbeet vegan dating app — couple in nature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugarbeet — Find Your Plant-Based Person",
    description:
      "Connect with vegan singles who share your values. The premium dating app built for plant-based people.",
    images: ["/hero-couple.png"],
    creator: "@sugarbeetapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1A3C2A" },
    { media: "(prefers-color-scheme: dark)", color: "#1A3C2A" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sugarbeet",
  description:
    "The #1 vegan dating app. Connect with like-minded plant-based singles.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://sugarbeet.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <head>
        <link
          rel="preload"
          href="/bagoss-standard/BagossStandardTRIAL-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/bagoss-standard/BagossStandardTRIAL-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";
import { GA_ID } from "./lib/analytics";
import { SITE_URL } from "./lib/site";
import { StructuredData } from "./components/StructuredData";

const georgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-georgian",
});

const TITLE = "რეაბილიტაცია და ფიზიოთერაპია სახლში თბილისში | HomeRehab";
const DESCRIPTION =
  "ფიზიოთერაპია და რეაბილიტაცია სახლში თბილისში. ლიცენზირებული ფიზიოთერაპევტი მოვა თქვენთან: ორთოპედიული, ნევროლოგიური, პოსტოპერაციული და ხანდაზმულთა რეაბილიტაცია. დარეკეთ: +995 591 31 42 22";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | HomeRehab",
  },
  description: DESCRIPTION,
  applicationName: "HomeRehab",
  keywords: [
    "რეაბილიტაცია სახლში",
    "ფიზიოთერაპია სახლში",
    "ფიზიოთერაპევტი სახლში",
    "რეაბილიტაცია თბილისში",
    "ფიზიოთერაპია თბილისი",
    "რეაბილიტოლოგი სახლში",
    "ფიზიკური თერაპია სახლში",
    "ინსულტის შემდგომი რეაბილიტაცია",
    "პოსტოპერაციული რეაბილიტაცია",
    "მანუალური თერაპია",
    "ლფკ სახლში",
    "physiotherapy at home Tbilisi",
    "home rehabilitation Georgia",
  ],
  authors: [{ name: "HomeRehab" }],
  creator: "HomeRehab",
  publisher: "HomeRehab",
  category: "Health",
  alternates: {
    canonical: SITE_URL,
    languages: {
      ka: SITE_URL,
      "x-default": SITE_URL,
    },
  },
  icons: {
    icon: "/small-logo.png",
    apple: "/small-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ka_GE",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "HomeRehab",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/cover.jpg",
        width: 1600,
        height: 876,
        alt: "რეაბილიტაცია და ფიზიოთერაპია სახლში — HomeRehab, თბილისი",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2C6B8E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className={georgian.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}

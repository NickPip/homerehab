import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";
import { GA_ID } from "./lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.homerehab.ge"),
  title: "HomeRehab - რეაბილიტაცია სახლში",
  description: "პროფესიონალური სახლში ფიზიკური რეაბილიტაციის სერვისები. თქვენი გამოჯანმრთელება, ჩვენი ვალდებულება.",
  icons: {
    icon: "/small-logo.png",
    apple: "/small-logo.png",
  },
  openGraph: {
    title: "HomeRehab - რეაბილიტაცია სახლში",
    description: "პროფესიონალური სახლში ფიზიკური რეაბილიტაციის სერვისები",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}



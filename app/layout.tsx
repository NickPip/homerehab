import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "HomeRehab - სახლის რეაბილიტაცია",
  description: "პროფესიონალური სახლში ფიზიკური რეაბილიტაციის სერვისები. თქვენი გამოჯანმრთელება, ჩვენი ვალდებულება.",
  icons: {
    icon: "/small-logo.png",
    apple: "/small-logo.png",
  },
  openGraph: {
    title: "HomeRehab - სახლის რეაბილიტაცია",
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
    </html>
  );
}



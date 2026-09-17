import Link from "next/link";
import type { Metadata } from "next";
import { PHONE_DISPLAY, PHONE_E164 } from "./lib/site";

export const metadata: Metadata = {
  title: "გვერდი ვერ მოიძებნა",
  robots: { index: false, follow: true },
};

/**
 * Georgian 404. The default Next.js page serves English text under lang="ka" and offers no route
 * back into the site, which wastes both the visit and the crawl.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-bold text-[#2C6B8E] mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          გვერდი ვერ მოიძებნა
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          მოთხოვნილი გვერდი აღარ არსებობს ან მისამართი არასწორია. დაბრუნდით მთავარ გვერდზე
          ან დაგვირეკეთ და ჩვენ დაგეხმარებით.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#2C6B8E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#245a78] min-h-[48px]"
          >
            მთავარ გვერდზე დაბრუნება
          </Link>
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex items-center justify-center rounded-xl bg-[#4A9D5F] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#3d8550] min-h-[48px]"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  );
}

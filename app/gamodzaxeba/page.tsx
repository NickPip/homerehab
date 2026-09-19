import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import {
  CALLOUT_CTA,
  CALLOUT_FAQ,
  CALLOUT_H1,
  CALLOUT_INTRO,
  CALLOUT_SECTIONS,
} from "../lib/callout";
import { PHONE_DISPLAY, PHONE_E164, SITE_URL } from "../lib/site";

const PATH = "/gamodzaxeba";
// The root layout appends "| HomeRehab" via its title template, so the brand is not repeated here.
const TITLE = "ფიზიოთერაპევტის გამოძახება ბინაზე თბილისში";
const SOCIAL_TITLE = `${TITLE} | HomeRehab`;
const DESCRIPTION =
  "როგორ მიდის ფიზიოთერაპევტის ბინაზე გამოძახება თბილისში: ზარი, დროისა და რაიონის შეთანხმება, პირველი ვიზიტი, გეგმა და სეანსები. ორშ-შაბ 09:00-19:00.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    type: "article",
    locale: "ka_GE",
    url: `${SITE_URL}${PATH}`,
    siteName: "HomeRehab",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    images: [{ url: "/cover.jpg", width: 1600, height: 876, alt: CALLOUT_H1 }],
  },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

/**
 * schema.org for this page only. The FAQPage node lists exactly the questions rendered below, and
 * the WebPage node points back at the business declared on the home page rather than redeclaring
 * it, so Google sees one business with two pages instead of two competing entities.
 */
function CalloutStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${PATH}#webpage`,
        url: `${SITE_URL}${PATH}`,
        name: SOCIAL_TITLE,
        description: DESCRIPTION,
        inLanguage: "ka-GE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        breadcrumb: { "@id": `${SITE_URL}${PATH}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PATH}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "მთავარი", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "ფიზიოთერაპევტის გამოძახება ბინაზე" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PATH}#faq`,
        mainEntity: CALLOUT_FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function CalloutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <CalloutStructuredData />

      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center" aria-label="HomeRehab">
            <Image
              src="/logo.png"
              alt="HomeRehab — რეაბილიტაცია და ფიზიოთერაპია სახლში თბილისში"
              width={540}
              height={229}
              sizes="(min-width: 768px) 132px, 94px"
              className="h-9 w-auto object-contain sm:h-11"
            />
          </Link>
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#4A9D5F] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8550] focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>დარეკეთ</span>
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <nav aria-label="ნავიგაცია" className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#2C6B8E] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            მთავარი გვერდი
          </Link>
        </nav>

        <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          {CALLOUT_H1}
        </h1>
        <p className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg">
          {CALLOUT_INTRO}
        </p>

        {CALLOUT_SECTIONS.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-gray-700">{section.body}</p>
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-2.5 text-base text-gray-700">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 flex-shrink-0 text-[#4A9D5F]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
            ხშირად დასმული კითხვები ბინაზე გამოძახებაზე
          </h2>
          <div className="space-y-3">
            {CALLOUT_FAQ.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group rounded-2xl border border-gray-200 bg-gray-50/70 open:bg-white"
              >
                <summary className="cursor-pointer list-none rounded-2xl px-5 py-4 text-base font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6B8E]">
                  {item.question}
                </summary>
                <p className="px-5 pb-5 text-base leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#4A9D5F]/25 bg-[#4A9D5F]/5 p-6 sm:p-8">
          <p className="mb-5 text-base leading-relaxed text-gray-800">{CALLOUT_CTA}</p>
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#4A9D5F] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#3d8550] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <p className="mt-5 text-sm text-gray-600">
            სერვისების, დიაგნოზებისა და თბილისის რაიონების სრული ჩამონათვალი{" "}
            <Link href="/#coverage" className="font-semibold text-[#2C6B8E] hover:underline">
              მთავარ გვერდზეა
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  );
}

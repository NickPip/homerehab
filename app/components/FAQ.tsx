"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { trackCallClick } from "../lib/analytics";
import { m } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { PHONE_E164 } from "../lib/site";

/**
 * Frequently asked questions, rendered as native <details> so the answers are present in the
 * server HTML for crawlers even while collapsed. The same questions are emitted as FAQPage
 * JSON-LD in StructuredData, which is what makes them eligible for rich results.
 */
export default function FAQ() {
  const { t, tList, language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const items = tList<{ question: string; answer: string }>("faq.items");

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 px-4" key={language}>
      <div className="max-w-4xl mx-auto">
        <m.div
          className="text-center mb-12 sm:mb-16"
          initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C6B8E]/10 text-[#2C6B8E] rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            {t("faq.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </m.div>

        <div className="space-y-3 sm:space-y-4">
          {items.map((item, index) => {
            // The first answer starts open; the rest are collapsed but still in the HTML.
            const isOpen = index === 0;
            return (
              <m.div
                key={index}
                initial={
                  prefersReducedMotion ? { y: 0 } : { y: 16 }
                }
                whileInView={prefersReducedMotion ? {} : { y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(index, 4) * 0.06 }}
              >
                <details
                  open={isOpen}
                  className="group rounded-2xl border border-gray-200 bg-gray-50/70 open:bg-white open:shadow-md transition-all duration-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6B8E] focus-visible:ring-offset-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className="w-5 h-5 flex-shrink-0 text-[#2C6B8E] transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </m.div>
            );
          })}
        </div>

        <m.div
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-[#2C6B8E]/5 border border-[#2C6B8E]/15 px-6 py-6 text-center sm:text-left"
          initial={prefersReducedMotion ? { y: 0 } : { y: 12 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base font-medium text-gray-800">{t("faq.cta")}</p>
          <a
            href={`tel:${PHONE_E164}`}
            onClick={() => trackCallClick("faq")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#4A9D5F] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#3d8550] hover:shadow-lg active:bg-[#357045] focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2 min-h-[48px]"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span>{t("faq.ctaButton")}</span>
          </a>
        </m.div>
      </div>
    </section>
  );
}

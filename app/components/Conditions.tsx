"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { m } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Stethoscope } from "lucide-react";

/**
 * Conditions treated, one h3 per diagnosis. Patients search by their diagnosis rather than by the
 * name of a therapy, so this section is what makes queries like "ინსულტის შემდეგ რეაბილიტაცია
 * სახლში" matchable at all.
 */
export default function Conditions() {
  const { t, tList } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const items = tList<{ title: string; description: string }>("conditions.items");

  return (
    <section id="conditions" className="bg-white py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <m.div
          className="text-center mb-12 sm:mb-16"
          initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C6B8E]/10 text-[#2C6B8E] rounded-full text-sm font-semibold mb-4">
            <Stethoscope className="w-4 h-4" aria-hidden="true" />
            {t("conditions.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("conditions.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("conditions.subtitle")}
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {items.map((item, index) => (
            <m.article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6 transition-colors hover:border-[#4A9D5F]/40 hover:bg-white"
              initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
              whileInView={prefersReducedMotion ? {} : { y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.05 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}

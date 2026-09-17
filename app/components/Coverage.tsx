"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { MapPin } from "lucide-react";
import ContactChannels from "./ContactChannels";
import { TBILISI_DISTRICTS } from "../lib/site";

/**
 * Service-area section. Naming the individual Tbilisi districts in body copy is what lets the page
 * match neighbourhood-level searches ("ფიზიოთერაპევტი ვაკეში"), which the generic "Tbilisi and
 * surrounding areas" wording could never rank for.
 */
export default function Coverage() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  // Georgian place names are what patients search with, so they stay Georgian in both languages.
  const districts = TBILISI_DISTRICTS;

  return (
    <section id="coverage" className="bg-gray-50 py-20 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A9D5F]/10 text-[#4A9D5F] rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {t("coverage.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("coverage.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("coverage.description")}
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { y: 0 } : { y: 12 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
            {t("coverage.districtsLabel")}
          </h3>
          <ul className="flex flex-wrap gap-2 mb-6">
            {districts.map((district) => (
              <li
                key={district}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
              >
                <MapPin className="w-3.5 h-3.5 text-[#4A9D5F]" aria-hidden="true" />
                {district}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mb-5">{t("coverage.note")}</p>
          <ContactChannels location="coverage" />
        </motion.div>
      </div>
    </section>
  );
}

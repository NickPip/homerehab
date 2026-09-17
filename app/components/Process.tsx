"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ListChecks } from "lucide-react";
import ContactChannels from "./ContactChannels";

/**
 * "How it works" plus the list of treatment methods. Both answer question-shaped searches that the
 * service cards alone never match, and the method names (massage, kinesiotherapy/LFK) are
 * high-volume queries in their own right.
 */
export default function Process() {
  const { t, tList } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const steps = tList<{ title: string; description: string }>("process.steps");
  const methods = tList<string>("methods.items");

  return (
    <section id="process" className="bg-gray-50 py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A9D5F]/10 text-[#4A9D5F] rounded-full text-sm font-semibold mb-4">
            <ListChecks className="w-4 h-4" aria-hidden="true" />
            {t("process.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("process.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14 sm:mb-16">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-sm"
              initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
              whileInView={prefersReducedMotion ? {} : { y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C6B8E] text-base font-bold text-white mb-4"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial={prefersReducedMotion ? { y: 0 } : { y: 16 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {t("methods.title")}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-3xl">
            {t("methods.subtitle")}
          </p>
          <ul className="flex flex-wrap gap-2 mb-6">
            {methods.map((method) => (
              <li
                key={method}
                className="rounded-lg bg-[#2C6B8E]/8 px-3 py-2 text-sm font-medium text-[#2C6B8E]"
              >
                {method}
              </li>
            ))}
          </ul>
          <ContactChannels location="process" />
        </motion.div>
      </div>
    </section>
  );
}

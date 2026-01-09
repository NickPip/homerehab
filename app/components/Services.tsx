"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  Home,
  Wrench,
  Paintbrush,
  Hammer,
  Shield,
  Heart,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function Services() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const services = [
    {
      icon: Home,
      title: t("services.homeRehab.title"),
      description: t("services.homeRehab.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: t("services.repair.title"),
      description: t("services.repair.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Paintbrush,
      title: t("services.renovation.title"),
      description: t("services.renovation.description"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Hammer,
      title: t("services.construction.title"),
      description: t("services.construction.description"),
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: t("services.safety.title"),
      description: t("services.safety.description"),
      color: "from-red-500 to-red-600",
    },
    {
      icon: Heart,
      title: t("services.care.title"),
      description: t("services.care.description"),
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#4A9D5F]/10 text-[#4A9D5F] rounded-full text-sm font-semibold mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4A9D5F]/20"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2C6B8E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#4A9D5F] font-semibold group-hover:gap-3 transition-all"
                >
                  <span>{t("services.learnMore")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("services.cta.title")}
              </h3>
              <p className="text-gray-600">{t("services.cta.description")}</p>
            </div>
            <a
              href="tel:+995599968989"
              aria-label="Call us at +995 599 96 89 89"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4A9D5F] text-white rounded-xl font-semibold hover:bg-[#3d8550] active:bg-[#357045] transition-all shadow-md hover:shadow-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>{t("services.cta.button")}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

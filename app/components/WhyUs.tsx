"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  Home,
  UserCheck,
  FileText,
  Clock,
  Heart,
  Eye,
} from "lucide-react";

export default function WhyUs() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const features = [
    {
      icon: Home,
      title: t("whyUs.comfort.title"),
      description: t("whyUs.comfort.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: UserCheck,
      title: t("whyUs.professionalism.title"),
      description: t("whyUs.professionalism.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: FileText,
      title: t("whyUs.individualApproach.title"),
      description: t("whyUs.individualApproach.description"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: t("whyUs.timeSaving.title"),
      description: t("whyUs.timeSaving.description"),
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Heart,
      title: t("whyUs.familyEnvironment.title"),
      description: t("whyUs.familyEnvironment.description"),
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Eye,
      title: t("whyUs.transparency.title"),
      description: t("whyUs.transparency.description"),
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="why-us" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#4A9D5F]/10 text-[#4A9D5F] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            {t("whyUs.badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {(() => {
              const title = t("whyUs.title");
              const parts = title.split(/(HomeRehab|Home Rehab)/);
              return parts.map((part, index) => {
                if (part === "HomeRehab" || part === "Home Rehab") {
                  return (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-[#2C6B8E] to-[#4A9D5F] bg-clip-text text-transparent"
                    >
                      {part}
                    </span>
                  );
                }
                return <span key={index}>{part}</span>;
              });
            })()}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            {t("whyUs.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4A9D5F]/30 overflow-hidden"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#2C6B8E] transition-colors relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: t("whyUs.stats.patients.number"), label: t("whyUs.stats.patients.label") },
            { number: t("whyUs.stats.experience.number"), label: t("whyUs.stats.experience.label") },
            { number: t("whyUs.stats.success.number"), label: t("whyUs.stats.success.label") },
            { number: t("whyUs.stats.satisfaction.number"), label: t("whyUs.stats.satisfaction.label") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={prefersReducedMotion ? { scale: 1 } : { scale: 0.9 }}
              whileInView={prefersReducedMotion ? {} : { scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A9D5F] mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Hero() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-x-hidden"
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={
          prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }
        }
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/cover.png)",
          }}
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 w-full lg:px-12">
        <div className="max-w-2xl">
          {/* Subtitle/Badge */}
          <motion.div
            className="mb-6"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A9D5F]/20 backdrop-blur-sm border border-[#4A9D5F]/30 rounded-full text-[#4A9D5F] text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Main Headline with colored accent */}
          <motion.h1
            className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-bold tracking-tight"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="text-white block drop-shadow-lg">{t("hero.title1")}</span>
            <span className="text-white block drop-shadow-lg">{t("hero.title2")}</span>
            <span className="text-[#4A9D5F] block drop-shadow-lg">{t("hero.title3")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Buttons Group */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
          >
            {/* Primary CTA - Phone */}
            <a
              href="tel:+995599968989"
              aria-label="Call us at +995 599 96 89 89"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#4A9D5F] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-[#3d8550] active:bg-[#357045] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2 focus:ring-offset-transparent font-semibold text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
            >
              <Phone className="w-5 h-5 sm:w-5 sm:h-5" aria-hidden="true" />
              <span>{t("hero.callButton")}</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent font-semibold text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
            >
              <span>{t("hero.cta")}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-white/20"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 1.1,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-[#4A9D5F] flex-shrink-0" />
              <span className="text-sm font-medium">{t("hero.trustBadge")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A9D5F] to-[#3d8550] border-2 border-white/20"
                  />
                ))}
              </div>
              <span className="ml-2">{t("hero.clients")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

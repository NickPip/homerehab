"use client";

import { Phone, Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useActiveSection } from "../hooks/useActiveSection";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export default function Header() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between lg:px-12">
        {/* Logo/Brand - clickable to scroll to hero */}
        <motion.a
          href="#home"
          className="flex items-center z-50"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: "easeOut",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="HomeRehab Logo"
            width={180}
            height={56}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            priority
          />
        </motion.a>

        {/* Desktop Navigation Menu - centered */}
        <motion.nav
          className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.15,
            ease: "easeOut",
          }}
        >
          <a
            href="#home"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === "home"
                ? "text-[#2C6B8E]"
                : "text-gray-700 hover:text-[#2C6B8E]"
            }`}
          >
            {t("nav.home")}
            {activeSection === "home" && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A9D5F]"
                layoutId="activeSection"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>
          <a
            href="#specialist"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === "specialist"
                ? "text-[#2C6B8E]"
                : "text-gray-700 hover:text-[#2C6B8E]"
            }`}
          >
            {t("nav.specialist")}
            {activeSection === "specialist" && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A9D5F]"
                layoutId="activeSection"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>
          <a
            href="#why-us"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === "why-us"
                ? "text-[#2C6B8E]"
                : "text-gray-700 hover:text-[#2C6B8E]"
            }`}
          >
            {t("nav.whyUs")}
            {activeSection === "why-us" && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A9D5F]"
                layoutId="activeSection"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>
          <a
            href="#contact"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === "contact"
                ? "text-[#2C6B8E]"
                : "text-gray-700 hover:text-[#2C6B8E]"
            }`}
          >
            {t("nav.contact")}
            {activeSection === "contact" && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A9D5F]"
                layoutId="activeSection"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </a>
        </motion.nav>

        {/* Right side actions */}
        <motion.div
          className="flex items-center gap-2 sm:gap-3 z-50"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
        >
          {/* Language Switcher - hidden on very small screens */}
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          {/* Phone Number - always visible */}
          <a
            href="tel:+995599968989"
            aria-label="Call us at +995 599 96 89 89"
            className="flex items-center gap-1.5 sm:gap-2 bg-[#4A9D5F] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-[#3d8550] active:bg-[#357045] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
            <span className="hidden xs:inline font-medium text-xs sm:text-sm">599-96-89-89</span>
            <span className="xs:hidden font-medium">{t("hero.callButton")}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#2C6B8E] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-colors font-medium text-base border-b border-gray-100 ${
                  activeSection === "home"
                    ? "text-[#2C6B8E] bg-[#2C6B8E]/5"
                    : "text-gray-700 hover:text-[#2C6B8E] hover:bg-gray-50"
                }`}
              >
                {t("nav.home")}
              </a>
              <a
                href="#specialist"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-colors font-medium text-base border-b border-gray-100 ${
                  activeSection === "specialist"
                    ? "text-[#2C6B8E] bg-[#2C6B8E]/5"
                    : "text-gray-700 hover:text-[#2C6B8E] hover:bg-gray-50"
                }`}
              >
                {t("nav.specialist")}
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-colors font-medium text-base border-b border-gray-100 ${
                  activeSection === "why-us"
                    ? "text-[#2C6B8E] bg-[#2C6B8E]/5"
                    : "text-gray-700 hover:text-[#2C6B8E] hover:bg-gray-50"
                }`}
              >
                {t("nav.whyUs")}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 rounded-lg transition-colors font-medium text-base border-b border-gray-100 ${
                  activeSection === "contact"
                    ? "text-[#2C6B8E] bg-[#2C6B8E]/5"
                    : "text-gray-700 hover:text-[#2C6B8E] hover:bg-gray-50"
                }`}
              >
                {t("nav.contact")}
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="sm:hidden">
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

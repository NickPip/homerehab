"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "ka", name: "KA", fullName: "ქართული" },
    { code: "en", name: "EN", fullName: "English" },
  ];

  // Toggle language on mobile (without dropdown)
  const handleMobileToggle = () => {
    const nextLanguage = language === "ka" ? "en" : "ka";
    setLanguage(nextLanguage);
  };

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Mobile: Toggle button (no dropdown) */}
      <button
        onClick={handleMobileToggle}
        className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2C6B8E] focus:ring-offset-2"
        aria-label="Toggle language"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="font-medium text-gray-700 text-sm">
          {languages.find((lang) => lang.code === language)?.name || "KA"}
        </span>
      </button>

      {/* Desktop: Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2C6B8E] focus:ring-offset-2"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="font-medium text-gray-700 text-sm">
          {languages.find((lang) => lang.code === language)?.name || "KA"}
        </span>
      </button>

      {/* Desktop Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code
                    ? "bg-[#2C6B8E] text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{lang.fullName}</span>
                  {language === lang.code && (
                    <motion.svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

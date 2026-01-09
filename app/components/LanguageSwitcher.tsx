"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "ka", name: "KA", fullName: "ქართული" },
    { code: "en", name: "EN", fullName: "English" },
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2C6B8E] focus:ring-offset-2"
        aria-label="Change language"
        aria-expanded="false"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="font-medium text-gray-700 text-sm">
          {languages.find((lang) => lang.code === language)?.name || "KA"}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
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
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
      </div>
    </div>
  );
}

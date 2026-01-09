"use client";

import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[#2C6B8E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Image
                src="/logo.png"
                alt="HomeRehab Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 sm:gap-3 text-white/90">
              <Phone className="w-4 h-4 text-[#4A9D5F] flex-shrink-0" />
              <a
                href="tel:+995599968989"
                className="text-sm sm:text-base font-semibold hover:text-[#4A9D5F] transition-colors"
              >
                +995 599 96 89 89
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-white/80 hover:text-[#4A9D5F] transition-colors text-xs sm:text-sm block py-1"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#specialist"
                  className="text-white/80 hover:text-[#4A9D5F] transition-colors text-xs sm:text-sm block py-1"
                >
                  {t("nav.specialist")}
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  className="text-white/80 hover:text-[#4A9D5F] transition-colors text-xs sm:text-sm block py-1"
                >
                  {t("nav.whyUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-[#4A9D5F] transition-colors text-xs sm:text-sm block py-1"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A9D5F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-0.5 sm:mb-1">
                    {t("footer.contact.phoneLabel")}
                  </p>
                  <a
                    href="tel:+995599968989"
                    className="text-white hover:text-[#4A9D5F] transition-colors font-medium text-sm sm:text-base"
                  >
                    +995 599 96 89 89
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A9D5F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-0.5 sm:mb-1">
                    {t("footer.contact.locationLabel")}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {t("footer.serviceArea")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A9D5F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60 text-xs mb-0.5 sm:mb-1">
                    {t("footer.contact.hoursLabel")}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {t("footer.contact.hours")}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              {t("footer.serviceAreaTitle")}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {t("footer.serviceAreaDescription")}
            </p>
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A9D5F] flex-shrink-0 mt-0.5" />
              <p className="text-white/80 text-xs sm:text-sm">
                {t("footer.serviceArea")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <Link
                href="#"
                className="hover:text-[#4A9D5F] transition-colors py-1"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="#"
                className="hover:text-[#4A9D5F] transition-colors py-1"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

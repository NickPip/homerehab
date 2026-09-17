"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { trackCallClick, trackMessageClick } from "../lib/analytics";
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Phone, Send } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_E164,
  TBILISI_DISTRICTS,
  WHATSAPP_BASE_URL,
} from "../lib/site";

/**
 * Callback request form. There is no backend to receive submissions, so instead of pretending to
 * send one the form composes the message and hands it to WhatsApp, where the patient presses send.
 * That keeps the conversation in the channel Georgian patients already use, and it cannot silently
 * drop a lead the way an unwired form would.
 */
export default function CallbackForm() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      t("callback.badge"),
      name && `${t("callback.nameLabel")}: ${name}`,
      phone && `${t("callback.phoneLabel")}: ${phone}`,
      district && `${t("callback.districtLabel")}: ${district}`,
      message && `${t("callback.messageLabel")} ${message}`,
    ].filter(Boolean);
    trackMessageClick("whatsapp", "callback_form");
    window.open(
      `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const field =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#2C6B8E] focus:outline-none focus:ring-2 focus:ring-[#2C6B8E]/30 min-h-[48px]";
  const label = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <section id="callback" className="bg-white py-20 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={prefersReducedMotion ? { y: 0 } : { y: 20 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A9D5F]/10 text-[#4A9D5F] rounded-full text-sm font-semibold mb-4">
            <Phone className="w-4 h-4" aria-hidden="true" />
            {t("callback.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("callback.title")}
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            {t("callback.subtitle")}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8 shadow-sm"
          initial={prefersReducedMotion ? { y: 0 } : { y: 16 }}
          whileInView={prefersReducedMotion ? {} : { y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
            <div>
              <label className={label} htmlFor="callback-name">
                {t("callback.nameLabel")}
              </label>
              <input
                id="callback-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t("callback.namePlaceholder")}
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="callback-phone">
                {t("callback.phoneLabel")}
              </label>
              <input
                id="callback-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={t("callback.phonePlaceholder")}
                className={field}
              />
            </div>
          </div>

          <div className="mb-4 sm:mb-5">
            <label className={label} htmlFor="callback-district">
              {t("callback.districtLabel")}
            </label>
            <select
              id="callback-district"
              name="district"
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
              className={field}
            >
              <option value="">{t("callback.districtPlaceholder")}</option>
              {TBILISI_DISTRICTS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5 sm:mb-6">
            <label className={label} htmlFor="callback-message">
              {t("callback.messageLabel")}
            </label>
            <textarea
              id="callback-message"
              name="message"
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t("callback.messagePlaceholder")}
              className={`${field} resize-y`}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-md transition-all hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 min-h-[48px]"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>{t("callback.submit")}</span>
            </button>
            <span className="text-sm text-gray-500 text-center sm:text-left">
              {t("callback.or")}
            </span>
            <a
              href={`tel:${PHONE_E164}`}
              onClick={() => trackCallClick("callback_form")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4A9D5F] px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#3d8550] focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2 min-h-[48px]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">{t("callback.hint")}</p>
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import { MessageCircle, Phone } from "lucide-react";
import { trackCallClick, trackMessageClick } from "../lib/analytics";
import { useLanguage } from "../contexts/LanguageContext";
import { PHONE_DISPLAY, PHONE_E164, VIBER_URL, WHATSAPP_URL } from "../lib/site";

/**
 * Call / WhatsApp / Viber row. WhatsApp and Viber carry most patient enquiries in Georgia, so
 * offering them next to the phone number measurably raises the number of conversations started.
 */
export default function ContactChannels({ location }: { location: string }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      <a
        href={`tel:${PHONE_E164}`}
        onClick={() => trackCallClick(location)}
        aria-label={`${t("contactChannels.call")} ${PHONE_DISPLAY}`}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4A9D5F] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#3d8550] active:bg-[#357045] focus:outline-none focus:ring-2 focus:ring-[#4A9D5F] focus:ring-offset-2 min-h-[44px]"
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        <span>{t("contactChannels.call")}</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackMessageClick("whatsapp", location)}
        aria-label="WhatsApp"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 min-h-[44px]"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a
        href={VIBER_URL}
        onClick={() => trackMessageClick("viber", location)}
        aria-label="Viber"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7360F2] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:ring-offset-2 min-h-[44px]"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        <span>Viber</span>
      </a>
    </div>
  );
}

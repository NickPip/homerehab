/** Canonical origin of the production site. Used for metadata, sitemap, robots and JSON-LD. */
export const SITE_URL = "https://www.homerehab.ge";

/** Business phone in E.164, for tel: links and structured data. */
export const PHONE_E164 = "+995591314222";

/** Business phone formatted for display. */
export const PHONE_DISPLAY = "+995 591 31 42 22";

/** WhatsApp click-to-chat link. wa.me expects the number without "+" or separators. */
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;

/** Viber deep link. Viber is the most widely used messenger in Georgia after WhatsApp. */
export const VIBER_URL = `viber://chat?number=${encodeURIComponent(PHONE_E164)}`;

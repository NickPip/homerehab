/** Canonical origin of the production site. Used for metadata, sitemap, robots and JSON-LD. */
export const SITE_URL = "https://www.homerehab.ge";

/** Business phone in E.164, for tel: links and structured data. */
export const PHONE_E164 = "+995591314222";

/** Business phone formatted for display. */
export const PHONE_DISPLAY = "+995 591 31 42 22";

/** Opening line prefilled into the messenger apps so the patient only has to press send. */
const FIRST_MESSAGE = "გამარჯობა, მაინტერესებს რეაბილიტაცია სახლში";

/** WhatsApp click-to-chat link. wa.me expects the number without "+" or separators. */
/** Bare wa.me endpoint, for callers that compose their own message body. */
export const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;

export const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(FIRST_MESSAGE)}`;

/** Viber deep link. Viber is the most widely used messenger in Georgia after WhatsApp. */
export const VIBER_URL = `viber://chat?number=${encodeURIComponent(PHONE_E164)}`;

/**
 * Tbilisi districts served. Shared by the visible Coverage section and the schema.org areaServed
 * list so the two never disagree. Georgian names, since that is what patients search with.
 */
export const TBILISI_DISTRICTS = [
  "ვაკე",
  "საბურთალო",
  "მთაწმინდა",
  "ისანი",
  "სამგორი",
  "გლდანი",
  "ნაძალადევი",
  "დიდუბე",
  "ჩუღურეთი",
  "კრწანისი",
  "დიდი დიღომი",
  "ვარკეთილი",
] as const;

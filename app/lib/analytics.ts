import { sendGAEvent } from "@next/third-parties/google";

/** Google Analytics 4 measurement ID (G-XXXXXXXXXX). Set NEXT_PUBLIC_GA_ID in the environment. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Reports a click on a "call" link so phone leads show up in GA4 as the `call_click` event. */
export function trackCallClick(location: string) {
  if (!GA_ID) return;
  sendGAEvent("event", "call_click", { location });
}

/** Reports a click on a messaging channel (WhatsApp, Viber) as a `message_click` event. */
export function trackMessageClick(channel: string, location: string) {
  if (!GA_ID) return;
  sendGAEvent("event", "message_click", { channel, location });
}

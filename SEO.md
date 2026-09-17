# SEO: what is in the code, and what only you can do

Target queries: **რეაბილიტაცია სახლში** and **ფიზიოთერაპია სახლში**, audience Tbilisi, Georgia.

## Done in this repository

| Area | What changed |
| --- | --- |
| Crawling | `app/robots.ts`, `app/sitemap.ts`, canonical URL, apex→www redirect |
| Metadata | Title, description, keywords, Open Graph (`ka_GE`), Twitter card, robots directives, theme colour |
| Structured data | `app/components/StructuredData.tsx`: MedicalBusiness + PhysicalTherapy with geo, 12 districts, opening hours, 6 services, both therapists, ContactPoint, ReserveAction, WebSite, FAQPage |
| Content | H1 carries both queries plus the city. New sections: Conditions (8 diagnoses), Process (4 steps + 9 methods), Coverage (12 districts), FAQ (12 questions), Callback form. Georgian body copy grew from 425 to ~2,900 words |
| Rendering | No content ships at `opacity:0` any more. The whole header and every section used to be invisible until hydration |
| Performance | `public/` shrank from 11.9 MB to 668 KB. Hero background is a prioritised WebP via `next/image` instead of a 2.3 MB CSS background. Georgian webfont via `next/font` |
| Conversion | WhatsApp and Viber with a prefilled Georgian opener, callback form, `call_click` and `message_click` events in Google Analytics |

## Environment variables

Set these in Vercel under **Settings → Environment Variables**, then redeploy.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID. Already set |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console "HTML tag" token. No meta tag is emitted while empty |
| `NEXT_PUBLIC_SAME_AS` | Comma-separated profile URLs (Google Business Profile, Facebook, Instagram) emitted as schema.org `sameAs` |

## What only you can do

These matter more than anything left in the code. For these queries Google shows a local pack
before it shows any website, and entry to that pack is driven by the Business Profile and its
reviews, not by markup.

1. **Google Business Profile.** Create it at business.google.com as a *service-area business* with
   the address hidden. Category "Physical therapist". Service area: Tbilisi. Same name, phone and
   hours as the site, character for character. Then put the listing URL in `NEXT_PUBLIC_SAME_AS`.
2. **Reviews.** Review count and how recently they arrived are the strongest local-pack factors.
   Ask every patient who finishes a course. Ten to fifteen genuine reviews changes the ranking;
   buying or writing them risks removal from the pack entirely.
3. **Search Console.** Verify the site, submit `https://www.homerehab.ge/sitemap.xml`, then request
   indexing for the home page. It reports which Georgian queries you appear for and at what
   position.
4. **Publish a real price.** "რამდენი ღირს რეაბილიტაცია სახლში" is high-intent commercial traffic
   and the page currently answers it only in general terms. A real starting figure — "ვიზიტი
   იწყება N ლარიდან" — can be added to the FAQ answer and mirrored into the schema as an `Offer`.
   No number was invented for you.
5. **Real patient testimonials.** Attributed quotes with first name, district and condition are
   worth adding, but only real ones. Fabricated reviews are a policy violation, so none were
   written.
6. **Links from other sites.** A Facebook page linking to the site, the clinics the therapists work
   with, Georgian medical directories.
7. **Verify the numbers.** The two invented "94%" figures are gone. What remains is the therapists'
   own: 6+ and 4+ years, 500+ and 400+ patients, now shown as 10+ combined years and 900+ combined
   patients. Those four source figures came with the site and were not verified here. If any is
   wrong, correct it in `app/contexts/LanguageContext.tsx` and the combined totals follow.

## Claims deliberately not made

A medical copy review removed several statements the business cannot substantiate. They are listed
here so nobody puts them back by accident:

- No recovery-rate or satisfaction percentage. Both need data behind them.
- Exercise is not described as slowing the progression of arthrosis, and home rehabilitation is not
  described as the fastest route to recovery. Neither is supported.
- The stroke answer does not say "start as early as possible"; very early high-dose mobilisation
  worsens outcomes. It defers to the treating doctor.
- No promised session count, lead time, or package discount. Add these once they are real.
- No street address or map coordinate. The therapists visit patients; they have no premises, and a
  fabricated address is what gets a Business Profile suspended.

## Expected timeline

The Business Profile can appear in the local pack within days. Organic position on a head query
like "რეაბილიტაცია სახლში" typically moves over two to six months, and depends mostly on reviews
and inbound links rather than on further code changes.

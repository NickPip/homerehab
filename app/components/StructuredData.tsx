import { FAQ_ITEMS_KA } from "../lib/faq";
import { PHONE_E164, SITE_URL, TBILISI_DISTRICTS } from "../lib/site";

/**
 * Profile URLs Google can reconcile this business against: the Google Business Profile listing,
 * a Facebook page, an Instagram profile. Set NEXT_PUBLIC_SAME_AS to a comma-separated list.
 */
const SAME_AS = (process.env.NEXT_PUBLIC_SAME_AS ?? "")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

/**
 * schema.org JSON-LD describing the business, its therapists and its services.
 *
 * Emitted server-side in <head> so Googlebot reads it without executing JavaScript. Georgian is the
 * primary language of the site, so names and descriptions are Georgian; `areaServed` and `geo` are what
 * make the business eligible for the Tbilisi local pack on queries like "რეაბილიტაცია სახლში".
 */

const SERVICES = [
  {
    name: "ორთოპედიული რეაბილიტაცია სახლში",
    description:
      "სახსრების, ხერხემლისა და საყრდენ-მამოძრავებელი სისტემის დაავადებების რეაბილიტაცია სახლის პირობებში: ტკივილის შემცირება და მოძრაობის მოცულობის მაქსიმალური აღდგენა.",
  },
  {
    name: "პოსტოპერაციული და ტრავმის შემდგომი რეაბილიტაცია",
    description:
      "ოპერაციის, მოტეხილობის ან სპორტული ტრავმის შემდეგ ფუნქციის ეტაპობრივი აღდგენა ინდივიდუალური გეგმით, პაციენტის სახლში.",
  },
  {
    name: "ნევროლოგიური რეაბილიტაცია სახლში",
    description:
      "მოძრაობის, წონასწორობისა და დამოუკიდებლობის აღდგენა ინსულტის, ნევროლოგიური დაავადებების ან ნერვული სისტემის დაზიანების შემდეგ.",
  },
  {
    name: "მანუალური თერაპია",
    description:
      "ხელით ზემოქმედების მეთოდები კუნთების დაძაბულობის მოსახსნელად, სახსრების მობილობის გასაუმჯობესებლად და ტკივილის შესამცირებლად.",
  },
  {
    name: "სუნთქვითი რეაბილიტაცია",
    description:
      "სუნთქვითი ვარჯიშები და ფილტვების ფუნქციის გაუმჯობესება ხანგრძლივი დაავადების, ოპერაციის ან ინფექციის შემდეგ.",
  },
  {
    name: "ხანდაზმულთა რეაბილიტაცია სახლში",
    description:
      "წონასწორობის, ძალისა და ყოველდღიური აქტივობის შენარჩუნება ხანდაზმულებში, დაცემის რისკის შემცირება და დამოუკიდებელი ცხოვრება სახლში.",
  },
];

const THERAPISTS = [
  {
    name: "ნიკოლოზ თოდუა",
    jobTitle: "ფიზიკური თერაპევტი და რეაბილიტაციის სპეციალისტი",
    alumniOf: "თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
    image: `${SITE_URL}/doctor.jpeg`,
  },
  {
    name: "გიორგი პაიჭაძე",
    jobTitle: "ფიზიკური თერაპევტი, რეაბილიტაციის სპეციალისტი",
    alumniOf: "თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
    image: `${SITE_URL}/doctor2.jpeg`,
  },
];


export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "HomeRehab",
        slogan: "რეაბილიტაცია და ფიზიოთერაპია სახლში",
        description:
          "ლიცენზირებული ფიზიოთერაპევტების გუნდი, რომელიც სარეაბილიტაციო კურსს პაციენტის სახლში ატარებს თბილისსა და მიმდებარე რაიონებში.",
        url: SITE_URL,
        telephone: PHONE_E164,
        image: `${SITE_URL}/cover.jpg`,
        logo: `${SITE_URL}/logo.png`,
        medicalSpecialty: "Physiotherapy",
        address: {
          "@type": "PostalAddress",
          addressLocality: "თბილისი",
          addressRegion: "თბილისი",
          addressCountry: "GE",
        },
        areaServed: [
          {
            "@type": "City",
            name: "თბილისი",
            sameAs: "https://www.wikidata.org/wiki/Q994",
          },
          // The districts are named in the visible Coverage section; repeating them here is what
          // makes neighbourhood-level coverage machine-readable rather than prose-only.
          ...TBILISI_DISTRICTS.map((district) => ({
            "@type": "Place",
            name: district,
            containedInPlace: { "@type": "City", name: "თბილისი" },
          })),
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 41.7151,
              longitude: 44.8271,
            },
            geoRadius: 30000,
          },
        ],
        availableService: SERVICES.map((s) => ({
          "@type": "MedicalTherapy",
          name: s.name,
          description: s.description,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "რეაბილიტაციისა და ფიზიოთერაპიის სერვისები სახლში",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              serviceType: "ფიზიოთერაპია და რეაბილიტაცია სახლში",
              areaServed: { "@type": "City", name: "თბილისი" },
            },
          })),
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        employee: THERAPISTS.map((t) => ({
          "@type": "Person",
          name: t.name,
          jobTitle: t.jobTitle,
          image: t.image,
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: t.alumniOf,
          },
        })),
        knowsLanguage: ["ka", "en"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_E164,
          contactType: "customer service",
          areaServed: "GE",
          availableLanguage: ["Georgian", "English"],
        },
        ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
        potentialAction: {
          "@type": "CommunicateAction",
          name: "უფასო კონსულტაცია",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `tel:${PHONE_E164}`,
            actionPlatform: [
              "https://schema.org/DesktopWebPlatform",
              "https://schema.org/MobileWebPlatform",
            ],
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "HomeRehab",
        inLanguage: "ka-GE",
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS_KA.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // The payload is a static object built at module scope; no user input reaches it.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

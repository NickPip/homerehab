import { PHONE_E164, SITE_URL } from "../lib/site";

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
      "სახსრების, ხერხემლისა და კუნთ-ჩონჩხის სისტემის დაავადებების რეაბილიტაცია სახლის პირობებში: ტკივილის შემცირება და მოძრაობის სრული მოცულობის აღდგენა.",
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
      "სუნთქვითი ვარჯიშები და ფილტვების ფუნქციის აღდგენა ხანგრძლივი დაავადების, ოპერაციის ან ინფექციის შემდეგ.",
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
    worksFor: "Georgian Foot and Ankle Institute",
    alumniOf: "თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
    image: `${SITE_URL}/doctor.jpeg`,
  },
  {
    name: "გიორგი პაიჭაძე",
    jobTitle: "რეაბილიტოლოგი და ფიზიკური თერაპევტი",
    worksFor: "შპს მედკაპიტალი",
    alumniOf: "თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
    image: `${SITE_URL}/doctor2.jpeg`,
  },
];

export const FAQ_ITEMS = [
  {
    question: "რა არის რეაბილიტაცია სახლში და ვისთვის არის განკუთვნილი?",
    answer:
      "რეაბილიტაცია სახლში ნიშნავს, რომ ლიცენზირებული ფიზიოთერაპევტი თავად ჩამოდის თქვენთან და სარეაბილიტაციო კურსს თქვენსავე საცხოვრებელში ატარებს. ის განკუთვნილია ოპერაციის, მოტეხილობის ან ინსულტის შემდგომი პაციენტებისთვის, ხერხემლისა და სახსრების ქრონიკული ტკივილის მქონე ადამიანებისთვის და ყველასთვის, ვისაც კლინიკამდე მისვლა უჭირს.",
  },
  {
    question: "მოდის თუ არა ფიზიოთერაპევტი სახლში თბილისში?",
    answer:
      "დიახ. ჩვენი ფიზიოთერაპევტები მუშაობენ თბილისის ყველა რაიონში — ვაკე, საბურთალო, მთაწმინდა, ისანი, სამგორი, გლდანი, ნაძალადევი, დიდუბე, ჩუღურეთი და კრწანისი — ასევე მიმდებარე დასახლებებში. ვიზიტს თქვენთვის მოსახერხებელ დროზე ვნიშნავთ.",
  },
  {
    question: "რამდენ ხანს გრძელდება სარეაბილიტაციო კურსი?",
    answer:
      "კურსის ხანგრძლივობა დიაგნოზზეა დამოკიდებული. მსუბუქი ორთოპედიული პრობლემა ხშირად 6-10 სეანსში წყდება, პოსტოპერაციული ან ნევროლოგიური აღდგენა კი 1-3 თვეს მოითხოვს. ზუსტ გეგმას პირველი შეფასების შემდეგ გეტყვით.",
  },
  {
    question: "რამდენ ხანს გრძელდება ერთი სეანსი?",
    answer:
      "ერთი სეანსი ჩვეულებრივ 45-60 წუთია და მოიცავს შეფასებას, სამკურნალო ვარჯიშებს, მანუალურ თერაპიას და სახლში დამოუკიდებლად შესასრულებელი ვარჯიშების სწავლებას.",
  },
  {
    question: "საჭიროა თუ არა ექიმის დანიშნულება ან სპეციალური აღჭურვილობა?",
    answer:
      "ექიმის დანიშნულება სასურველია, მაგრამ სავალდებულო არ არის — პირველ ვიზიტზე ფიზიოთერაპევტი თავად აფასებს მდგომარეობას. აღჭურვილობას სპეციალისტი თან მოიტანს; თქვენ მხოლოდ თავისუფალი სივრცე დაგჭირდებათ.",
  },
  {
    question: "როგორ დავჯავშნო პირველი ვიზიტი?",
    answer:
      "დაგვირეკეთ ნომერზე +995 591 31 42 22. უფასო კონსულტაციაზე მოგისმენთ, შევარჩევთ შესაფერის მიმართულებას და შევათანხმებთ ვიზიტის დროსა და ღირებულებას წინასწარ, დაფარული ხარჯების გარეშე.",
  },
];

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "PhysicalTherapy"],
        "@id": `${SITE_URL}/#business`,
        name: "HomeRehab — რეაბილიტაცია და ფიზიოთერაპია სახლში",
        alternateName: "HomeRehab",
        description:
          "ლიცენზირებული ფიზიოთერაპევტების გუნდი, რომელიც სარეაბილიტაციო კურსს პაციენტის სახლში ატარებს თბილისსა და მიმდებარე რაიონებში.",
        url: SITE_URL,
        telephone: PHONE_E164,
        image: `${SITE_URL}/cover.jpg`,
        logo: `${SITE_URL}/logo.png`,
        priceRange: "₾₾",
        currenciesAccepted: "GEL",
        medicalSpecialty: "PhysicalTherapy",
        address: {
          "@type": "PostalAddress",
          addressLocality: "თბილისი",
          addressRegion: "თბილისი",
          addressCountry: "GE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.7151,
          longitude: 44.8271,
        },
        areaServed: [
          {
            "@type": "City",
            name: "თბილისი",
            sameAs: "https://www.wikidata.org/wiki/Q994",
          },
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
          worksFor: { "@type": "Organization", name: t.worksFor },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: t.alumniOf,
          },
        })),
        knowsLanguage: ["ka", "en"],
        potentialAction: {
          "@type": "ReserveAction",
          target: `tel:${PHONE_E164}`,
          name: "უფასო კონსულტაციის დაჯავშნა",
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
        mainEntity: FAQ_ITEMS.map((item) => ({
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

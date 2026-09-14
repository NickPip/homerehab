"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Translations {
  nav: {
    home: string;
    services: string;
    whyUs: string;
    specialist: string;
    contact: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    callButton: string;
    or: string;
    cta: string;
    trustBadge: string;
    clients: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    learnMore: string;
    orthopedic: {
      title: string;
      description: string;
    };
    postSurgery: {
      title: string;
      description: string;
    };
    neurological: {
      title: string;
      description: string;
    };
    manualTherapy: {
      title: string;
      description: string;
    };
    respiratory: {
      title: string;
      description: string;
    };
    seniors: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  specialist: {
    badge: string;
    title: string;
    subtitle: string;
    licensed: string;
    experienceLabel: string;
    patientsLabel: string;
    educationLabel: string;
    specializationsLabel: string;
    previous: string;
    next: string;
    doctor: string;
    imagePlaceholder: string;
    doctors: Array<{
      name: string;
      credentials: string;
      currentRole: string;
      description: string;
      experience: string;
      patients: string;
      education: string[];
    }>;
    specializations: string[];
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    comfort: {
      title: string;
      description: string;
    };
    professionalism: {
      title: string;
      description: string;
    };
    individualApproach: {
      title: string;
      description: string;
    };
    timeSaving: {
      title: string;
      description: string;
    };
    familyEnvironment: {
      title: string;
      description: string;
    };
    transparency: {
      title: string;
      description: string;
    };
    stats: {
      patients: {
        number: string;
        label: string;
      };
      experience: {
        number: string;
        label: string;
      };
      success: {
        number: string;
        label: string;
      };
      satisfaction: {
        number: string;
        label: string;
      };
    };
  };
  [key: string]: any;
}

const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      whyUs: "Why Us",
      specialist: "Specialist",
      contact: "Contact",
    },
    hero: {
      badge: "Certified & Licensed",
      title1: "Professional",
      title2: "Rehabilitation",
      title3: "At Home",
      description:
        "Regain your freedom of movement without visiting the clinic. Our licensed physiotherapists will serve you in a comfortable environment.",
      callButton: "Call",
      or: "or",
      cta: "Get a Free Consultation",
      trustBadge: "Certified professionals with 10+ years of experience",
      clients: "500+ satisfied clients",
    },
    services: {
      badge: "What We Offer",
      title: "Our Services",
      subtitle:
        "A full rehabilitation course at home, tailored to your diagnosis and needs",
      learnMore: "Learn More",
      orthopedic: {
        title: "Orthopedic Rehabilitation",
        description:
          "Rehabilitation for joint, spine, and musculoskeletal conditions: reducing pain and restoring your full range of motion.",
      },
      postSurgery: {
        title: "Post-Surgery & Injury Recovery",
        description:
          "Safe, step-by-step recovery of function after surgery, fractures, or sports injuries, following an individual treatment plan.",
      },
      neurological: {
        title: "Neurological Rehabilitation",
        description:
          "Restoring movement, balance, and independence after a stroke, neurological conditions, or nervous system injury.",
      },
      manualTherapy: {
        title: "Manual Therapy",
        description:
          "Hands-on techniques to relieve muscle tension, improve joint mobility, and reduce pain.",
      },
      respiratory: {
        title: "Respiratory Rehabilitation",
        description:
          "Breathing exercises and lung function recovery after prolonged illness, surgery, or infection.",
      },
      seniors: {
        title: "Rehabilitation for Seniors",
        description:
          "Maintaining balance, strength, and daily activity in older adults, reducing the risk of falls and supporting independent living at home.",
      },
      cta: {
        title: "Not Sure Which Program You Need?",
        description: "Call us for a free consultation and we will choose the right course together",
        button: "Call Now",
      },
    },
    specialist: {
      badge: "Our Specialists",
      title: "Licensed Professionals",
      subtitle:
        "Our team is staffed with licensed physical therapists and rehabilitation specialists. Receive the highest quality care without leaving home.",
      licensed: "Licensed Specialist",
      experienceLabel: "Experience",
      patientsLabel: "Patients",
      educationLabel: "Education",
      specializationsLabel: "Specializations",
      previous: "Previous",
      next: "Next",
      doctor: "Specialist",
      imagePlaceholder: "Specialist Photo",
      doctors: [
        {
          name: "Nikoloz Todua",
          credentials: "Physical Therapist and Rehabilitation Specialist",
          currentRole: "Physical Therapist at Georgian Foot and Ankle Institute",
          description:
            "Specialist with 6+ years of clinical experience, providing evidence-based, patient-centered care with individualized treatment plans. Specialized in orthopedic, traumatological, and neurological rehabilitation.",
          experience: "6+ Years",
          patients: "500+",
          education: [
            "Master's Degree in Physical Medicine and Rehabilitation – Tbilisi State Medical University",
            "Advanced Professional Development Certificate – Pavlov First State Medical University, Saint Petersburg",
          ],
        },
        {
          name: "Giorgi Paichadze",
          credentials: "Rehabilitation Specialist and Physical Therapist",
          currentRole: "Rehabilitation Specialist at MedCapital LLC",
          description:
            "Specialist with 4+ years of clinical experience, working across multiple rehabilitation centers including veterans' clinics and pediatric rehabilitation. Provides comprehensive rehabilitation services with a focus on evidence-based treatment methods.",
          experience: "4+ Years",
          patients: "400+",
          education: [
            "Bachelor's Degree in Physical Medicine and Rehabilitation – Tbilisi State Medical University",
            "Advanced Professional Development Certificate – Pavlov First State Medical University, Saint Petersburg",
          ],
        },
      ],
      specializations: [
        "Orthopedic Rehabilitation",
        "Trauma Rehabilitation",
        "Neurological Rehabilitation",
        "Foot and Ankle Rehabilitation",
        "Manual Therapy",
        "Musculoskeletal Disorders",
        "Respiratory Rehabilitation",
      ],
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "Why HomeRehab?",
      subtitle:
        "We combine evidence-based medicine and individual care to ensure your complete rehabilitation in a calm and comfortable environment.",
      comfort: {
        title: "Comfort",
        description:
          "Complete rehabilitation course in your home, without visiting the clinic.",
      },
      professionalism: {
        title: "Professionalism",
        description:
          "The team is staffed only with licensed and experienced rehabilitation specialists.",
      },
      individualApproach: {
        title: "Individual Approach",
        description:
          "Treatment plan is created specifically according to your needs and doctor's prescription.",
      },
      timeSaving: {
        title: "Time Saving",
        description:
          "Forget about traffic jams and queues. The specialist comes at a convenient time for you.",
      },
      familyEnvironment: {
        title: "Family Environment",
        description:
          "Stress-free treatment accelerates the recovery process.",
      },
      transparency: {
        title: "Transparency",
        description:
          "Pre-agreed plan and budget, without hidden costs.",
      },
      stats: {
        patients: {
          number: "500+",
          label: "Patients",
        },
        experience: {
          number: "10+",
          label: "Years Experience",
        },
        success: {
          number: "94%",
          label: "Recovery Rate",
        },
        satisfaction: {
          number: "94%",
          label: "Patient Satisfaction",
        },
      },
    },
    footer: {
      tagline:
        "Professional home-based physical rehabilitation services. Your recovery, our commitment.",
      quickLinks: {
        title: "Quick Links",
      },
      contact: {
        title: "Contact Information",
        phoneLabel: "Phone",
        locationLabel: "Location",
        hoursLabel: "Working Hours",
        hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      },
      serviceAreaTitle: "Service Area",
      serviceArea: "Tbilisi and surrounding areas",
      serviceAreaDescription:
        "We provide professional rehabilitation services throughout Tbilisi and nearby regions.",
      copyright: "© 2026 HomeRehab. All rights reserved.",
      madeBy: "Developed by",
      atomicImpact: "atomicimpact.tech",
    },
  },
  ka: {
    nav: {
      home: "მთავარი",
      services: "სერვისები",
      whyUs: "რატომ ჩვენ",
      specialist: "სპეციალისტი",
      contact: "კონტაქტი",
    },
    hero: {
      badge: "სერტიფიცირებული და ლიცენზირებული",
      title1: "პროფესიონალური",
      title2: "რეაბილიტაცია",
      title3: "სახლში",
      description:
        "დაიბრუნეთ მოძრაობის თავისუფლება კლინიკაში ვიზიტის გარეშე. ჩვენი ლიცენზირებული ფიზიოთერაპევტები მოგემსახურებიან თქვენთვის კომფორტულ გარემოში.",
      callButton: "დარეკეთ",
      or: "ან",
      cta: "მიიღეთ უფასო კონსულტაცია",
      trustBadge: "სერტიფიცირებული პროფესიონალები 10+ წლის გამოცდილებით",
      clients: "500+ კმაყოფილი პაციენტი",
    },
    services: {
      badge: "რას გთავაზობთ",
      title: "ჩვენი სერვისები",
      subtitle:
        "სრული სარეაბილიტაციო კურსი სახლში, თქვენი დიაგნოზისა და საჭიროებების მიხედვით",
      learnMore: "გაიგეთ მეტი",
      orthopedic: {
        title: "ორთოპედიული რეაბილიტაცია",
        description:
          "სახსრების, ხერხემლისა და კუნთ-ჩონჩხის სისტემის დაავადებების რეაბილიტაცია: ტკივილის შემცირება და მოძრაობის სრული მოცულობის აღდგენა.",
      },
      postSurgery: {
        title: "პოსტოპერაციული და ტრავმის შემდგომი აღდგენა",
        description:
          "ოპერაციის, მოტეხილობის ან სპორტული ტრავმის შემდეგ ფუნქციის უსაფრთხო და ეტაპობრივი აღდგენა ინდივიდუალური მკურნალობის გეგმით.",
      },
      neurological: {
        title: "ნევროლოგიური რეაბილიტაცია",
        description:
          "მოძრაობის, წონასწორობისა და დამოუკიდებლობის აღდგენა ინსულტის, ნევროლოგიური დაავადებების ან ნერვული სისტემის დაზიანების შემდეგ.",
      },
      manualTherapy: {
        title: "მანუალური თერაპია",
        description:
          "ხელით ზემოქმედების მეთოდები კუნთების დაძაბულობის მოსახსნელად, სახსრების მობილობის გასაუმჯობესებლად და ტკივილის შესამცირებლად.",
      },
      respiratory: {
        title: "სუნთქვითი რეაბილიტაცია",
        description:
          "სუნთქვითი ვარჯიშები და ფილტვების ფუნქციის აღდგენა ხანგრძლივი დაავადების, ოპერაციის ან ინფექციის შემდეგ.",
      },
      seniors: {
        title: "ხანდაზმულთა რეაბილიტაცია",
        description:
          "წონასწორობის, ძალისა და ყოველდღიური აქტივობის შენარჩუნება ხანდაზმულებში, დაცემის რისკის შემცირება და დამოუკიდებელი ცხოვრება სახლში.",
      },
      cta: {
        title: "არ იცით, რომელი მიმართულება გჭირდებათ?",
        description: "დაგვირეკეთ უფასო კონსულტაციისთვის და შესაფერის კურსს ერთად შევარჩევთ",
        button: "დარეკეთ",
      },
    },
    specialist: {
      badge: "ჩვენი სპეციალისტები",
      title: "ლიცენზირებული პროფესიონალები",
      subtitle:
        "ჩვენი გუნდი დაკომპლექტებულია ლიცენზირებული ფიზიკური თერაპევტებითა და რეაბილიტოლოგებით. მიიღეთ უმაღლესი ხარისხის სამედიცინო სერვისი სახლიდან გაუსვლელად.",
      licensed: "ლიცენზირებული სპეციალისტი",
      experienceLabel: "გამოცდილება",
      patientsLabel: "პაციენტები",
      educationLabel: "განათლება",
      specializationsLabel: "სპეციალიზაციები",
      previous: "წინა",
      next: "შემდეგი",
      doctor: "სპეციალისტი",
      imagePlaceholder: "სპეციალისტის ფოტო",
      doctors: [
        {
          name: "ნიკოლოზ თოდუა",
          credentials: "ფიზიკური თერაპევტი და რეაბილიტაციის სპეციალისტი",
          currentRole: "ფიზიკური თერაპევტი Georgian Foot and Ankle Institute-ში",
          description:
            "სპეციალისტი 6+ წლიანი კლინიკური გამოცდილებით, რომელიც მტკიცებულებებზე დაფუძნებულ, პაციენტზე ორიენტირებულ მკურნალობას სთავაზობს ინდივიდუალური გეგმით. მიმართულებები: ორთოპედიული, ტრავმატოლოგიური და ნევროლოგიური რეაბილიტაცია.",
          experience: "6+ წლიანი",
          patients: "500+",
          education: [
            "მაგისტრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "პროფესიული განვითარების მოწინავე სერტიფიკატი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
          ],
        },
        {
          name: "გიორგი პაიჭაძე",
          credentials: "რეაბილიტოლოგი და ფიზიკური თერაპევტი",
          currentRole: "რეაბილიტოლოგი შპს მედკაპიტალში",
          description:
            "სპეციალისტი 4+ წლიანი კლინიკური გამოცდილებით, რომელსაც ნამუშევარი აქვს რამდენიმე სარეაბილიტაციო ცენტრში, მათ შორის ვეტერანთა კლინიკასა და პედიატრიულ რეაბილიტაციაში. სთავაზობს სრულ სარეაბილიტაციო მომსახურებას მტკიცებულებებზე დაფუძნებული მეთოდებით.",
          experience: "4+ წლიანი",
          patients: "400+",
          education: [
            "ბაკალავრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "პროფესიული განვითარების მოწინავე სერტიფიკატი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
          ],
        },
      ],
      specializations: [
        "ორთოპედიული რეაბილიტაცია",
        "ტრავმის რეაბილიტაცია",
        "ნევროლოგიური რეაბილიტაცია",
        "ტერფისა და კოჭის რეაბილიტაცია",
        "მანუალური თერაპია",
        "კუნთ-ჩონჩხის დარღვევები",
        "სუნთქვითი რეაბილიტაცია",
      ],
    },
    whyUs: {
      badge: "რატომ ჩვენ",
      title: "რატომ HomeRehab?",
      subtitle:
        "ჩვენ ვაერთიანებთ მტკიცებით მედიცინასა და ინდივიდუალურ ზრუნვას, რათა უზრუნველვყოთ თქვენი სრული რეაბილიტაცია მშვიდ და კომფორტულ გარემოში.",
      comfort: {
        title: "კომფორტი",
        description:
          "სრული სარეაბილიტაციო კურსი თქვენს სახლში, კლინიკაში ვიზიტის გარეშე.",
      },
      professionalism: {
        title: "პროფესიონალიზმი",
        description:
          "გუნდი დაკომპლექტებულია მხოლოდ ლიცენზირებული და გამოცდილი რეაბილიტოლოგებით.",
      },
      individualApproach: {
        title: "ინდივიდუალური მიდგომა",
        description:
          "მკურნალობის გეგმა დგება კონკრეტულად თქვენი საჭიროებებისა და ექიმის დანიშნულების მიხედვით.",
      },
      timeSaving: {
        title: "დროის დაზოგვა",
        description:
          "დაივიწყეთ საცობები და რიგები. სპეციალისტი მოდის თქვენთვის მოსახერხებელ დროს.",
      },
      familyEnvironment: {
        title: "ოჯახური გარემო",
        description:
          "სტრესის გარეშე მკურნალობა აჩქარებს გამოჯანმრთელების პროცესს.",
      },
      transparency: {
        title: "გამჭვირვალობა",
        description:
          "წინასწარ გაწერილი გეგმა და ბიუჯეტი, დაფარული ხარჯების გარეშე.",
      },
      stats: {
        patients: {
          number: "500+",
          label: "პაციენტი",
        },
        experience: {
          number: "10+",
          label: "წლის გამოცდილება",
        },
        success: {
          number: "94%",
          label: "გამოჯანმრთელების მაჩვენებელი",
        },
        satisfaction: {
          number: "94%",
          label: "პაციენტების კმაყოფილება",
        },
      },
    },
    footer: {
      tagline:
        "პროფესიონალური სახლში ფიზიკური რეაბილიტაციის სერვისები. თქვენი გამოჯანმრთელება, ჩვენი ვალდებულება.",
      quickLinks: {
        title: "სწრაფი ბმულები",
      },
      contact: {
        title: "კონტაქტის ინფორმაცია",
        phoneLabel: "ტელეფონი",
        locationLabel: "მდებარეობა",
        hoursLabel: "სამუშაო საათები",
        hours: "ორშ - შაბ: 09:00 - 19:00",
      },
      serviceAreaTitle: "სერვისის არეალი",
      serviceArea: "თბილისი და მიმდებარე რაიონები",
      serviceAreaDescription:
        "ჩვენ ვაწვდით პროფესიონალურ რეაბილიტაციის სერვისებს თბილისში და მიმდებარე რეგიონებში.",
      copyright: "© 2026 HomeRehab. ყველა უფლება დაცულია.",
      madeBy: "ტექნიკური უზრუნველყოფა:",
      atomicImpact: "atomicimpact.tech",
    },
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("ka");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ka")) {
      setLanguage(savedLanguage);
    } else {
      // Always default to Georgian
      setLanguage("ka");
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    if (mounted) {
      localStorage.setItem("language", lang);
    }
  };

  function t(key: string): string {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "string" ? value : key;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

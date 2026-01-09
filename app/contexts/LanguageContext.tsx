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
    homeRehab: {
      title: string;
      description: string;
    };
    repair: {
      title: string;
      description: string;
    };
    renovation: {
      title: string;
      description: string;
    };
    construction: {
      title: string;
      description: string;
    };
    safety: {
      title: string;
      description: string;
    };
    care: {
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
    evidenceBased: {
      title: string;
      description: string;
    };
    personalized: {
      title: string;
      description: string;
    };
    homeBased: {
      title: string;
      description: string;
    };
    progressTracking: {
      title: string;
      description: string;
    };
    licensed: {
      title: string;
      description: string;
    };
    familySupport: {
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
        "Professional home rehabilitation services delivered by experienced specialists. Transform your living space with expert care and attention to detail.",
      callButton: "Call Now",
      or: "or",
      cta: "Get a Free Consultation",
      trustBadge: "Certified professionals with 10+ years of experience",
      clients: "500+ satisfied clients",
    },
    services: {
      badge: "What We Offer",
      title: "Our Services",
      subtitle:
        "Comprehensive home rehabilitation solutions tailored to your needs",
      learnMore: "Learn More",
      homeRehab: {
        title: "Home Rehabilitation",
        description:
          "Complete home rehabilitation services to restore your living space to its best condition with professional care.",
      },
      repair: {
        title: "Repair & Maintenance",
        description:
          "Expert repair services for all home systems including plumbing, electrical, and structural repairs.",
      },
      renovation: {
        title: "Renovation Services",
        description:
          "Transform your home with our professional renovation services, from design to completion.",
      },
      construction: {
        title: "Construction Work",
        description:
          "Quality construction services for additions, modifications, and new builds with certified professionals.",
      },
      safety: {
        title: "Safety Improvements",
        description:
          "Enhance your home's safety with modern security systems, accessibility features, and safety upgrades.",
      },
      care: {
        title: "Specialized Care",
        description:
          "Dedicated care services for elderly and special needs, ensuring comfort and accessibility at home.",
      },
      cta: {
        title: "Need Custom Services?",
        description: "Contact us to discuss your specific requirements",
        button: "Call Now",
      },
    },
    specialist: {
      badge: "Our Specialists",
      title: "Experienced Rehabilitation Professionals",
      subtitle:
        "Licensed specialists with international experience, providing professional services in your home",
      licensed: "Licensed Specialist",
      experienceLabel: "Experience",
      patientsLabel: "Patients",
      educationLabel: "Education",
      specializationsLabel: "Specializations",
      previous: "Previous",
      next: "Next",
      doctor: "Doctor",
      imagePlaceholder: "Doctor Photo",
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
      title: "Why Choose Our Physical Rehabilitation Services",
      subtitle:
        "We combine evidence-based treatment methods with personalized care to help you recover in the comfort of your own home",
      evidenceBased: {
        title: "Evidence-Based Treatment",
        description:
          "Our rehabilitation programs are based on the latest research and proven therapeutic techniques for optimal recovery outcomes.",
      },
      personalized: {
        title: "Personalized Care Plans",
        description:
          "Each treatment plan is tailored to your specific condition, goals, and lifestyle for the most effective rehabilitation journey.",
      },
      homeBased: {
        title: "Convenient Home-Based Care",
        description:
          "Receive professional rehabilitation services in the comfort of your home, eliminating travel stress and promoting faster recovery.",
      },
      progressTracking: {
        title: "Continuous Progress Monitoring",
        description:
          "We track your progress with regular assessments and adjust treatment plans to ensure you're meeting your recovery milestones.",
      },
      licensed: {
        title: "Licensed & Certified Specialists",
        description:
          "All our therapists are fully licensed, certified, and continuously trained in the latest physical rehabilitation techniques.",
      },
      familySupport: {
        title: "Family Involvement & Support",
        description:
          "We involve family members in the rehabilitation process, providing education and support for better long-term outcomes.",
      },
      stats: {
        patients: {
          number: "500+",
          label: "Patients Treated",
        },
        experience: {
          number: "10+",
          label: "Years Experience",
        },
        success: {
          number: "95%",
          label: "Recovery Rate",
        },
        satisfaction: {
          number: "98%",
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
        locationLabel: "Service Area",
        hoursLabel: "Working Hours",
        hours: "Mon - Sat: 9:00 AM - 7:00 PM",
      },
      serviceAreaTitle: "Service Area",
      serviceArea: "Tbilisi and surrounding areas",
      serviceAreaDescription:
        "We provide professional rehabilitation services throughout Tbilisi and nearby regions.",
      emergency: "Emergency",
      copyright: "© 2024 HomeRehab. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
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
        "პროფესიონალური სახლის რეაბილიტაციის სერვისები გამოცდილი სპეციალისტების მიერ. გარდაქმენით თქვენს საცხოვრებელ სივრცეს ექსპერტული მოვლითა და დეტალებზე ყურადღებით.",
      callButton: "დარეკეთ",
      or: "ან",
      cta: "მიიღეთ უფასო კონსულტაცია",
      trustBadge: "სერტიფიცირებული პროფესიონალები 10+ წლის გამოცდილებით",
      clients: "500+ კმაყოფილი კლიენტი",
    },
    services: {
      badge: "რას გთავაზობთ",
      title: "ჩვენი სერვისები",
      subtitle:
        "სრულყოფილი სახლის რეაბილიტაციის გადაწყვეტილებები თქვენი საჭიროებების მიხედვით",
      learnMore: "გაიგეთ მეტი",
      homeRehab: {
        title: "სახლის რეაბილიტაცია",
        description:
          "სრულყოფილი სახლის რეაბილიტაციის სერვისები თქვენი საცხოვრებელი სივრცის საუკეთესო მდგომარეობაში აღსადგენად პროფესიონალური მოვლით.",
      },
      repair: {
        title: "შეკეთება და მოვლა",
        description:
          "ექსპერტული შეკეთების სერვისები ყველა სახლის სისტემისთვის, მათ შორის სანტექნიკა, ელექტრო და სტრუქტურული შეკეთებები.",
      },
      renovation: {
        title: "რენოვაციის სერვისები",
        description:
          "გარდაქმენით თქვენი სახლი ჩვენი პროფესიონალური რენოვაციის სერვისებით, დიზაინიდან დასრულებამდე.",
      },
      construction: {
        title: "სამშენებლო სამუშაოები",
        description:
          "ხარისხიანი სამშენებლო სერვისები დამატებების, მოდიფიკაციებისა და ახალი ნაგებობებისთვის სერტიფიცირებული პროფესიონალებით.",
      },
      safety: {
        title: "უსაფრთხოების გაუმჯობესება",
        description:
          "გააუმჯობესეთ თქვენი სახლის უსაფრთხოება თანამედროვე უსაფრთხოების სისტემებით, ხელმისაწვდომობის ფუნქციებითა და უსაფრთხოების გაუმჯობესებებით.",
      },
      care: {
        title: "სპეციალიზებული მოვლა",
        description:
          "დედიკატური მოვლის სერვისები მოხუცებისა და სპეციალური საჭიროებების მქონე პირებისთვის, უზრუნველყოფს კომფორტსა და ხელმისაწვდომობას სახლში.",
      },
      cta: {
        title: "სჭირდებათ ინდივიდუალური სერვისები?",
        description: "დაგვიკავშირდით თქვენი კონკრეტული მოთხოვნების განსახილველად",
        button: "დარეკეთ",
      },
    },
    specialist: {
      badge: "ჩვენი სპეციალისტები",
      title: "გამოცდილი რეაბილიტაციის პროფესიონალები",
      subtitle:
        "ლიცენზირებული სპეციალისტები საერთაშორისო გამოცდილებით, რომლებიც უზრუნველყოფენ პროფესიონალურ მომსახურებას თქვენს სახლში",
      licensed: "ლიცენზირებული სპეციალისტი",
      experienceLabel: "გამოცდილება",
      patientsLabel: "პაციენტები",
      educationLabel: "განათლება",
      specializationsLabel: "სპეციალიზაციები",
      previous: "წინა",
      next: "შემდეგი",
      doctor: "ექიმი",
      imagePlaceholder: "ექიმის ფოტო",
      doctors: [
        {
          name: "ნიკოლოზ თოდუა",
          credentials: "ფიზიკური თერაპევტი და რეაბილიტაციის სპეციალისტი",
          currentRole: "ფიზიკური თერაპევტი Georgian Foot and Ankle Institute-ში",
          description:
            "6+ წლიანი კლინიკური გამოცდილების მქონე სპეციალისტი, რომელიც უზრუნველყოფს მტკიცებულებაზე დაფუძნებულ, პაციენტზე ორიენტირებულ მოვლას ინდივიდუალური მკურნალობის გეგმებით. სპეციალიზებულია ორთოპედიულ, ტრავმატოლოგიურ და ნევროლოგიურ რეაბილიტაციაში.",
          experience: "6+ წლიანი",
          patients: "500+",
          education: [
            "მაგისტრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "პროფესიული განვითარების მოწინავე სერტიფიკატი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
          ],
        },
        {
          name: "ნიკოლოზ თოდუა",
          credentials: "ფიზიკური თერაპევტი და რეაბილიტაციის სპეციალისტი",
          currentRole: "ფიზიკური თერაპევტი Georgian Foot and Ankle Institute-ში",
          description:
            "6+ წლიანი კლინიკური გამოცდილების მქონე სპეციალისტი, რომელიც უზრუნველყოფს მტკიცებულებაზე დაფუძნებულ, პაციენტზე ორიენტირებულ მოვლას ინდივიდუალური მკურნალობის გეგმებით. სპეციალიზებულია ორთოპედიულ, ტრავმატოლოგიურ და ნევროლოგიურ რეაბილიტაციაში.",
          experience: "6+ წლიანი",
          patients: "500+",
          education: [
            "მაგისტრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "პროფესიული განვითარების მოწინავე სერტიფიკატი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
          ],
        },
        {
          name: "ნიკოლოზ თოდუა",
          credentials: "ფიზიკური თერაპევტი და რეაბილიტაციის სპეციალისტი",
          currentRole: "ფიზიკური თერაპევტი Georgian Foot and Ankle Institute-ში",
          description:
            "6+ წლიანი კლინიკური გამოცდილების მქონე სპეციალისტი, რომელიც უზრუნველყოფს მტკიცებულებაზე დაფუძნებულ, პაციენტზე ორიენტირებულ მოვლას ინდივიდუალური მკურნალობის გეგმებით. სპეციალიზებულია ორთოპედიულ, ტრავმატოლოგიურ და ნევროლოგიურ რეაბილიტაციაში.",
          experience: "6+ წლიანი",
          patients: "500+",
          education: [
            "მაგისტრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "პროფესიული განვითარების მოწინავე სერტიფიკატი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
          ],
        },
      ],
      specializations: [
        "ორთოპედიული რეაბილიტაცია",
        "ტრავმის რეაბილიტაცია",
        "ნევროლოგიური რეაბილიტაცია",
        "ტერფისა და მუხლის რეაბილიტაცია",
        "მანუალური თერაპია",
        "კუნთ-ჩონჩხის დარღვევები",
        "სუნთქვითი რეაბილიტაცია",
      ],
    },
    whyUs: {
      badge: "რატომ ჩვენ",
      title: "რატომ აირჩიოთ ჩვენი ფიზიკური რეაბილიტაციის სერვისები",
      subtitle:
        "ჩვენ ვაერთიანებთ მტკიცებულებაზე დაფუძნებულ მკურნალობის მეთოდებს პერსონალიზებულ მოვლასთან, რათა დაგეხმაროთ გამოჯანმრთელებაში თქვენი სახლის კომფორტში",
      evidenceBased: {
        title: "მტკიცებულებაზე დაფუძნებული მკურნალობა",
        description:
          "ჩვენი რეაბილიტაციის პროგრამები ეფუძნება უახლეს კვლევებსა და დადასტურებულ თერაპევტიკულ ტექნიკებს ოპტიმალური გამოჯანმრთელების შედეგებისთვის.",
      },
      personalized: {
        title: "ინდივიდუალური მოვლის გეგმები",
        description:
          "თითოეული მკურნალობის გეგმა არის მორგებული თქვენი კონკრეტული მდგომარეობის, მიზნებისა და ცხოვრების წესის მიხედვით ყველაზე ეფექტური რეაბილიტაციის გზისთვის.",
      },
      homeBased: {
        title: "მოსახერხებელი სახლში მოვლა",
        description:
          "მიიღეთ პროფესიონალური რეაბილიტაციის სერვისები თქვენი სახლის კომფორტში, აღმოფხვრით მგზავრობის სტრესს და ხელს უწყობთ უფრო სწრაფ გამოჯანმრთელებას.",
      },
      progressTracking: {
        title: "უწყვეტი პროგრესის მონიტორინგი",
        description:
          "ჩვენ ვადევნებთ თვალყურს თქვენს პროგრესს რეგულარული შეფასებებით და ვარეგულირებთ მკურნალობის გეგმებს, რათა დავრწმუნდეთ, რომ თქვენ აღწევთ გამოჯანმრთელების ეტაპებს.",
      },
      licensed: {
        title: "ლიცენზირებული და სერტიფიცირებული სპეციალისტები",
        description:
          "ჩვენი ყველა თერაპევტი სრულად არის ლიცენზირებული, სერტიფიცირებული და მუდმივად ვარჯიშობს უახლეს ფიზიკური რეაბილიტაციის ტექნიკებში.",
      },
      familySupport: {
        title: "ოჯახის ჩართულობა და მხარდაჭერა",
        description:
          "ჩვენ ვჩართავთ ოჯახის წევრებს რეაბილიტაციის პროცესში, უზრუნველვყოფთ განათლებასა და მხარდაჭერას უკეთესი გრძელვადიანი შედეგებისთვის.",
      },
      stats: {
        patients: {
          number: "100+",
          label: "პაციენტი",
        },
        experience: {
          number: "10+",
          label: "წლის გამოცდილება",
        },
        success: {
          number: "100%",
          label: "გამოჯანმრთელების მაჩვენებელი",
        },
        satisfaction: {
          number: "100%",
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
        locationLabel: "სერვისის არეალი",
        hoursLabel: "სამუშაო საათები",
        hours: "ორშ - შაბ: 09:00 - 19:00",
      },
      serviceAreaTitle: "სერვისის არეალი",
      serviceArea: "თბილისი და მიმდებარე რაიონები",
      serviceAreaDescription:
        "ჩვენ ვაწვდით პროფესიონალურ რეაბილიტაციის სერვისებს თბილისში და მიმდებარე რეგიონებში.",
      emergency: "სასწრაფო",
      copyright: "© 2024 HomeRehab. ყველა უფლება დაცულია.",
      privacy: "კონფიდენციალურობის პოლიტიკა",
      terms: "მომსახურების პირობები",
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
      // Default to Georgian, but detect browser language as fallback
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") {
        setLanguage("en");
      } else {
        // Default to Georgian
        setLanguage("ka");
      }
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
    return value || key;
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

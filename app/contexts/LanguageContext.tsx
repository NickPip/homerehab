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
      title: "Licensed Professionals",
      subtitle:
        "Our team is staffed with licensed doctors with international practice. Receive the highest quality medical service without leaving home.",
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
          number: "400+",
          label: "Patients",
        },
        experience: {
          number: "10+",
          label: "Years Experience",
        },
        success: {
          number: "100%",
          label: "Recovery Rate",
        },
        satisfaction: {
          number: "100%",
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
        "დაიბრუნეთ მოძრაობის თავისუფლება კლინიკაში ვიზიტის გარეშე. ჩვენი ლიცენზირებული ფიზიოთერაპევტები მოგემსახურებიან თქვენთვის კომფორტულ გარემოში",
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
      title: "ლიცენზირებული პროფესიონალები",
      subtitle:
        "ჩვენი გუნდი დაკომპლექტებულია საერთაშორისო პრაქტიკის მქონე ლიცენზირებული ექიმებით. მიიღეთ უმაღლესი ხარისხის სამედიცინო სერვისი სახლიდან გაუსვლელად.",
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
            "გამოცდილი სპეციალისტი, რომელიც ზრუნავს თქვენს ჯანმრთელობაზე 6-წლიანი კლინიკური პრაქტიკით. მკურნალობის პროცესი მოიცავს ინდივიდუალურ მიდგომას და თანამედროვე მეთოდებს.მიმართულებები:ორთოპედიული, ტრავმატოლოგიური და ნევროლოგიური პათოლოგიების რეაბილიტაცია",
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
            "გამოცდილი სპეციალისტი, რომელიც ზრუნავს თქვენს ჯანმრთელობაზე 4-წლიანი კლინიკური პრაქტიკით. მკურნალობის პროცესი მოიცავს ინდივიდუალურ მიდგომას და თანამედროვე მეთოდებს.მიმართულებები:ორთოპედიული, ტრავმატოლოგიური და ნევროლოგიური პათოლოგიების რეაბილიტაცია",
          experience: "4+ წლიანი",
          patients: "400+",
          education: [
            "ბაკალავრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "კვალიფიკაციის ასამაღლებელი კურსი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
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
          number: "400+",
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

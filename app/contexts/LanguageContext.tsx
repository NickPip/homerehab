"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Translations {
  nav: {
    home: string;
    services: string;
    whyUs: string;
    specialist: string;
    faq: string;
    contact: string;
  };
  contactChannels: {
    call: string;
    heading: string;
  };
  coverage: {
    badge: string;
    title: string;
    description: string;
    districtsLabel: string;
    districts: string[];
    note: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
    cta: string;
    ctaButton: string;
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
      faq: "FAQ",
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
    coverage: {
      badge: "Service Area",
      title: "Physiotherapy at Home Across Tbilisi",
      description:
        "Our physiotherapists travel to patients throughout Tbilisi and the surrounding settlements. There is no clinic to reach and no waiting room: the specialist arrives with the equipment, at a time you choose, and delivers the session in your own home.",
      districtsLabel: "Districts we cover",
      districts: [
        "Vake",
        "Saburtalo",
        "Mtatsminda",
        "Isani",
        "Samgori",
        "Gldani",
        "Nadzaladevi",
        "Didube",
        "Chughureti",
        "Krtsanisi",
        "Didi Dighomi",
        "Varketili",
      ],
      note: "Live just outside the city? Call us — we cover the settlements around Tbilisi too.",
    },
    contactChannels: {
      call: "Call",
      heading: "Get in touch the way that suits you",
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Home Rehabilitation: Your Questions Answered",
      subtitle:
        "The questions patients ask most often before booking their first physiotherapy session at home in Tbilisi.",
      items: [
        {
          question: "What is home rehabilitation and who is it for?",
          answer:
            "Home rehabilitation means a licensed physiotherapist comes to you and delivers the full course of treatment in your own home. It is for patients recovering from surgery, a fracture or a stroke, people living with chronic back and joint pain, and anyone for whom travelling to a clinic is difficult.",
        },
        {
          question: "Do physiotherapists make home visits in Tbilisi?",
          answer:
            "Yes. Our physiotherapists work across every district of Tbilisi — Vake, Saburtalo, Mtatsminda, Isani, Samgori, Gldani, Nadzaladevi, Didube, Chughureti and Krtsanisi — as well as nearby settlements. Visits are scheduled at a time that suits you.",
        },
        {
          question: "How long does a rehabilitation course last?",
          answer:
            "It depends on the diagnosis. A mild orthopedic problem is often resolved in 6-10 sessions, while post-surgical or neurological recovery usually takes one to three months. You get an exact plan after the first assessment.",
        },
        {
          question: "How long is a single session?",
          answer:
            "A session normally runs 45-60 minutes and covers assessment, therapeutic exercise, manual therapy, and teaching you the exercises to continue on your own between visits.",
        },
        {
          question: "Do I need a doctor's referral or special equipment?",
          answer:
            "A referral is helpful but not required — the physiotherapist assesses your condition at the first visit. The specialist brings the equipment; all you need is a clear space to work in.",
        },
        {
          question: "How do I book the first visit?",
          answer:
            "Call +995 591 31 42 22. During the free consultation we listen to your situation, choose the right program, and agree the visit time and price up front, with no hidden costs.",
        },
      ],
      cta: "Still have a question? We are happy to answer it.",
      ctaButton: "Free Consultation",
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
      faq: "კითხვები",
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
    coverage: {
      badge: "მომსახურების არეალი",
      title: "ფიზიოთერაპია სახლში თბილისის ყველა რაიონში",
      description:
        "ჩვენი ფიზიოთერაპევტები პაციენტებთან დადიან მთელ თბილისსა და მიმდებარე დასახლებებში. კლინიკამდე მისვლა და რიგში ლოდინი აღარ გჭირდებათ: სპეციალისტი აღჭურვილობით მოდის თქვენთვის შერჩეულ დროს და სეანსს თქვენსავე სახლში ატარებს.",
      districtsLabel: "რაიონები, სადაც ვმუშაობთ",
      districts: [
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
      ],
      note: "ქალაქგარეთ ცხოვრობთ? დაგვირეკეთ — თბილისის მიმდებარე დასახლებებსაც ვფარავთ.",
    },
    contactChannels: {
      call: "დარეკეთ",
      heading: "დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით",
    },
    faq: {
      badge: "ხშირად დასმული კითხვები",
      title: "რეაბილიტაცია სახლში: პასუხები თქვენს კითხვებზე",
      subtitle:
        "კითხვები, რომლებსაც პაციენტები ყველაზე ხშირად სვამენ თბილისში სახლში ფიზიოთერაპიის პირველ სეანსამდე.",
      items: [
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
      ],
      cta: "კიდევ გაქვთ კითხვა? სიამოვნებით გიპასუხებთ.",
      ctaButton: "უფასო კონსულტაცია",
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

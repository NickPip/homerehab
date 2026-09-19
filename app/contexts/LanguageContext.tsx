"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { FAQ_ITEMS_KA } from "../lib/faq";

interface Translations {
  nav: {
    home: string;
    services: string;
    whyUs: string;
    specialist: string;
    coverage: string;
    faq: string;
    contact: string;
  };
  contactChannels: {
    call: string;
  };
  conditions: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  methods: {
    badge: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{ title: string; description: string }>;
  };
  callback: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    districtLabel: string;
    districtPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    hint: string;
    fallback: string;
    messageIntro: string;
    messageName: string;
    messagePhone: string;
    messageDistrict: string;
    messageProblem: string;
    or: string;
  };
  coverage: {
    badge: string;
    title: string;
    description: string;
    districtsLabel: string;
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
      programs: {
        number: string;
        label: string;
      };
      districts: {
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
      coverage: "Areas",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Certified & Licensed",
      title1: "Rehabilitation",
      title2: "and Physiotherapy",
      title3: "at Home",
      description:
        "Physiotherapy and rehabilitation at home in Tbilisi. Regain your freedom of movement without visiting a clinic — a licensed physiotherapist comes to you and delivers the full course of treatment in your own home.",
      callButton: "Call",
      cta: "Get a Free Consultation",
      trustBadge: "Call out a physiotherapist to your home — anywhere in Tbilisi",
      clients: "900+ patients treated between our two specialists",
    },
    services: {
      badge: "What We Offer",
      title: "Rehabilitation and Physiotherapy Services at Home",
      subtitle:
        "The physiotherapy and rehabilitation programs we deliver at home in Tbilisi, matched to your diagnosis and needs",
      learnMore: "Learn More",
      orthopedic: {
        title: "Orthopedic Rehabilitation at Home",
        description:
          "Rehabilitation for joint, spine and musculoskeletal conditions: reducing pain and recovering as much range of motion as possible.",
      },
      postSurgery: {
        title: "Post-Surgery and Injury Rehabilitation",
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
          "Breathing exercises to improve lung function after prolonged illness, surgery or infection.",
      },
      seniors: {
        title: "Rehabilitation for Seniors at Home",
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
      title: "Licensed Physiotherapists in Tbilisi",
      subtitle:
        "Our team is staffed with licensed physiotherapists and rehabilitation specialists who visit patients at home across Tbilisi. Receive the highest quality care without leaving home.",
      licensed: "Licensed Specialist",
      experienceLabel: "Experience",
      patientsLabel: "Patients",
      educationLabel: "Education",
      specializationsLabel: "Specializations",
      previous: "Previous",
      next: "Next",
      doctor: "Specialist",
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
          credentials: "Physical Therapist, Rehabilitation Specialist",
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
      title: "Why Rehabilitation at Home Beats a Clinic Visit",
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
          "The team is staffed only with licensed and experienced physiotherapists.",
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
          "A calm, familiar environment reduces stress and makes the rehabilitation process easier.",
      },
      transparency: {
        title: "Transparency",
        description:
          "Pre-agreed plan and budget, without hidden costs.",
      },
      stats: {
        patients: {
          number: "900+",
          label: "Patients Treated Between Us",
        },
        experience: {
          number: "10+",
          label: "Years of Combined Experience",
        },
        programs: {
          number: "6",
          label: "Rehabilitation Programs",
        },
        districts: {
          number: "12",
          label: "Districts in Tbilisi",
        },
      },
    },
    conditions: {
      badge: "Who We Help",
      title: "Rehabilitation at Home by Diagnosis",
      subtitle:
        "The conditions our physiotherapists most often treat in patients' homes across Tbilisi.",
      items: [
        {
          title: "Rehabilitation after a stroke",
          description:
            "Restoring movement, muscle strength, balance and self-care skills after a stroke. Work begins in the early period and continues at home for as long as recovery requires.",
        },
        {
          title: "Rehabilitation after knee or hip replacement",
          description:
            "A staged program after joint replacement: safe loading of the operated limb, range of motion, walking retraining, and returning to everyday activity.",
        },
        {
          title: "Rehabilitation after a hip fracture",
          description:
            "For older patients we work on rebuilding walking in stages, on safe movement around the home and on preventing falls, within the limits the treating doctor sets.",
        },
        {
          title: "Spinal disc herniation and back pain",
          description:
            "Reducing pain from a herniated disc, sciatica or chronic back pain, strengthening the deep stabilising muscles, and correcting the movement patterns that may be aggravating the symptoms.",
        },
        {
          title: "Arthrosis and joint pain",
          description:
            "Managing arthrosis of the knee, hip and shoulder: exercises that ease pain, maintain joint mobility and make everyday activity easier.",
        },
        {
          title: "Parkinson's disease and neurological conditions",
          description:
            "Exercise therapy for Parkinson's disease, multiple sclerosis and other neurological conditions, focused on balance, gait and preventing falls.",
        },
        {
          title: "Rehabilitation after a fracture or sports injury",
          description:
            "Restoring function after a fracture, ligament rupture or sprain, from the immobilization period through to full return to sport.",
        },
        {
          title: "Posture problems and scoliosis",
          description:
            "Corrective exercise for postural problems and scoliosis in teenagers and adults, together with the daily habits that hold the correction in place.",
        },
      ],
    },
    methods: {
      badge: "Our Methods",
      title: "The Treatment Methods We Use",
      subtitle:
        "Every program combines several of these methods, chosen to fit your diagnosis and your current condition.",
      items: [
        "Therapeutic exercise and kinesiotherapy",
        "Therapeutic massage",
        "Manual therapy",
        "Myofascial release",
        "Breathing exercises",
        "Gait and balance training",
        "Kinesio taping",
        "Post-immobilization joint mobilization",
        "A home exercise program you continue between visits",
      ],
    },
    process: {
      badge: "How It Works",
      title: "Rehabilitation at Home in Four Steps",
      subtitle: "From the first call to the end of your course, this is what happens.",
      steps: [
        {
          title: "Call and free consultation",
          description:
            "You call us and describe the problem. We tell you whether home rehabilitation is right for your case, which program fits, and what the visit will cost — before anything is booked.",
        },
        {
          title: "First visit and assessment",
          description:
            "The physiotherapist comes to you, examines your condition, measures range of motion and strength, and reviews any medical documentation and imaging you have.",
        },
        {
          title: "Your individual rehabilitation plan",
          description:
            "You receive a written plan: the goal, the number of sessions, their frequency, and the exercises you will do on your own between visits.",
        },
        {
          title: "Sessions in your own home",
          description:
            "The specialist comes at a time that suits you, brings the equipment, and adjusts the plan as you progress. You are told the cost in advance, with no hidden charges.",
        },
      ],
    },
    callback: {
      badge: "Request a Callback",
      title: "Arrange a Visit",
      subtitle:
        "Fill in the form and your request opens in WhatsApp, ready to send. Or simply call us — we answer during working hours.",
      nameLabel: "Your name",
      namePlaceholder: "e.g. Nino",
      phoneLabel: "Phone number",
      phonePlaceholder: "+995 5XX XX XX XX",
      districtLabel: "District",
      districtPlaceholder: "Choose a district",
      messageLabel: "What is the problem?",
      messagePlaceholder: "e.g. rehabilitation after a knee operation",
      submit: "Send via WhatsApp",
      hint: "We reply during working hours: Mon-Sat, 09:00-19:00.",
      fallback: "WhatsApp did not open? Tap here.",
      messageIntro: "Hello, I would like to arrange a physiotherapist visit at home",
      messageName: "Name",
      messagePhone: "Phone",
      messageDistrict: "District",
      messageProblem: "Problem",
      or: "or",
    },
    coverage: {
      badge: "Service Area",
      title: "Physiotherapy at Home Across Tbilisi",
      description:
        "Our physiotherapists travel to patients throughout Tbilisi and the surrounding settlements. There is no clinic to reach and no waiting room: the specialist arrives with the equipment, at a time you choose, and delivers the session in your own home.",
      districtsLabel: "Districts and neighbourhoods we cover",
      note: "Live just outside the city? Call us — we cover the settlements around Tbilisi too.",
    },
    contactChannels: {
      call: "Call",
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
            "It depends on the diagnosis. A mild orthopedic case usually means a course of 6-10 sessions, while post-surgical or neurological recovery usually runs one to three months. Results vary from patient to patient. You get an exact plan after the first assessment.",
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
        {
          question: "How much does rehabilitation at home cost in Tbilisi?",
          answer:
            "The price of a visit depends on the program and the district. We agree the exact cost with you during the free consultation, before the first visit is booked. There are no hidden charges: what we quote is what you pay.",
        },
        {
          question: "How do I call out a physiotherapist to my home in Tbilisi?",
          answer:
            "Call +995 591 31 42 22. Calling out a physiotherapist takes one phone call: you describe the problem, we choose the program, and we agree a time. We agree the time of the visit on the call itself, around your schedule and the specialist's.",
        },
        {
          question: "What is the difference between a physiotherapist and a rehabilitation specialist?",
          answer:
            "Both work on physical recovery. A physiotherapist focuses on movement, exercise therapy and manual techniques, while a rehabilitation specialist looks at the whole recovery plan, including how it fits with the treatment your doctor prescribed. Our team holds both qualifications, so you get both perspectives.",
        },
        {
          question: "When should rehabilitation start after a stroke or an operation?",
          answer:
            "When your treating doctor allows it, which is often within the first days. Early activity agreed with your doctor helps prevent muscle wasting and joint stiffness. We always match the pace of loading to your condition and to your doctor's instructions.",
        },
        {
          question: "Do you work on Saturdays?",
          answer:
            "Yes. We work Monday to Saturday, 09:00 to 19:00, and schedule visits at a time that suits your household, including outside working hours by arrangement.",
        },
        {
          question: "Do you offer therapeutic massage at home?",
          answer:
            "Yes, therapeutic massage is one of the methods we use, but as part of a rehabilitation plan rather than on its own. Massage prepares the tissue and exercise consolidates what it achieves, which is why we use it as part of a plan.",
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
      reviewCta: "Treated by us? Leave a review on Google",
      serviceAreaTitle: "Service Area",
      serviceArea: "Tbilisi and surrounding areas",
      serviceAreaDescription:
        "We deliver physiotherapy and rehabilitation courses in the patient's own home, across every district of Tbilisi and the surrounding settlements.",
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
      coverage: "რაიონები",
      faq: "კითხვები",
      contact: "კონტაქტი",
    },
    hero: {
      badge: "სერტიფიცირებული და ლიცენზირებული",
      title1: "რეაბილიტაცია",
      title2: "და ფიზიოთერაპია",
      title3: "სახლში",
      description:
        "ფიზიოთერაპია და რეაბილიტაცია სახლში თბილისში. დაიბრუნეთ მოძრაობის თავისუფლება კლინიკაში ვიზიტის გარეშე — ლიცენზირებული ფიზიოთერაპევტი მოვა თქვენთან და სრულ სარეაბილიტაციო კურსს თქვენსავე სახლში ჩაგიტარებთ.",
      callButton: "დარეკეთ",
      cta: "მიიღეთ უფასო კონსულტაცია",
      trustBadge: "ფიზიოთერაპევტის გამოძახება სახლში — თბილისის ნებისმიერ რაიონში",
      clients: "900+ პაციენტი ორივე სპეციალისტთან",
    },
    services: {
      badge: "რას გთავაზობთ",
      title: "რეაბილიტაციისა და ფიზიოთერაპიის სერვისები სახლში",
      subtitle:
        "ფიზიოთერაპიისა და რეაბილიტაციის პროგრამები, რომლებსაც თბილისში სახლში ვატარებთ — თქვენი დიაგნოზისა და საჭიროებების მიხედვით",
      learnMore: "გაიგეთ მეტი",
      orthopedic: {
        title: "ორთოპედიული რეაბილიტაცია სახლში",
        description:
          "სახსრების, ხერხემლისა და საყრდენ-მამოძრავებელი სისტემის დაავადებების რეაბილიტაცია: ტკივილის შემცირება და მოძრაობის მოცულობის მაქსიმალური აღდგენა.",
      },
      postSurgery: {
        title: "პოსტოპერაციული და ტრავმის შემდგომი რეაბილიტაცია",
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
          "სუნთქვითი ვარჯიშები და ფილტვების ფუნქციის გაუმჯობესება ხანგრძლივი დაავადების, ოპერაციის ან ინფექციის შემდეგ.",
      },
      seniors: {
        title: "ხანდაზმულთა რეაბილიტაცია სახლში",
        description:
          "წონასწორობის, ძალისა და ყოველდღიური აქტივობის შენარჩუნება ხანდაზმულებში, დაცემის რისკის შემცირება და დამოუკიდებელი ცხოვრება სახლში.",
      },
      cta: {
        title: "არ იცით, რომელი პროგრამა გჭირდებათ?",
        description: "დაგვირეკეთ უფასო კონსულტაციისთვის და შესაფერის კურსს ერთად შევარჩევთ",
        button: "დარეკეთ",
      },
    },
    specialist: {
      badge: "ჩვენი სპეციალისტები",
      title: "ლიცენზირებული ფიზიოთერაპევტები თბილისში",
      subtitle:
        "ჩვენი გუნდი დაკომპლექტებულია ლიცენზირებული ფიზიოთერაპევტებით, რომლებიც თბილისში პაციენტებს სახლში სტუმრობენ. მიიღეთ უმაღლესი ხარისხის მომსახურება სახლიდან გაუსვლელად.",
      licensed: "ლიცენზირებული სპეციალისტი",
      experienceLabel: "გამოცდილება",
      patientsLabel: "პაციენტები",
      educationLabel: "განათლება",
      specializationsLabel: "სპეციალიზაციები",
      previous: "წინა",
      next: "შემდეგი",
      doctor: "სპეციალისტი",
      doctors: [
        {
          name: "ნიკოლოზ თოდუა",
          credentials: "ფიზიკური თერაპევტი და რეაბილიტაციის სპეციალისტი",
          currentRole: "ფიზიკური თერაპევტი Georgian Foot and Ankle Institute-ში",
          description:
            "სპეციალისტი 6+ წლიანი კლინიკური გამოცდილებით, რომელიც მტკიცებულებებზე დაფუძნებულ, პაციენტზე ორიენტირებულ მკურნალობას სთავაზობს ინდივიდუალური გეგმით. მიმართულებები: ორთოპედიული, ტრავმატოლოგიური და ნევროლოგიური რეაბილიტაცია.",
          experience: "6+ წელი",
          patients: "500+",
          education: [
            "მაგისტრის ხარისხი ფიზიკურ მედიცინასა და რეაბილიტაციაში – თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი",
            "პროფესიული განვითარების მოწინავე სერტიფიკატი – პავლოვის სახელობის პირველი სახელმწიფო სამედიცინო უნივერსიტეტი, სანკტ-პეტერბურგი",
          ],
        },
        {
          name: "გიორგი პაიჭაძე",
          credentials: "ფიზიკური თერაპევტი, რეაბილიტაციის სპეციალისტი",
          currentRole: "რეაბილიტაციის სპეციალისტი შპს მედკაპიტალში",
          description:
            "სპეციალისტი 4+ წლიანი კლინიკური გამოცდილებით, რომელსაც უმუშავია რამდენიმე სარეაბილიტაციო ცენტრში, მათ შორის ვეტერანთა კლინიკასა და პედიატრიულ რეაბილიტაციაში. სთავაზობს სრულ სარეაბილიტაციო მომსახურებას მტკიცებულებებზე დაფუძნებული მეთოდებით.",
          experience: "4+ წელი",
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
        "საყრდენ-მამოძრავებელი სისტემის დარღვევები",
        "სუნთქვითი რეაბილიტაცია",
      ],
    },
    whyUs: {
      badge: "რატომ ჩვენ",
      title: "რატომ სჯობს რეაბილიტაცია სახლში კლინიკაში ვიზიტს?",
      subtitle:
        "ჩვენ ვაერთიანებთ მტკიცებულებებზე დაფუძნებულ მედიცინასა და ინდივიდუალურ ზრუნვას, რათა თქვენი რეაბილიტაცია სახლში მშვიდ და კომფორტულ გარემოში წარიმართოს.",
      comfort: {
        title: "კომფორტი",
        description:
          "სრული სარეაბილიტაციო კურსი თქვენს სახლში, კლინიკაში ვიზიტის გარეშე.",
      },
      professionalism: {
        title: "პროფესიონალიზმი",
        description:
          "გუნდი დაკომპლექტებულია მხოლოდ ლიცენზირებული და გამოცდილი ფიზიოთერაპევტებით.",
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
          "მშვიდი, ნაცნობი გარემო ამცირებს სტრესს და აადვილებს რეაბილიტაციის პროცესს.",
      },
      transparency: {
        title: "გამჭვირვალობა",
        description:
          "წინასწარ გაწერილი გეგმა და ბიუჯეტი, დაფარული ხარჯების გარეშე.",
      },
      stats: {
        patients: {
          number: "900+",
          label: "პაციენტი ორივე სპეციალისტთან",
        },
        experience: {
          number: "10+",
          label: "წლის ჯამური გამოცდილება",
        },
        programs: {
          number: "6",
          label: "სარეაბილიტაციო პროგრამა",
        },
        districts: {
          number: "12",
          label: "რაიონი თბილისში",
        },
      },
    },
    conditions: {
      badge: "ვის ვეხმარებით",
      title: "რეაბილიტაცია სახლში დიაგნოზის მიხედვით",
      subtitle:
        "მდგომარეობები, რომლებზეც ჩვენი ფიზიოთერაპევტები ყველაზე ხშირად მუშაობენ თბილისში პაციენტის სახლში.",
      items: [
        {
          title: "ინსულტის შემდგომი რეაბილიტაცია სახლში",
          description:
            "მოძრაობის, კუნთების ძალის, წონასწორობისა და თვითმოვლის უნარების აღდგენა ინსულტის შემდეგ. მუშაობა ადრეულ პერიოდში იწყება და სახლში გრძელდება იმდენ ხანს, რამდენიც აღდგენას სჭირდება.",
        },
        {
          title: "მუხლისა და მენჯ-ბარძაყის სახსრის ენდოპროთეზირების შემდგომი რეაბილიტაცია",
          description:
            "სახსრის ენდოპროთეზირების შემდეგ ეტაპობრივი პროგრამა: ოპერირებული კიდურის უსაფრთხო დატვირთვა, მოძრაობის მოცულობის აღდგენა, სიარულის ხელახალი სწავლება და ყოველდღიურ აქტივობაში დაბრუნება.",
        },
        {
          title: "ბარძაყის ყელის მოტეხილობის შემდგომი რეაბილიტაცია",
          description:
            "ხანდაზმული პაციენტებისთვის ვმუშაობთ სიარულის ეტაპობრივ აღდგენაზე, გადაადგილების უსაფრთხოებასა და დაცემის პრევენციაზე — მკურნალი ექიმის მითითებების ფარგლებში.",
        },
        {
          title: "ხერხემლის თიაქარი და ზურგის ტკივილი",
          description:
            "ხერხემლის თიაქრით, რადიკულიტითა და ქრონიკული ზურგის ტკივილით გამოწვეული სიმპტომების შემცირება, ღრმა სტაბილიზატორი კუნთების გაძლიერება და იმ მოძრაობითი ჩვევების კორექცია, რომლებმაც შესაძლოა სიმპტომები გაამწვავოს.",
        },
        {
          title: "ართროზი და სახსრების ტკივილი",
          description:
            "მუხლის, მენჯ-ბარძაყისა და მხრის სახსრების ართროზის მართვა: ვარჯიშები, რომლებიც ამსუბუქებს ტკივილს, ინარჩუნებს სახსრის მოძრაობას და აადვილებს ყოველდღიურ აქტივობას.",
        },
        {
          title: "პარკინსონის დაავადება და ნევროლოგიური დაავადებები",
          description:
            "სამკურნალო ვარჯიშები პარკინსონის დაავადების, გაფანტული სკლეროზისა და სხვა ნევროლოგიური მდგომარეობებისას — აქცენტით წონასწორობაზე, სიარულსა და დაცემის პრევენციაზე.",
        },
        {
          title: "მოტეხილობისა და სპორტული ტრავმის შემდგომი აღდგენა",
          description:
            "ფუნქციის აღდგენა მოტეხილობის, იოგის გახევის ან დაჭიმვის შემდეგ — იმობილიზაციის პერიოდიდან სპორტში სრულ დაბრუნებამდე.",
        },
        {
          title: "ტანადობის დარღვევა და სკოლიოზი",
          description:
            "მაკორექტირებელი ვარჯიშები მოზარდებსა და ზრდასრულებში ტანადობის დარღვევისა და სკოლიოზის დროს, იმ ყოველდღიურ ჩვევებთან ერთად, რომლებიც შედეგს ინარჩუნებს.",
        },
      ],
    },
    methods: {
      badge: "ჩვენი მეთოდები",
      title: "მკურნალობის მეთოდები, რომლებსაც ვიყენებთ",
      subtitle:
        "თითოეული პროგრამა ამ მეთოდებიდან რამდენიმეს აერთიანებს — შერჩეულს თქვენი დიაგნოზისა და მიმდინარე მდგომარეობის მიხედვით.",
      items: [
        "კინეზითერაპია — სამკურნალო ვარჯიშები (ლფკ)",
        "სამკურნალო მასაჟი",
        "მანუალური თერაპია",
        "მიოფასციალური რელიზი",
        "სუნთქვითი ვარჯიშები",
        "სიარულისა და წონასწორობის ვარჯიში",
        "კინეზიოტეიპირება",
        "სახსრების მობილიზაცია იმობილიზაციის შემდეგ",
        "სახლში დამოუკიდებლად შესასრულებელი ვარჯიშების პროგრამა",
      ],
    },
    process: {
      badge: "როგორ ვმუშაობთ",
      title: "როგორ მიმდინარეობს რეაბილიტაცია სახლში — 4 ნაბიჯი",
      subtitle: "პირველი ზარიდან კურსის დასრულებამდე — აი, რა ხდება.",
      steps: [
        {
          title: "ზარი და უფასო კონსულტაცია",
          description:
            "დაგვირეკავთ და აღწერთ პრობლემას. გეტყვით, შეესაბამება თუ არა თქვენს შემთხვევას რეაბილიტაცია სახლში, რომელი მიმართულება გჭირდებათ და რა ეღირება ვიზიტი — ჯავშნამდე.",
        },
        {
          title: "პირველი ვიზიტი და ფიზიოთერაპევტის შეფასება",
          description:
            "ფიზიოთერაპევტი ჩამოდის თქვენთან, ათვალიერებს მდგომარეობას, ზომავს მოძრაობის მოცულობასა და კუნთების ძალას და ეცნობა თქვენს სამედიცინო დოკუმენტაციასა და კვლევებს.",
        },
        {
          title: "ინდივიდუალური სარეაბილიტაციო გეგმა",
          description:
            "მიიღებთ წერილობით გეგმას: მიზანი, სეანსების რაოდენობა და სიხშირე, ასევე ვარჯიშები, რომლებსაც ვიზიტებს შორის დამოუკიდებლად შეასრულებთ.",
        },
        {
          title: "სეანსები თქვენსავე სახლში",
          description:
            "სპეციალისტი მოდის თქვენთვის მოსახერხებელ დროს, თან მოაქვს აღჭურვილობა და გეგმას პროგრესის მიხედვით არეგულირებს. ღირებულებას წინასწარ შეგითანხმებთ, დაფარული ხარჯების გარეშე.",
        },
      ],
    },
    callback: {
      badge: "გამოგვიძახეთ",
      title: "ვიზიტის შეთანხმება",
      subtitle:
        "შეავსეთ ფორმა და თქვენი მოთხოვნა WhatsApp-ში გაიხსნება, გასაგზავნად მზად. ან უბრალოდ დაგვირეკეთ — სამუშაო საათებში ყოველთვის ვპასუხობთ.",
      nameLabel: "თქვენი სახელი",
      namePlaceholder: "მაგ. ნინო",
      phoneLabel: "ტელეფონის ნომერი",
      phonePlaceholder: "+995 5XX XX XX XX",
      districtLabel: "რაიონი",
      districtPlaceholder: "აირჩიეთ რაიონი",
      messageLabel: "რა პრობლემაა?",
      messagePlaceholder: "მაგ. მუხლის ოპერაციის შემდგომი რეაბილიტაცია",
      submit: "გაგზავნა WhatsApp-ით",
      hint: "ვპასუხობთ სამუშაო საათებში: ორშ-შაბ, 09:00-19:00.",
      fallback: "WhatsApp არ გაიხსნა? დააჭირეთ აქ.",
      messageIntro: "გამარჯობა, მინდა ფიზიოთერაპევტის სახლში გამოძახება",
      messageName: "სახელი",
      messagePhone: "ტელეფონი",
      messageDistrict: "რაიონი",
      messageProblem: "პრობლემა",
      or: "ან",
    },
    coverage: {
      badge: "სერვისის არეალი",
      title: "ფიზიოთერაპია სახლში თბილისის ყველა რაიონში",
      description:
        "ჩვენი ფიზიოთერაპევტები პაციენტებთან დადიან მთელ თბილისსა და მიმდებარე დასახლებებში. კლინიკამდე მისვლა და რიგში ლოდინი აღარ გჭირდებათ: სპეციალისტი აღჭურვილობით მოდის თქვენთვის შერჩეულ დროს და სეანსს თქვენსავე სახლში ატარებს.",
      districtsLabel: "რაიონები და უბნები, სადაც ვმუშაობთ",
      note: "ქალაქგარეთ ცხოვრობთ? დაგვირეკეთ — თბილისის მიმდებარე დასახლებებსაც ვფარავთ.",
    },
    contactChannels: {
      call: "დარეკეთ",
    },
    faq: {
      badge: "ხშირად დასმული კითხვები",
      title: "რეაბილიტაცია სახლში: პასუხები თქვენს კითხვებზე",
      subtitle:
        "კითხვები, რომლებსაც პაციენტები ყველაზე ხშირად სვამენ თბილისში სახლში ფიზიოთერაპიის პირველ სეანსამდე.",
      items: FAQ_ITEMS_KA,
      cta: "კიდევ გაქვთ კითხვა? სიამოვნებით გიპასუხებთ.",
      ctaButton: "უფასო კონსულტაცია",
    },
    footer: {
      tagline:
        "ფიზიოთერაპია და ფიზიკური რეაბილიტაცია სახლში — ლიცენზირებული ფიზიოთერაპევტები თბილისში. თქვენი გამოჯანმრთელება, ჩვენი ვალდებულება.",
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
      reviewCta: "გისარგებლიათ ჩვენი მომსახურებით? დაგვიტოვეთ შეფასება Google-ზე",
      serviceAreaTitle: "სერვისის არეალი",
      serviceArea: "თბილისი და მიმდებარე რაიონები",
      serviceAreaDescription:
        "ვმუშაობთ თბილისის ყველა რაიონში — ვაკე, საბურთალო, მთაწმინდა, ისანი, სამგორი, გლდანი, ნაძალადევი, დიდუბე, ჩუღურეთი, კრწანისი, დიდი დიღომი, ვარკეთილი — და მიმდებარე დასახლებებში.",
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
  tList: <T>(key: string) => T[];
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

  // Keep the document language in sync so assistive tech and crawlers see the language actually
  // being displayed, not just the server default.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Save language to localStorage when it changes
  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    if (mounted) {
      localStorage.setItem("language", lang);
    }
  };

  function resolve(key: string): unknown {
    return key
      .split(".")
      .reduce<any>((value, part) => value?.[part], translations[language]);
  }

  function t(key: string): string {
    const value = resolve(key);
    return typeof value === "string" ? value : key;
  }

  /**
   * Reads a list out of the dictionary. Sections that render repeated content need the array
   * itself; probing t("x.items.0"), t("x.items.1") until it returns the key back would break on
   * any string that happened to start with the key prefix.
   */
  function tList<T>(key: string): T[] {
    const value = resolve(key);
    return Array.isArray(value) ? (value as T[]) : [];
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t, tList }}
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

/**
 * AFAN Disease Prevention Web Portal - Data Store
 * Aid for AIDS of Nevada (Las Vegas) & Public Health Resources
 */

const AFAN_INFO = {
  name: "Aid for AIDS of Nevada (AFAN)",
  chapter: "Las Vegas / Southern Nevada Office",
  founded: 1984,
  tagline: "Nevada's Oldest and Largest AIDS Service Organization",
  address: "1830 E. Sahara Ave., Suite 210, Las Vegas, NV 89104",
  phone: "(702) 382-2326",
  email: "info@afanlv.org",
  website: "https://afanlv.org/",
  donateUrl: "https://afanlv.org/",
  volunteerUrl: "https://afanlv.org/",
  testingUrl: "https://afanlv.org/",
  clientCount: "Serving over 1,200+ clients and families annually across Clark County",
  services: [
    {
      title: "Medical Case Management",
      icon: "clipboard-check",
      description: "Dedicated case managers assist clients in accessing life-saving antiretroviral therapy (ART), health insurance (Ryan White Part B / Medicaid), and mental health care."
    },
    {
      title: "Free HIV Testing & Prevention Outreach",
      icon: "activity",
      description: "Confidential, fast, barrier-free HIV testing paired with pre- and post-test counseling, PrEP referrals, and safer sex education throughout Las Vegas."
    },
    {
      title: "Housing & Utility Assistance",
      icon: "home",
      description: "Emergency rental grants, security deposit assistance, and utility support to keep individuals and families stably housed while managing chronic illness."
    },
    {
      title: "Nutrition & Food Pantry Support",
      icon: "shopping-bag",
      description: "On-site food pantry, nutritional counseling, and grocery vouchers ensuring clients maintain immune resilience and overall physical health."
    },
    {
      title: "Medical Transportation",
      icon: "truck",
      description: "Direct RTC bus passes, gas cards, and specialized medical taxi vouchers to ensure patients never miss a doctor's appointment or lab draw."
    },
    {
      title: "Mental Health & Peer Support",
      icon: "heart",
      description: "Compassionate support groups, trauma-informed counseling, and community events designed to erase stigma, isolation, and shame."
    }
  ]
};

const PREVENTION_PILLARS = [
  {
    id: "sexual-bloodborne",
    title: "Sexual & Bloodborne Health",
    badge: "HIV, Hep B/C, STIs",
    icon: "shield",
    color: "rose",
    summary: "Proven clinical and behavioral tools to block sexual and blood-to-blood transmission.",
    protocols: [
      {
        name: "PrEP (Pre-Exposure Prophylaxis)",
        detail: "A daily pill (emtricitabine/tenofovir) or bi-monthly injection (cabotegravir) that reduces the risk of contracting HIV via sex by ~99% and injection drug use by at least 74%."
      },
      {
        name: "PEP (Post-Exposure Prophylaxis)",
        detail: "Emergency medication taken within 72 hours following potential HIV exposure. Taken daily for 28 days to prevent the virus from taking hold."
      },
      {
        name: "U=U (Undetectable = Untransmittable)",
        detail: "People living with HIV who achieve and maintain an undetectable viral load through consistent antiretroviral therapy CANNOT transmit HIV sexually."
      },
      {
        name: "Barrier Methods & Condoms",
        detail: "Consistent and correct use of external or internal condoms and dental dams provides a physical barrier against HIV, Syphilis, Gonorrhea, and Chlamydia."
      },
      {
        name: "Harm Reduction & Sterile Equipment",
        detail: "Never share syringes, needles, or drug preparation supplies. Utilize Clark County needle exchange programs (such as Trac-B Exchange) to eliminate hepatitis and HIV transmission."
      }
    ]
  },
  {
    id: "respiratory-airborne",
    title: "Airborne & Respiratory Defense",
    badge: "Flu, COVID-19, RSV",
    icon: "wind",
    color: "sky",
    summary: "Limiting aerosolized pathogens and droplet transmission in public and domestic settings.",
    protocols: [
      {
        name: "High-Efficiency Filtration Masks",
        detail: "Well-fitted N95, KN95, or KF94 respirators filter >95% of airborne particulates and infectious respiratory aerosols in high-density indoor environments."
      },
      {
        name: "Ventilation & Indoor Air Cleaning",
        detail: "Increase outdoor air exchange, use HEPA air purifiers, and keep MERV-13+ building HVAC filters fresh to rapidly dilute pathogen concentrations."
      },
      {
        name: "Annual Seasonal Immunization",
        detail: "Stay current on updated seasonal influenza vaccines and COVID-19 boosters to prime adaptive memory B- and T-cells and reduce severe transmission."
      },
      {
        name: "Respiratory Etiquette & Isolation",
        detail: "Cough and sneeze into your flexed elbow or disposable tissue. Stay home and isolate when experiencing fever, chills, cough, or sore throat."
      }
    ]
  },
  {
    id: "hygiene-fomites",
    title: "Surface & Hand Hygiene",
    badge: "Norovirus, MRSA, Enteric",
    icon: "sparkles",
    color: "amber",
    summary: "Breaking the chain of contact transmission from hands, utensils, and shared surfaces.",
    protocols: [
      {
        name: "20-Second Friction Handwashing",
        detail: "Wash thoroughly with clean running water and soap for at least 20 seconds, ensuring palms, back of hands, between fingers, and under nails are scrubbed."
      },
      {
        name: "Alcohol-Based Hand Rubs (ABHR)",
        detail: "Use hand sanitizers containing at least 60% ethanol or isopropanol when soap and water are not immediately available; rub until completely dry."
      },
      {
        name: "High-Touch Surface Disinfection",
        detail: "Clean and disinfect frequently touched objects (phones, door handles, light switches, counter tops) with EPA-registered disinfectants (List N)."
      },
      {
        name: "Avoid Touching T-Zone Mucosa",
        detail: "Refrain from touching eyes, nose, and mouth with unwashed hands, which serves as the primary gateway for viral and bacterial inoculation."
      }
    ]
  },
  {
    id: "food-water",
    title: "Food & Waterborne Safety",
    badge: "Salmonella, E. coli, Hep A",
    icon: "droplet",
    color: "emerald",
    summary: "Preventing gastrointestinal infections through safe culinary practices and water sanitation.",
    protocols: [
      {
        name: "Clean & Sanitize",
        detail: "Wash hands, cutting boards, dishes, and countertops frequently before, during, and after preparing food."
      },
      {
        name: "Separate Raw & Ready-To-Eat",
        detail: "Keep raw meats, poultry, seafood, and eggs separate from ready-to-eat foods to prevent cross-contamination of pathogenic bacteria."
      },
      {
        name: "Cook to Safe Temperatures",
        detail: "Use a calibrated food thermometer (poultry to 165°F, ground beef to 160°F, whole meats and fish to 145°F) to kill harmful foodborne pathogens."
      },
      {
        name: "Refrigerate Promptly",
        detail: "Keep food chilled at 40°F (4°C) or colder; refrigerate perishable foods within 2 hours (or within 1 hour if temperatures exceed 90°F in Las Vegas summer heat)."
      }
    ]
  }
];

const SOURCES = [
  {
    id: "snhd",
    organization: "Southern Nevada Health District (SNHD)",
    title: "Sexual Health Clinic & Infectious Disease Surveillance (Clark County, NV)",
    url: "https://www.southernnevadahealthdistrict.org/",
    year: "2024 - 2026",
    scope: "Local Las Vegas / Clark County Authority",
    description: "Primary municipal public health agency providing STI/HIV screening, immunization, disease surveillance, and epidemic control across Southern Nevada.",
    keyTakeaway: "Provides clinical guidelines for local PrEP/PEP access and epidemiological statistics for Clark County."
  },
  {
    id: "afan",
    organization: "Aid for AIDS of Nevada (AFAN)",
    title: "Community HIV Care, Prevention Programs & Client Services",
    url: "https://afanlv.org/",
    year: "1984 - Present",
    scope: "Nevada Nonprofit Lead",
    description: "The premier 501(c)(3) nonprofit in Nevada providing case management, anti-stigma education, free testing navigation, and emergency financial support for people living with HIV/AIDS.",
    keyTakeaway: "Direct community frontline service provider linking medical care with housing and nutrition safety nets."
  },
  {
    id: "cdc",
    organization: "Centers for Disease Control and Prevention (CDC)",
    title: "Core Infection Prevention and Control Practices for Communicable Pathogens & HIV PrEP Guidelines",
    url: "https://www.cdc.gov/hiv/basics/prep.html",
    year: "2024",
    scope: "Federal Public Health Agency",
    description: "Comprehensive federal guidelines on transmission reduction, standard precautions, hand hygiene metrics, and clinical recommendations for HIV Pre-Exposure Prophylaxis.",
    keyTakeaway: "Defines scientific efficacy rates for PrEP (~99%), PEP window (72 hours), and standard hospital/community hygiene."
  },
  {
    id: "who",
    organization: "World Health Organization (WHO)",
    title: "Global Health Sector Strategies on HIV, Viral Hepatitis and Sexually Transmitted Infections & Infection Prevention and Control (IPC)",
    url: "https://www.who.int/health-topics/infection-prevention-and-control",
    year: "2024",
    scope: "Global Health Entity",
    description: "Worldwide standards for outbreak containment, airborne pathogen definitions, sterile injection advocacy, and universal testing access.",
    keyTakeaway: "Sets global benchmarks for harm reduction, vaccine equity, and breaking pathogen transmission chains."
  },
  {
    id: "nih",
    organization: "National Institutes of Health (NIH / NIAID)",
    title: "Science Behind Undetectable = Untransmittable (PARTNER & HPTN 052 Clinical Trials)",
    url: "https://www.niaid.nih.gov/diseases-conditions/treatment-prevention",
    year: "2023 - 2025",
    scope: "Biomedical Research Authority",
    description: "Definitive landmark clinical trials proving that zero sexual transmission of HIV occurs when the virus is suppressed below detectable levels via antiretroviral therapy.",
    keyTakeaway: "Affirms U=U as an evidence-based biological fact, dismantling stigma and encouraging treatment adherence."
  },
  {
    id: "nv-dhhs",
    organization: "Nevada Department of Health and Human Services (DHHS)",
    title: "Fast-Track Cities & End HIV Nevada Strategic Initiative",
    url: "https://endhivnevada.org/",
    year: "2024",
    scope: "State of Nevada Health Department",
    description: "Statewide collaborative plan aligning Las Vegas, Reno, and rural counties to diagnose 95% of HIV infections, treat 95%, and achieve viral suppression for 95%.",
    keyTakeaway: "State-level funding, Ryan White Part B management, and community education partnerships with AFAN."
  }
];

const FAQS = [
  {
    question: "What is Aid for AIDS of Nevada (AFAN) and where are they located?",
    answer: "Founded in 1984, AFAN is Nevada's oldest and largest AIDS service organization. Their main Las Vegas headquarters is located at 1830 E. Sahara Ave., Suite 210, Las Vegas, NV 89104. They provide compassionate medical case management, free HIV testing navigation, housing support, food pantry access, transportation assistance, and anti-stigma outreach throughout Southern Nevada.",
    category: "afan"
  },
  {
    question: "What does U=U mean, and is it scientifically proven?",
    answer: "U=U stands for 'Undetectable = Untransmittable'. Landmark clinical studies (including PARTNER 1, PARTNER 2, and Opposites Attract by the CDC and NIH) followed tens of thousands of condomless sex acts and found ZERO cases of sexual HIV transmission when the HIV-positive partner maintained an undetectable viral load (<200 copies/mL) through antiretroviral therapy (ART).",
    category: "prevention"
  },
  {
    question: "What is the difference between PrEP and PEP?",
    answer: "PrEP (Pre-Exposure Prophylaxis) is taken BEFORE potential exposure by individuals who are HIV-negative to prevent acquiring the virus (taken as a daily pill or long-acting shot). PEP (Post-Exposure Prophylaxis) is an EMERGENCY medication taken AFTER a potential exposure. PEP must be started as soon as possible—strictly within 72 hours—and continued for 28 consecutive days.",
    category: "prevention"
  },
  {
    question: "How can I get tested for HIV or STIs in Las Vegas?",
    answer: "You can receive free, confidential HIV testing through Aid for AIDS of Nevada (call 702-382-2326 or visit afanlv.org), the Southern Nevada Health District (SNHD) Sexual Health Clinic (280 S. Decatur Blvd), or community partners like The Center (LGBTQ+ Community Center) and Trac-B Exchange. Many sites offer rapid tests with results in just 15–20 minutes.",
    category: "local"
  },
  {
    question: "How is HIV transmitted, and how is it NOT transmitted?",
    answer: "HIV is transmitted ONLY through specific body fluids: blood, semen, pre-seminal fluid, rectal fluids, vaginal fluids, and breast milk—typically through unprotected sex or sharing needles. HIV CANNOT be transmitted through saliva, tears, sweat, hugging, shaking hands, sharing toilet seats, sharing dishes/drinking glasses, kissing, or mosquito/insect bites.",
    category: "prevention"
  },
  {
    question: "How does my donation or volunteer time directly support AFAN Las Vegas?",
    answer: "Every dollar donated to AFAN goes toward direct client assistance: stocking the nutrition pantry, providing emergency utility and rental grants to prevent homelessness, funding medical transit bus passes, and delivering barrier-free prevention education. You can donate directly at afanlv.org or participate in signature fundraisers like the annual AIDS Walk Las Vegas and the Black & White Party.",
    category: "afan"
  },
  {
    question: "What are the most effective daily habits to prevent respiratory viruses (Flu, COVID-19, RSV)?",
    answer: "The CDC and WHO recommend: (1) staying up to date on seasonal immunizations; (2) thorough 20-second hand hygiene with soap and water; (3) wearing high-filtration respirators (N95/KN95) in crowded or poorly ventilated indoor spaces; (4) improving air flow and using HEPA filtration; and (5) isolating at home when feeling sick or feverish.",
    category: "prevention"
  },
  {
    question: "What harm reduction resources exist in Clark County for injection drug safety?",
    answer: "Clark County supports harm reduction via sterile syringe access programs such as Trac-B Exchange (Southern Nevada Harm Reduction Alliance), syringe vending machines, free Naloxone (Narcan) distribution, and fentanyl test strips. These measures drastically reduce the transmission of HIV and Hepatitis C while saving lives from accidental overdoses.",
    category: "local"
  }
];

const LOCAL_CLINICS = [
  {
    name: "Aid for AIDS of Nevada (AFAN) - Las Vegas HQ",
    type: "Featured Nonprofit Partner",
    address: "1830 E. Sahara Ave., Suite 210, Las Vegas, NV 89104",
    phone: "(702) 382-2326",
    hours: "Mon - Fri: 8:30 AM - 5:00 PM",
    services: "Case Management, Free HIV Testing Navigation, Housing, Food Pantry, Transportation",
    link: "https://afanlv.org/",
    highlight: true
  },
  {
    name: "Southern Nevada Health District (SNHD) - Main Clinic",
    type: "Public Health Authority Clinic",
    address: "280 S. Decatur Blvd., Las Vegas, NV 89107",
    phone: "(702) 759-0702",
    hours: "Mon - Thu: 7:30 AM - 5:00 PM",
    services: "Sexual Health Clinic, Rapid HIV/STI Screening, Immunizations, PrEP Clinic",
    link: "https://www.southernnevadahealthdistrict.org/",
    highlight: false
  },
  {
    name: "The Center (LGBTQ+ Community Center of Southern Nevada)",
    type: "Community Health & Testing",
    address: "401 S. Maryland Pkwy, Las Vegas, NV 89101",
    phone: "(702) 733-9800",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    services: "Free Rapid HIV & STI Testing, Wellness Clinic, Condom Distribution, Support Groups",
    link: "https://thecenterlv.org/",
    highlight: false
  },
  {
    name: "Trac-B Exchange (Harm Reduction Center)",
    type: "Syringe Access & Harm Reduction",
    address: "6114 W. Charleston Blvd., Las Vegas, NV 89146",
    phone: "(702) 840-6693",
    hours: "Mon - Thu: 10:00 AM - 4:00 PM",
    services: "Sterile Syringe Exchange, Free Naloxone/Narcan, Rapid HIV/HCV Testing, Safer Use Kits",
    link: "https://nvharmreduction.org/",
    highlight: false
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "If a person living with HIV is on treatment and has an 'undetectable' viral load, what is the risk of transmitting HIV to their sexual partner?",
    options: [
      { text: "Zero risk (Undetectable = Untransmittable)", correct: true },
      { text: "About a 50% reduced risk", correct: false },
      { text: "Only safe if they use three forms of protection", correct: false },
      { text: "The risk remains unchanged", correct: false }
    ],
    explanation: "Correct! The landmark scientific consensus 'U=U' (Undetectable = Untransmittable) confirmed by the CDC, WHO, and NIH shows that someone with an undetectable viral load cannot transmit HIV sexually."
  },
  {
    id: 2,
    question: "What is the critical emergency time window to begin PEP (Post-Exposure Prophylaxis) after potential HIV exposure?",
    options: [
      { text: "Within 24 hours only", correct: false },
      { text: "Within 72 hours (the sooner, the better)", correct: true },
      { text: "Within 14 days", correct: false },
      { text: "Anytime within the first month", correct: false }
    ],
    explanation: "Correct! PEP must be started within 72 hours of exposure to be effective. It is a 28-day emergency medication course that prevents the virus from establishing itself in the body."
  },
  {
    id: 3,
    question: "How long should you scrub your hands with soap and water to effectively eliminate communicable pathogens?",
    options: [
      { text: "At least 5 seconds", correct: false },
      { text: "At least 20 seconds", correct: true },
      { text: "At least 60 seconds under boiling water", correct: false },
      { text: "10 seconds with water only", correct: false }
    ],
    explanation: "Correct! CDC and WHO guidelines recommend scrubbing all hand surfaces with soap and clean running water for at least 20 seconds (the time it takes to sing 'Happy Birthday' twice)."
  },
  {
    id: 4,
    question: "Which organization is Nevada's oldest and largest AIDS service organization, founded in 1984 in Las Vegas?",
    options: [
      { text: "Aid for AIDS of Nevada (AFAN)", correct: true },
      { text: "Nevada General Hospital Foundation", correct: false },
      { text: "Clark County Disease Control Dept", correct: false },
      { text: "Western Viral Alliance", correct: false }
    ],
    explanation: "Correct! Aid for AIDS of Nevada (AFAN) was founded in 1984 and has supported Southern Nevada for over 40 years through medical case management, housing, food pantry, and prevention education."
  },
  {
    id: 5,
    question: "Can HIV be transmitted through casual contact such as sharing a drinking cup, toilet seats, or mosquito bites?",
    options: [
      { text: "Yes, easily through surfaces", correct: false },
      { text: "Only in hot summer weather", correct: false },
      { text: "No, HIV cannot survive or spread through casual contact or insects", correct: true },
      { text: "Yes, through sweat and saliva", correct: false }
    ],
    explanation: "Correct! HIV is not spread through saliva, sweat, tears, toilet seats, casual touch, shared utensils, or insect bites. It requires specific body fluids entering the bloodstream or mucous membranes."
  }
];

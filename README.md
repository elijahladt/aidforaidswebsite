# Southern Nevada Disease Prevention Web Portal
### Supporting Aid for AIDS of Nevada (AFAN) — Las Vegas

A modern, responsive public health web application dedicated to preventing the spread of infectious disease, promoting biomedical HIV prevention (PrEP, PEP, U=U), and rallying community support for **Aid for AIDS of Nevada (AFAN)**, Nevada's oldest and largest AIDS service organization (founded in 1984 in Las Vegas).

---

## 🌟 Key Features

1. **Comprehensive Disease Prevention Guide**:
   - **Sexual & Bloodborne Pathogens**: Detailed clinical guidance on PrEP (~99% prevention), emergency PEP (72-hour critical window), U=U (*Undetectable = Untransmittable*), barrier methods, and sterile syringe access.
   - **Airborne & Respiratory Viruses**: High-filtration respirators (N95/KN95), indoor air ventilation/purification, and annual immunization (Flu/COVID-19).
   - **Hand & Surface Hygiene**: 20-second friction hand hygiene, alcohol sanitizers (&ge;60%), and EPA-registered disinfectants.
   - **Food & Waterborne Safety**: Clean, Separate, Cook (internal temperatures), and Chill guidelines.

2. **Dedicated Spotlight on Aid for AIDS of Nevada (AFAN Las Vegas)**:
   - Full organizational history (founded in 1984 in Las Vegas, serving Clark County for 40+ years).
   - Direct headquarters information: **1830 E. Sahara Ave., Suite 210, Las Vegas, NV 89104**.
   - Direct helpline: **(702) 382-2326**.
   - Overview of services: Medical Case Management, Housing & Utility Assistance, Food Pantry & Nutrition, Medical Transit Vouchers, Free Testing Navigation, and Mental Health Groups.
   - Action buttons linking directly to [afanlv.org](https://afanlv.org/).

3. **Multiple Credible Scientific Sources**:
   - **Southern Nevada Health District (SNHD)**: Clark County infectious disease surveillance, sexual health clinic standards, and community nursing.
   - **Aid for AIDS of Nevada (AFAN)**: Community care metrics, Ryan White Part B delivery, and prevention education.
   - **Centers for Disease Control and Prevention (CDC)**: National HIV prevention guidelines, core IPC practices.
   - **World Health Organization (WHO)**: Global infection prevention and control (IPC) standards and harm reduction policies.
   - **National Institutes of Health (NIH / NIAID)**: Evidence from landmark PARTNER and HPTN 052 trials for U=U.
   - **Nevada Department of Health and Human Services (DHHS)**: Fast-Track Cities and End HIV Nevada strategic framework.

4. **Dedicated Pages**:
   - **Home (`index.html`)**: Complete landing portal with stats, core pillars, AFAN spotlight, interactive quiz, clinic directory, and FAQ preview.
   - **Prevention Guide (`prevention.html`)**: In-depth clinical breakdown with printable view for community distribution.
   - **About Us (`about-us.html`)**: Aid for AIDS of Nevada (AFAN) 40-year history, mission, services, and impact.
   - **About Me (`about-me.html`)**: Introduction to our community health group and advocacy pledge supporting AFAN.
   - **FAQ (`faq.html`)**: Searchable, filterable accordion with real-time keyword search.
   - **Sources & Evidence (`sources.html`)**: Formal citations, scopes, and key findings.
   - **Support AFAN (`support-afan.html`)**: Action center for donations, AIDS Walk Las Vegas, food drives, and volunteering.

5. **Interactive Tools**:
   - **Interactive Disease Prevention & Myth-Buster Quiz**: Real-time scoring, clinical rationale explanations, and retake functionality.
   - **Live Search & Filter FAQ System**: Real-time keyword filtering and category buttons.
   - **Local Clark County Health & Testing Directory**: Verified clinics (AFAN, SNHD, The Center, Trac-B).
   - **Emergency Exposure Alert Bar**: Highlighting the 72-hour window for PEP and immediate phone access.

---

## 🚀 How to Run Locally

### Option 1: Direct File Access
Simply double-click `index.html` (or any other `.html` file) to open it in your browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Python Server
Run the included python server:
```bash
cd C:\Users\zeke0\.gemini\antigravity\scratch\afan-disease-prevention-web
python server.py
```
Then visit: `http://localhost:8080` in your web browser.

---

## 📁 Directory Structure

```
afan-disease-prevention-web/
├── index.html              # Main comprehensive portal & landing page
├── prevention.html         # Full disease prevention guide & protocols
├── about-us.html           # Aid for AIDS of Nevada (AFAN) 40-year story
├── about-me.html           # Community health advocate group intro
├── faq.html                # Searchable FAQ & myth-busting system
├── sources.html            # Formal scientific & municipal citations
├── support-afan.html       # Action & Giving Center for AFAN Las Vegas
├── server.py               # Lightweight local Python HTTP server
├── README.md               # Documentation & project guide
├── css/
│   └── styles.css          # Theme styles, animations, print rules
└── js/
    ├── data.js             # Data store (AFAN info, pillars, FAQs, quiz, sources)
    └── app.js              # Application logic (quiz, search, filters, drawer)
```

---

## 🤝 Supporting AFAN Las Vegas
To donate or volunteer directly:
- **Website**: [afanlv.org](https://afanlv.org/)
- **Phone**: (702) 382-2326
- **Address**: 1830 E. Sahara Ave., Suite 210, Las Vegas, NV 89104

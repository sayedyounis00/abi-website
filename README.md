# 🌐 ABI (Arbeit.Bildung.International)

Official web portal and international career advisory platform for **ABI (Arbeit.Bildung.International)**. Connecting global talent with educational pathways, vocational training (Ausbildung), and career opportunities in Germany and internationally.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

---

## 🌟 Platform Features

- **Interactive Intake & Application Form**: Streamlined candidate application workflow with automated email notifications via **Nodemailer**.
- **Hero Carousel & Modern Storytelling**: Showcase success stories, partner institutions, and vocational pathways.
- **Career Pathways & Roadmap**: Detailed roadmaps explaining the step-by-step process of language training, visa processing, recognition, and workplace onboarding.
- **Educational Services & Programs**: Comprehensive overviews of language courses, qualification programs, and employer sponsorships.
- **GDPR & Legal Compliance**: Built-in cookie consent banner, detailed Impressum, and Privacy Policy compliant with German/EU data privacy standards.
- **SEO & Performance Optimized**: Automatic sitemap generation, structured metadata, and robots.txt.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Email Service** | Nodemailer |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```text
abi-website/
├── app/
│   ├── api/                   # Contact and intake email submission endpoints
│   ├── impressum/             # Legal notice (Impressum)
│   ├── privacy-policy/        # Privacy and GDPR policy
│   ├── layout.tsx             # Root layout with fonts & metadata
│   ├── page.tsx               # Main landing page
│   ├── robots.ts              # Search engine crawler directives
│   └── sitemap.ts             # XML sitemap configuration
├── components/
│   ├── cookie-consent/        # Cookie consent banner & settings
│   ├── AboutSection.tsx       # About ABI mission and vision
│   ├── Header.tsx & Footer.tsx# Global navigation and footer
│   ├── HeroCarousel.tsx       # Interactive hero carousel
│   ├── IntakeSection.tsx      # Multi-step intake and registration form
│   ├── PartnersSection.tsx    # Academic & corporate partners showcase
│   ├── RoadmapSection.tsx     # Step-by-step candidate career pathway
│   └── ServicesSection.tsx    # Educational & career advisory offerings
└── public/                    # Assets, logos, and partner badges
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sayedyounis00/abi-website.git
cd abi-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory for SMTP email delivery:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=noreply@arbeit-bildung-international.de
EMAIL_TO=info@arbeit-bildung-international.de
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 📄 License

This project is licensed under the MIT License.

import Image from "next/image";
import Link from "next/link";

/* ─────────────────── Data ─────────────────── */

const screenshots = [
  { src: "/screenshots/IMG_4840.PNG", alt: "Productions dashboard showing active film budgets" },
  { src: "/screenshots/IMG_4847.PNG", alt: "Budget detail view with folders and line items" },
  { src: "/screenshots/IMG_4848.PNG", alt: "Budget summary with spend-by-category chart" },
  { src: "/screenshots/IMG_4844.PNG", alt: "Reports dashboard with charts and analytics" },
  { src: "/screenshots/IMG_4845.PNG", alt: "Detailed spend breakdown by department" },
  { src: "/screenshots/IMG_4841.PNG", alt: "Create new production dialog" },
  { src: "/screenshots/IMG_4850.PNG", alt: "Budget version management" },
  { src: "/screenshots/IMG_4851.PNG", alt: "Team and members management" },
  { src: "/screenshots/IMG_4843.PNG", alt: "Reusable folder presets" },
  { src: "/screenshots/IMG_4846.PNG", alt: "Settings and subscription management" },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
    title: "Production-First Budgeting",
    description:
      "Organize budgets by production with custom folders for each department. Track cast & talent, camera & lighting, locations, post-production, and more.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI Rate Estimates",
    description:
      "Get instant rate suggestions powered by AI. Enter a role or item, select your location and production scale, and receive low, average, and high estimates.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Professional PDF Exports",
    description:
      "Generate clean, branded PDF budgets with your company logo, address, and tax calculations. Share polished documents with producers and investors.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Create teams, share invite codes, and manage production members with role-based access. Everyone stays on the same page.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Reports & Analytics",
    description:
      "Visualize spend by category with interactive charts. Compare budgets across productions and track where your money goes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
    ),
    title: "Budget Versions",
    description:
      'Duplicate your budget to explore "what if" scenarios. Lock finalized versions and compare across iterations without losing your original.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
    title: "Folder Presets",
    description:
      "Save your go-to department structure with rates as reusable presets. Import them into any new production with one tap.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l3-3m0 0l3 3m-3-3v9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Invoices & Quotes",
    description:
      "Generate professional invoices and production quotes directly from your budget. Multi-currency support with USD, CAD, GBP, EUR, and more.",
  },
];

const roadmap = [
  {
    title: "Excel Import/Export",
    description: "Import existing budgets from Excel and export in .xlsx format. Seamless migration from spreadsheets.",
    status: "Coming Soon",
  },
  {
    title: "Hot Costs & Daily Cost Reports",
    description: "Auto-generate daily and weekly cost reports showing spend vs. estimate, overages, and remaining budget.",
    status: "Coming Soon",
  },
  {
    title: "Purchase Orders",
    description: "Generate POs from line items, track approval status, and link to vendors. Standard workflow on every professional set.",
    status: "Coming Soon",
  },
  {
    title: "Crew & Vendor Directory",
    description: "Save contacts with rates, roles, and availability. Auto-populate line items from your crew book across productions.",
    status: "Planned",
  },
  {
    title: "Tax Incentive Calculator",
    description: "Estimate rebates by state, province, or country. See how location choices impact your bottom line.",
    status: "Planned",
  },
  {
    title: "Receipt Capture (OCR)",
    description: "Snap a photo of a receipt, auto-extract amount and vendor, and match it to a line item instantly.",
    status: "Planned",
  },
  {
    title: "Deal Memo Generation",
    description: "Generate crew deal memos directly from budget line items with rate, dates, and terms.",
    status: "Planned",
  },
  {
    title: "Accounting Integration",
    description: "Sync with QuickBooks and Xero so production accountants can reconcile without double entry.",
    status: "Planned",
  },
];

/* ─────────────────── Components ─────────────────── */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-lime flex items-center justify-center">
            <span className="text-black text-sm font-bold">F</span>
          </div>
          <span className="font-bold text-lg">Film Budget Planner</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#screenshots" className="hover:text-white transition-colors">Screenshots</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </div>
        <a
          href="#download"
          className="bg-lime text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-lime-dark transition-colors"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 gradient-radial">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="text-sm text-lime font-medium">Now available on iOS &amp; Android</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Budget Smarter.
              <br />
              <span className="text-glow text-lime">Produce Better.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed">
              The professional budget planner built for filmmakers, producers, and
              production managers. AI-powered estimates, team collaboration, and
              beautiful exports — all from your phone.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start" id="download">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Hero phones */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="phone-mockup animate-float" style={{ width: 260 }}>
                <Image
                  src="/screenshots/IMG_4847.PNG"
                  alt="Film Budget Planner - Budget detail view"
                  width={260}
                  height={563}
                  className="rounded-[32px]"
                  priority
                />
              </div>
              <div
                className="phone-mockup absolute -left-20 top-16 opacity-60 scale-90 hidden lg:block"
                style={{ width: 220 }}
              >
                <Image
                  src="/screenshots/IMG_4840.PNG"
                  alt="Film Budget Planner - Productions list"
                  width={220}
                  height={476}
                  className="rounded-[32px]"
                />
              </div>
              <div
                className="phone-mockup absolute -right-20 top-16 opacity-60 scale-90 hidden lg:block"
                style={{ width: 220 }}
              >
                <Image
                  src="/screenshots/IMG_4848.PNG"
                  alt="Film Budget Planner - Summary view"
                  width={220}
                  height={476}
                  className="rounded-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Everything you need to
            <br />
            <span className="text-lime">manage production budgets</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Built by filmmakers, for filmmakers. Every feature is designed to save
            you time and keep your productions on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card bg-bg-card rounded-2xl p-6"
            >
              <div className="text-lime mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section id="screenshots" className="py-24 md:py-32 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            See it in action
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A sleek, dark-themed interface designed for focus. Every screen is
            crafted to help you work faster.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 screenshots-scroll snap-x snap-mandatory">
          {screenshots.map((s) => (
            <div
              key={s.src}
              className="flex-shrink-0 snap-center"
            >
              <div className="phone-mockup" style={{ width: 220 }}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={220}
                  height={476}
                  className="rounded-[32px]"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted text-sm mt-4">
          Swipe to explore all screens &rarr;
        </p>
      </div>
    </section>
  );
}

function AiSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-lime font-medium">Powered by AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Instant rate estimates,
              <br />
              <span className="text-lime">powered by intelligence</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
              Not sure what to budget for a gaffer in Toronto? Or a stunt
              coordinator on a union shoot? Tap the AI button on any line item to
              get low, average, and high rate estimates based on your location,
              production scale, and union status.
            </p>
            <div className="space-y-4">
              {[
                "Location-aware estimates (any city worldwide)",
                "Union and non-union rates",
                "Scales from Ultra-Low to Full Union productions",
                "Low, average, and high ranges for every role",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative bg-bg-card rounded-3xl p-8 border border-white/5 max-w-sm w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">AI Rate Estimate</div>
                  <div className="text-sm text-text-muted">Director of Photography</div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center bg-bg-dark rounded-xl px-4 py-3">
                  <span className="text-sm text-text-muted">Location</span>
                  <span className="text-sm font-medium">Los Angeles, CA</span>
                </div>
                <div className="flex justify-between items-center bg-bg-dark rounded-xl px-4 py-3">
                  <span className="text-sm text-text-muted">Scale</span>
                  <span className="text-sm font-medium">Mid-Budget</span>
                </div>
                <div className="flex justify-between items-center bg-bg-dark rounded-xl px-4 py-3">
                  <span className="text-sm text-text-muted">Union</span>
                  <span className="text-sm font-medium text-lime">Yes</span>
                </div>
              </div>
              <div className="border-t border-white/5 pt-4">
                <div className="text-xs text-text-muted mb-3 uppercase tracking-wider">Estimated Daily Rate</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-xs text-text-muted mb-1">Low</div>
                    <div className="font-mono font-bold text-lg">$800</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-lime mb-1">Average</div>
                    <div className="font-mono font-bold text-lg text-lime">$1,200</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-text-muted mb-1">High</div>
                    <div className="font-mono font-bold text-lg">$1,800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Start for free. Upgrade when you&apos;re ready for unlimited productions
            and pro features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free */}
          <div className="bg-bg-card rounded-2xl p-8 border border-white/5">
            <div className="text-sm text-text-muted font-medium uppercase tracking-wider mb-2">Free</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold font-mono">$0</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-text-secondary text-sm mb-8">Perfect for getting started</p>
            <ul className="space-y-3 mb-8">
              {["2 productions", "5 AI estimates/day", "PDF export (with watermark)", "Basic reports"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 text-sm font-semibold hover:bg-white/5 transition-colors cursor-default">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="bg-bg-card rounded-2xl p-8 border-2 border-lime/30 relative glow-lime-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Popular
            </div>
            <div className="text-sm text-lime font-medium uppercase tracking-wider mb-2">Pro</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold font-mono">$4.99</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-text-secondary text-sm mb-8">For serious filmmakers</p>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited productions",
                "Unlimited AI estimates",
                "Clean PDF exports (no watermark)",
                "CSV export",
                "Multiple budget versions",
                "Company profiles + tax on PDF",
                "Unlimited folder presets",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-lime flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-lime text-black text-sm font-bold hover:bg-lime-dark transition-colors cursor-default">
              Start Pro Trial
            </button>
            <p className="text-center text-xs text-text-muted mt-3">or $39.99/year (save 33%)</p>
          </div>

          {/* Team */}
          <div className="bg-bg-card rounded-2xl p-8 border border-white/5">
            <div className="text-sm text-text-muted font-medium uppercase tracking-wider mb-2">Team</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold font-mono">$9.99</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-text-secondary text-sm mb-8">For production teams</p>
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Pro",
                "Teams & invite codes",
                "Add teams to productions",
                "Role-based access control",
                "Manage production members",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 text-sm font-semibold hover:bg-white/5 transition-colors cursor-default">
              Start Team Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            What&apos;s next
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We&apos;re constantly building new features to help you manage every
            aspect of production finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {roadmap.map((item) => (
            <div
              key={item.title}
              className="bg-bg-card rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.status === "Coming Soon"
                      ? "bg-lime/15 text-lime"
                      : "bg-white/5 text-text-muted"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-bg-card rounded-3xl p-12 md:p-16 border border-white/5 glow-lime relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Ready to take control of
              <br />
              your production budget?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
              Join filmmakers and producers who are already budgeting smarter with
              Film Budget Planner.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="#"
                className="flex items-center gap-3 bg-lime text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-lime-dark transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-lime flex items-center justify-center">
              <span className="text-black text-xs font-bold">F</span>
            </div>
            <span className="font-semibold">Film Budget Planner</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="mailto:support@filmbudgetplanner.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Film Budget Planner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── Page ─────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <AiSection />
        <Pricing />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

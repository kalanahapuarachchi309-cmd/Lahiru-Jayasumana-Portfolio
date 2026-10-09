import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lahiru Jayasumana (MBA) | Candidate for College OBU Vice President",
  description:
    "Candidate for College OBU Vice President, Holy Cross College Kalutara. HCC 1998–2001 Batch. College Head Prefect 2000–2001. 25 Years of Local & International Experience.",
  openGraph: {
    title: "Lahiru Jayasumana (MBA) | Candidate for College OBU Vice President",
    description:
      "Holy Cross College Kalutara • 25 Years of Local & International Experience • College Head Prefect 2000–2001",
    images: ["/hcc-campaign-poster.jpg"],
  },
};

export default function Home() {
  return (
    <main className="main-layout">
      {/* Top Banner Area (Fills space above poster on mobile) */}
      <header className="mobile-top-bar">
        <div className="top-badge">
          <span className="badge-icon">⚜️</span>
          <span>Holy Cross College Kalutara • OBU 2026</span>
          <span className="badge-icon">⚜️</span>
        </div>
      </header>

      {/* Main Poster Display (Centered & 100% uncropped) */}
      <section className="poster-wrapper">
        <img
          src="/hcc-campaign-poster.jpg"
          alt="Holy Cross College Kalutara - Lahiru Jayasumana (MBA) - Candidate for College OBU Vice President"
          className="poster-img"
          fetchPriority="high"
        />
      </section>

      {/* Bottom Action Area (Fills space below poster on mobile) */}
      <footer className="mobile-bottom-bar">
        <div className="action-buttons">
          <a
            href="https://api.whatsapp.com/send?text=Support%20Lahiru%20Jayasumana%20(MBA)%20for%20Holy%20Cross%20College%20Kalutara%20OBU%20Vice%20President!%20View%20campaign%20poster:%20https://lahiru-jayasumana-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-share"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Share Flyer</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lahiru-jayasumana-6b9245157/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="batch-tagline">
          HCC 1998–2001 Batch • College Head Prefect 2000–2001
        </p>
      </footer>
    </main>
  );
}

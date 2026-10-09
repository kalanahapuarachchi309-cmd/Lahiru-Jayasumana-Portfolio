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
    <main className="w-full h-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center p-0 landscape:p-5 bg-[#460138] landscape:bg-[#080107] landscape:bg-[radial-gradient(circle_at_50%_30%,#1a0414_0%,#0a0108_55%,#050004_100%)] overflow-hidden">
      <div className="w-screen h-[100dvh] landscape:w-full landscape:h-auto flex items-center justify-center p-0 m-0">
        <picture className="w-full h-full flex items-center justify-center">
          <source
            media="(orientation: portrait)"
            srcSet="/hcc-poster-mobile-tall.jpg"
          />
          <source
            media="(orientation: landscape)"
            srcSet="/hcc-campaign-poster.jpg"
          />
          <img
            src="/hcc-poster-mobile-tall.jpg"
            alt="Holy Cross College Kalutara - Lahiru Jayasumana (MBA) - Candidate for College OBU Vice President"
            className="w-full h-full landscape:w-auto landscape:h-auto max-w-[100vw] max-h-[100dvh] landscape:max-h-[94vh] landscape:max-h-[94dvh] landscape:max-w-[90vw] object-cover landscape:object-contain object-center block landscape:rounded-xl shadow-none landscape:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.12)] [image-rendering:-webkit-optimize-contrast]"
            fetchPriority="high"
          />
        </picture>
      </div>
    </main>
  );
}

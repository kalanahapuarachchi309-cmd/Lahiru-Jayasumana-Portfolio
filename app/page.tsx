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
    <main className="w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-start md:justify-center p-0 md:p-5 bg-[#080107] bg-[radial-gradient(circle_at_50%_30%,#1a0414_0%,#0a0108_55%,#050004_100%)]">
      <div className="w-full max-w-full md:max-w-none flex items-center justify-center p-0">
        <img
          src="/hcc-campaign-poster.jpg"
          alt="Holy Cross College Kalutara - Lahiru Jayasumana (MBA) - Candidate for College OBU Vice President"
          className="w-full md:w-auto h-auto md:max-h-[94vh] md:max-h-[94dvh] md:max-w-[90vw] block md:rounded-xl shadow-none md:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.12)] [image-rendering:-webkit-optimize-contrast]"
          fetchPriority="high"
        />
      </div>
    </main>
  );
}

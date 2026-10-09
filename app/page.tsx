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
    <main className="w-full h-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center p-1 sm:p-3 md:p-5 bg-[#080107] bg-[radial-gradient(circle_at_50%_30%,#1a0414_0%,#0a0108_55%,#050004_100%)] overflow-hidden">
      <div className="w-full h-full max-w-full max-h-[100dvh] flex items-center justify-center p-0 m-0">
        <img
          src="/hcc-campaign-poster.jpg"
          alt="Holy Cross College Kalutara - Lahiru Jayasumana (MBA) - Candidate for College OBU Vice President"
          className="w-auto h-auto max-w-[100vw] max-h-[98dvh] sm:max-h-[96dvh] md:max-h-[94dvh] object-contain object-center block rounded-md sm:rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.12)] [image-rendering:-webkit-optimize-contrast]"
          fetchPriority="high"
        />
      </div>
    </main>
  );
}

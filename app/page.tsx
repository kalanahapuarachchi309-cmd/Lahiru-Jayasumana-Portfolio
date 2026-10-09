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
    <main
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#080107",
        background: "radial-gradient(circle at 50% 30%, #1a0414 0%, #0a0108 55%, #050004 100%)",
        backgroundAttachment: "fixed",
        margin: 0,
        padding: "16px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
      className="w-screen h-screen min-h-[100dvh] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#080107] overflow-hidden"
    >
      <img
        src="/hcc-campaign-poster.jpg"
        alt="Holy Cross College Kalutara - Lahiru Jayasumana (MBA) - Candidate for College OBU Vice President"
        fetchPriority="high"
        style={{
          maxWidth: "100%",
          maxHeight: "94vh",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
          margin: "auto",
          borderRadius: "12px",
          boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.15)",
          imageRendering: "-webkit-optimize-contrast",
        }}
        className="max-w-full max-h-[94vh] sm:max-h-[94dvh] w-auto h-auto object-contain object-center block m-auto rounded-lg sm:rounded-xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] [image-rendering:-webkit-optimize-contrast]"
      />
    </main>
  );
}

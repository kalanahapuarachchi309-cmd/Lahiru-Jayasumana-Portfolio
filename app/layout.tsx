import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lahiru Jayasumana (MBA) | Senior Management & OBU Vice President Candidate",
  description:
    "Executive Profile of Lahiru Jayasumana (MBA) - Candidate for College OBU Vice President at Holy Cross College Kalutara, General Manager (Madagascar Operations) at Sadaharitha Plantations Limited, former Divisional Manager at David Pieris Motor Company, Member of Asia CEO Community.",
  keywords: [
    "Lahiru Jayasumana",
    "Holy Cross College Kalutara",
    "HCC OBU Vice President",
    "College Head Prefect",
    "Sadaharitha Plantations",
    "David Pieris Motor Company",
    "Asia CEO Community",
    "General Manager Madagascar",
  ],
  authors: [{ name: "Lahiru Jayasumana" }],
  openGraph: {
    title: "Lahiru Jayasumana (MBA) | Senior Management & OBU Vice President Candidate",
    description:
      "25 Years of Local & International Experience. Candidate for College OBU Vice President, Holy Cross College Kalutara.",
    type: "website",
    url: "https://www.linkedin.com/in/lahiru-jayasumana-6b9245157/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased dark">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
          .font-serif-title { font-family: 'Playfair Display', Georgia, serif; }
          svg { max-width: 100%; }
          
          @keyframes floatGentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-gentle {
            animation: floatGentle 5s ease-in-out infinite;
          }

          @keyframes goldShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .gold-shimmer-text {
            background: linear-gradient(90deg, #d4af37 0%, #fff2b2 50%, #d4af37 100%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: goldShimmer 6s linear infinite;
          }

          @keyframes pulseGlow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.04); }
          }
          .animate-pulse-glow {
            animation: pulseGlow 4s ease-in-out infinite;
          }
        `}} />
      </head>
      <body className="min-h-screen bg-[#12030d] text-slate-100 selection:bg-[#d4af37]/30 selection:text-[#ffd700]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lahiru Jayasumana | Executive Leadership Profile",
  description:
    "Executive Profile of Lahiru Jayasumana - General Manager (Madagascar Operations) at Sadaharitha Plantations Limited, former Divisional Manager at David Pieris Motor Company, Member of Asia CEO Community.",
  keywords: [
    "Lahiru Jayasumana",
    "Sadaharitha Plantations",
    "David Pieris Motor Company",
    "Asia CEO Community",
    "General Manager Madagascar",
    "Operations Executive",
    "Sri Lanka Business Leader",
  ],
  authors: [{ name: "Lahiru Jayasumana" }],
  openGraph: {
    title: "Lahiru Jayasumana | Executive Leadership Profile",
    description:
      "General Manager - Madagascar Operations at Sadaharitha Plantations Limited. Asia CEO Community Member.",
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
          svg { max-width: 100%; }
        `}} />
      </head>
      <body className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}

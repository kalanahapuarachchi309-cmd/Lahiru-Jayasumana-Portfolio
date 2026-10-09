import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: "cover",
  themeColor: "#080107",
};

export const metadata: Metadata = {
  title: "Lahiru Jayasumana (MBA) | Candidate for College OBU Vice President",
  description:
    "Candidate for College OBU Vice President, Holy Cross College Kalutara. HCC 1998–2001 Batch. College Head Prefect 2000–2001. 25 Years of Local & International Experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#080107]">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[#080107] text-slate-100 m-0 p-0 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alejandrolima.dev"), // Replace with actual URL when known
  title: {
    default: "Alejandro Lima — Desenvolvedor Full Stack",
    template: "%s | Alejandro Lima",
  },
  description:
    "Portfólio de Alejandro Lima, desenvolvedor full-stack Java especializado em criar aplicações web modernas e interfaces intuitivas.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alejandro Lima",
    title: "Alejandro Lima — Desenvolvedor Full Stack",
    description:
      "Desenvolvedor full-stack Java com experiência em Angular, React e Next.js.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Lima — Desenvolvedor Full Stack",
    description:
      "Desenvolvedor full-stack Java com experiência em Angular, React e Next.js.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}

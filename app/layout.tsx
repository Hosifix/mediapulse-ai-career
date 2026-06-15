import type { Metadata, Viewport } from "next";
import { Unbounded, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mediapulse.example"),
  title: "МедиаПульс — Может ли ИИ помочь подростку выбрать профессию?",
  description:
    "Digital-media спецпроект Школы юного журналиста. Юные журналисты исследуют, где заканчивается подсказка нейросети и начинается личный выбор человека.",
  keywords: [
    "МедиаПульс",
    "Школа юного журналиста",
    "искусственный интеллект",
    "профориентация",
    "выбор профессии",
    "подростки",
    "исследование",
  ],
  authors: [{ name: "Редакция «МедиаПульс»" }],
  openGraph: {
    title: "МедиаПульс — ИИ и выбор профессии подростком",
    description:
      "Опросы, интервью и эксперименты о том, может ли искусственный интеллект быть помощником в профориентации подростков.",
    type: "website",
    locale: "ru_RU",
    siteName: "МедиаПульс",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

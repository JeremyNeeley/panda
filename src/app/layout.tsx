import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pandadigital.dev"),
  title: {
    default: "Panda Digital Systems | Build. Automate. Secure.",
    template: "%s | Panda Digital Systems"
  },
  description:
    "Software engineering, AI automation, product development, cybersecurity, and cloud systems for ambitious teams.",
  openGraph: {
    title: "Panda Digital Systems",
    description: "Build. Automate. Secure.",
    url: "https://pandadigital.dev",
    siteName: "Panda Digital Systems",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

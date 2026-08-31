import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pandadigital.dev"),
  title: {
    default: "Panda Digital Systems | Build. Automate. Secure.",
    template: "%s | Panda Digital Systems"
  },
  description:
    "Worldwide software engineering, AI automation, product development, cybersecurity, and cloud systems for ambitious teams.",
  openGraph: {
    title: "Panda Digital Systems",
    description: "Build. Automate. Secure.",
    url: "https://pandadigital.dev",
    siteName: "Panda Digital Systems",
    type: "website",
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Panda Digital Systems — Build. Automate. Secure." }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Digital Systems",
    description: "Worldwide software, AI, product, cybersecurity, and cloud engineering.",
    images: ["/og-card.png"]
  },
  alternates: { canonical: "https://pandadigital.dev" },
  category: "technology",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Panda Digital Systems",
              url: "https://pandadigital.dev",
              slogan: "Build. Automate. Secure.",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
              sameAs: ["https://github.com/JeremyNeeley"],
              knowsAbout: [
                "Software Engineering",
                "Artificial Intelligence",
                "Automation",
                "Product Development",
                "Cybersecurity",
                "Cloud Systems"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}

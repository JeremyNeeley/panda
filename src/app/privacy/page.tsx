import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for PandaDigital.dev and the Panda Digital Systems project inquiry flow."
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="PRIVACY / PANDA DIGITAL SYSTEMS"
        title="Collect less. Use it for the reason it was provided."
        copy="PandaDigital.dev is designed to work without public user accounts. This page explains the limited information collected through the project inquiry flow."
      />
      <section className="section shell legal-copy">
        <article>
          <h2>Information you provide</h2>
          <p>The Start a Project form may collect your name, email address, company, role, website, country or region, time zone, project description, requested capabilities, budget range, timeline, and optional deadline.</p>
        </article>
        <article>
          <h2>Why it is used</h2>
          <p>Project inquiry information is used to review the request, determine whether Panda Digital Systems may be a useful fit, continue the requested business conversation, and maintain basic lead and delivery records.</p>
        </article>
        <article>
          <h2>Service providers</h2>
          <p>The production site may use infrastructure, database, anti-abuse, analytics, and transactional-email providers to operate the website. Those services should receive only the data needed for their role in delivering or protecting the service.</p>
        </article>
        <article>
          <h2>Security and retention</h2>
          <p>We use server-side validation, access controls, anti-abuse controls, and restricted production credentials. Inquiry data should be retained only while it remains useful for the business relationship, security, legal, or operational recordkeeping.</p>
        </article>
        <article>
          <h2>Your request</h2>
          <p>If you want to correct or delete information you submitted, contact Panda Digital Systems through the same business channel used for the project conversation. A dedicated privacy contact can be published before production launch.</p>
        </article>
        <article>
          <h2>No public account required</h2>
          <p>The v1 portfolio does not require visitors to register, create a password, or maintain a public PandaDigital.dev account.</p>
        </article>
        <p className="legal-note">This page describes the intended v1 website data flow and should be reviewed against the final production providers, jurisdiction, and business requirements before launch.</p>
      </section>
      <Footer />
    </main>
  );
}

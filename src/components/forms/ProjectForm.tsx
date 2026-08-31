"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

const projectTypeChoices = [
  ["build", "Build something new", "A product, application, platform, SaaS, or internal system."],
  ["automate", "Automate something", "Reduce repetitive work with AI, workflows, integrations, or better tooling."],
  ["modernize", "Improve something", "Modernize, stabilize, speed up, or extend an existing system."],
  ["secure", "Secure something", "Review or strengthen applications, APIs, authentication, and architecture."],
  ["cloud", "Cloud & infrastructure", "Deployment, backend systems, DevOps, scalability, or data foundations."],
  ["other", "Something else", "An unusual technical problem that does not fit neatly into a category."]
] as const;

const stages = [
  ["idea", "Starting from an idea"], ["prototype", "Prototype or design"], ["existing", "Existing product"],
  ["production", "Production system"], ["unsure", "Not sure"]
] as const;

const services = ["Strategy & planning", "UI/UX & product design", "Frontend development", "Backend development", "Mobile development", "AI & automation", "Cloud / DevOps", "Cybersecurity", "Full project delivery", "Help me decide"];
const budgets = [["under-2500", "Under $2,500"], ["2500-5000", "$2,500 – $5,000"], ["5000-15000", "$5,000 – $15,000"], ["15000-30000", "$15,000 – $30,000"], ["30000-plus", "$30,000+"], ["unsure", "Not sure yet"]] as const;
const timelines = [["asap", "As soon as possible"], ["2-4-weeks", "Within 2–4 weeks"], ["1-3-months", "Within 1–3 months"], ["later", "Later"], ["exploring", "I'm exploring options"]] as const;

type FormData = {
  projectType: string; description: string; projectStage: string; services: string[]; budget: string; timeline: string;
  deadline: string; name: string; email: string; company: string; website: string; role: string; consent: boolean; websiteTrap: string;
};

const initialData: FormData = { projectType: "", description: "", projectStage: "", services: [], budget: "", timeline: "", deadline: "", name: "", email: "", company: "", website: "", role: "", consent: false, websiteTrap: "" };

export function ProjectForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectType = params.get("type");
    const requestedServices = params.getAll("service").filter((service) => services.includes(service));
    const validTypes = new Set(projectTypeChoices.map(([value]) => value));

    if ((projectType && validTypes.has(projectType as (typeof projectTypeChoices)[number][0])) || requestedServices.length > 0) {
      setData((current) => ({
        ...current,
        projectType: projectType && validTypes.has(projectType as (typeof projectTypeChoices)[number][0]) ? projectType : current.projectType,
        services: requestedServices.length > 0 ? Array.from(new Set([...current.services, ...requestedServices])) : current.services
      }));
    }
  }, []);

  const progress = `${(step / 6) * 100}%`;
  const turnstileRequired = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(data.projectType);
    if (step === 2) return data.description.trim().length >= 20 && Boolean(data.projectStage);
    if (step === 3) return data.services.length > 0;
    if (step === 4) return Boolean(data.budget);
    if (step === 5) return Boolean(data.timeline);
    if (step === 6) return data.name.trim().length >= 2 && /.+@.+\..+/.test(data.email) && data.consent && (!turnstileRequired || Boolean(turnstileToken));
    return false;
  }, [data, step, turnstileRequired, turnstileToken]);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setData((current) => ({ ...current, [key]: value }));
  const toggleService = (service: string) => update("services", data.services.includes(service) ? data.services.filter((item) => item !== service) : [...data.services, service]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!canContinue) return;
    setStatus("submitting"); setMessage("");
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, turnstileToken }) });
      const result = await response.json() as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Submission failed.");
      setStatus("success");
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "We could not submit the project right now.");
    }
  }

  if (status === "success") {
    return <div className="form-success"><span className="success-mark">✓</span><p className="eyebrow">PROJECT RECEIVED</p><h1>Your idea has entered Panda territory.</h1><p>Thanks for telling us what you are working on. We will review the project details and determine the most useful next step.</p><a href="/" className="button button-secondary">Return Home</a></div>;
  }

  return (
    <form className="project-form" onSubmit={submit} noValidate>
      <div className="form-progress" role="progressbar" aria-label="Project intake progress" aria-valuemin={1} aria-valuemax={6} aria-valuenow={step}><span style={{ width: progress }} /></div>
      <div className="form-meta"><span>0{step} / 06</span><span>PROJECT INTAKE</span></div>

      {step === 1 && <FormStep title="What can we help you with?" description="Start with the problem. You do not need to know the technology yet.">
        <div className="choice-grid">{projectTypeChoices.map(([value, title, copy]) => <ChoiceCard key={value} active={data.projectType === value} title={title} copy={copy} onClick={() => update("projectType", value)} />)}</div>
      </FormStep>}

      {step === 2 && <FormStep title="Tell us about the project." description="What are you trying to build or solve?">
        <label className="field"><span>Project or problem</span><textarea rows={8} value={data.description} onChange={(event) => update("description", event.target.value)} placeholder="Tell us what you're working on, what's getting in the way, or what you'd like to create." maxLength={5000} /></label>
        <fieldset className="fieldset"><legend>Do you already have something built?</legend><div className="pill-grid">{stages.map(([value, label]) => <button type="button" aria-pressed={data.projectStage === value} className={data.projectStage === value ? "pill active" : "pill"} onClick={() => update("projectStage", value)} key={value}>{label}</button>)}</div></fieldset>
      </FormStep>}

      {step === 3 && <FormStep title="What kind of help do you need?" description="Choose as many as apply. 'Help me decide' is a perfectly good answer.">
        <div className="service-choice-grid">{services.map((service) => <button type="button" key={service} aria-pressed={data.services.includes(service)} className={data.services.includes(service) ? "service-choice active" : "service-choice"} onClick={() => toggleService(service)}><span>{data.services.includes(service) ? "✓" : "+"}</span>{service}</button>)}</div>
      </FormStep>}

      {step === 4 && <FormStep title="What level of investment are you considering?" description="A range helps us recommend an engagement that matches the size of the problem.">
        <div className="budget-grid">{budgets.map(([value, label]) => <button type="button" aria-pressed={data.budget === value} className={data.budget === value ? "budget-card active" : "budget-card"} onClick={() => update("budget", value)} key={value}>{label}</button>)}</div>
      </FormStep>}

      {step === 5 && <FormStep title="When would you like to start?" description="We will use this to understand urgency and delivery expectations.">
        <div className="budget-grid">{timelines.map(([value, label]) => <button type="button" aria-pressed={data.timeline === value} className={data.timeline === value ? "budget-card active" : "budget-card"} onClick={() => update("timeline", value)} key={value}>{label}</button>)}</div>
        <label className="field field-short"><span>Is there a deadline? <em>Optional</em></span><input value={data.deadline} onChange={(event) => update("deadline", event.target.value)} maxLength={120} placeholder="Example: Investor demo on November 15" /></label>
      </FormStep>}

      {step === 6 && <FormStep title="Who are we speaking with?" description="No account. No password. Just enough information to continue the conversation.">
        <div className="contact-grid">
          <label className="field"><span>Name *</span><input autoComplete="name" value={data.name} onChange={(event) => update("name", event.target.value)} maxLength={120} /></label>
          <label className="field"><span>Work email *</span><input type="email" autoComplete="email" value={data.email} onChange={(event) => update("email", event.target.value)} maxLength={254} /></label>
          <label className="field"><span>Company</span><input autoComplete="organization" value={data.company} onChange={(event) => update("company", event.target.value)} maxLength={160} /></label>
          <label className="field"><span>Role</span><input autoComplete="organization-title" value={data.role} onChange={(event) => update("role", event.target.value)} maxLength={120} /></label>
          <label className="field contact-wide"><span>Website</span><input type="url" value={data.website} onChange={(event) => update("website", event.target.value)} placeholder="https://" maxLength={300} /></label>
          <label className="trap-field" aria-hidden="true">Website confirmation<input tabIndex={-1} autoComplete="off" value={data.websiteTrap} onChange={(event) => update("websiteTrap", event.target.value)} /></label>
        </div>
        <label className="consent-row"><input type="checkbox" checked={data.consent} onChange={(event) => update("consent", event.target.checked)} /><span>It is okay for Panda Digital Systems to contact me about this project. <a href="/privacy" target="_blank" rel="noreferrer">Privacy</a></span></label>
        <TurnstileWidget onToken={setTurnstileToken} />
      </FormStep>}

      {message && <p className="form-error" role="alert">{message}</p>}
      <div className="form-controls">
        {step > 1 ? <button type="button" className="button button-secondary" onClick={() => { setStep(step - 1); setMessage(""); }}>← Previous</button> : <span />}
        {step < 6 ? <button type="button" className="button" disabled={!canContinue} onClick={() => setStep(step + 1)}>Continue <span>→</span></button> : <button type="submit" className="button" disabled={!canContinue || status === "submitting"}>{status === "submitting" ? "Submitting…" : "Submit Project →"}</button>}
      </div>
    </form>
  );
}

function FormStep({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <section className="form-step"><p className="eyebrow">START A PROJECT</p><h1>{title}</h1><p className="form-description">{description}</p>{children}</section>;
}

function ChoiceCard({ active, title, copy, onClick }: { active: boolean; title: string; copy: string; onClick: () => void }) {
  return <button type="button" aria-pressed={active} className={active ? "choice-card active" : "choice-card"} onClick={onClick}><span className="choice-indicator">{active ? "✓" : "+"}</span><strong>{title}</strong><small>{copy}</small></button>;
}

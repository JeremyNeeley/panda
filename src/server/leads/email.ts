import type { LeadInput } from "./schema";

type PublicLead = Omit<LeadInput, "websiteTrap">;

async function sendEmail(payload: { to: string[]; subject: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "Panda Digital Systems <projects@pandadigital.dev>";
  if (!apiKey) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({ from, ...payload }),
    cache: "no-store"
  });

  if (!response.ok) {
    console.error("Resend email failed", response.status, (await response.text()).slice(0, 500));
  }
}

function esc(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] || char);
}

export async function sendLeadEmails(lead: PublicLead) {
  const internal = process.env.LEAD_NOTIFICATION_EMAIL;

  const confirmation = `
    <div style="font-family:Arial,sans-serif;background:#07090d;color:#f7f9fc;padding:32px">
      <p style="color:#42d3ff;font-size:12px;letter-spacing:1px">PANDA DIGITAL SYSTEMS</p>
      <h1 style="font-size:30px">We received your project.</h1>
      <p style="color:#9aa4b2;line-height:1.6">Thanks for reaching out, ${esc(lead.name)}. We received the information you shared about your project and will use it to determine the most useful next step.</p>
      <p style="color:#9aa4b2;line-height:1.6">You do not need to prepare a technical specification. If you know the problem you are trying to solve, we can work forward from there.</p>
      <p style="margin-top:28px"><strong>Build. Automate. Secure.</strong><br><span style="color:#667080">PandaDigital.dev</span></p>
    </div>`;

  await sendEmail({ to: [lead.email], subject: "We received your project — Panda Digital Systems", html: confirmation });

  if (internal) {
    const detail = `
      <div style="font-family:Arial,sans-serif;color:#111">
        <h2>New Panda lead</h2>
        <p><b>Name:</b> ${esc(lead.name)}</p>
        <p><b>Email:</b> ${esc(lead.email)}</p>
        <p><b>Company:</b> ${esc(lead.company || "—")}</p>
        <p><b>Project type:</b> ${esc(lead.projectType)}</p>
        <p><b>Stage:</b> ${esc(lead.projectStage)}</p>
        <p><b>Budget:</b> ${esc(lead.budget)}</p>
        <p><b>Timeline:</b> ${esc(lead.timeline)}</p>
        <p><b>Services:</b> ${lead.services.map(esc).join(", ")}</p>
        <hr><p style="white-space:pre-wrap">${esc(lead.description)}</p>
      </div>`;
    await sendEmail({ to: [internal], subject: `New Panda lead — ${lead.projectType}`, html: detail });
  }
}

import type { LeadInput } from "./schema";

export async function storeLead(lead: Omit<LeadInput, "websiteTrap">) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Lead storage is not configured.");
    }
    console.info("[Panda Digital lead - development only]", lead);
    return;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      authorization: `Bearer ${serviceRoleKey}`,
      "content-type": "application/json",
      prefer: "return=minimal"
    },
    body: JSON.stringify({
      project_type: lead.projectType,
      description: lead.description,
      project_stage: lead.projectStage,
      requested_services: lead.services,
      budget_range: lead.budget,
      timeline: lead.timeline,
      deadline: lead.deadline || null,
      name: lead.name,
      email: lead.email,
      company: lead.company || null,
      website: lead.website || null,
      role: lead.role || null,
      country_region: lead.countryRegion || null,
      time_zone: lead.timeZone || null,
      consent: lead.consent,
      status: "NEW"
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Supabase lead insert failed", response.status, detail.slice(0, 500));
    throw new Error("Lead storage failed.");
  }
}

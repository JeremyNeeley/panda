import { z } from "zod";

export const projectTypes = ["build", "automate", "modernize", "secure", "cloud", "other"] as const;
export const projectStages = ["idea", "prototype", "existing", "production", "unsure"] as const;
export const budgetRanges = ["under-2500", "2500-5000", "5000-15000", "15000-30000", "30000-plus", "unsure"] as const;
export const timelines = ["asap", "2-4-weeks", "1-3-months", "later", "exploring"] as const;

export const leadSchema = z.object({
  projectType: z.enum(projectTypes),
  description: z.string().trim().min(20, "Please tell us a little more about the project.").max(5000),
  projectStage: z.enum(projectStages),
  services: z.array(z.string().trim().min(1).max(80)).min(1).max(10),
  budget: z.enum(budgetRanges),
  timeline: z.enum(timelines),
  deadline: z.string().trim().max(120).optional().default(""),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(160).optional().default(""),
  website: z.union([z.literal(""), z.string().trim().url().max(300)]).optional().default(""),
  role: z.string().trim().max(120).optional().default(""),
  consent: z.literal(true),
  websiteTrap: z.string().max(0).optional().default("")
});

export type LeadInput = z.infer<typeof leadSchema>;

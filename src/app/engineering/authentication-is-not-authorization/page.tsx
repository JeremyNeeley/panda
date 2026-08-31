import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "Authentication Is Not Authorization",
  description: "Panda Engineering field notes on identity, permissions, object-level access, and server-side authorization."
};

export default function Page() {
  return <ArticlePage
    category="SECURITY / ENGINEERING"
    title="Authentication Is Not Authorization"
    dek="Knowing who a user is does not tell the system what that user is allowed to read, change, approve, or trigger."
    readTime="7 MIN READ"
    sections={[
      {
        heading: "Login solves only the identity question.",
        paragraphs: [
          "Authentication answers: who is making this request? Passwords, passkeys, MFA, sessions, and identity providers all help establish that identity.",
          "Authorization answers a different question: may this identity perform this operation on this resource in this context? Many serious application failures happen because a system answers the first question correctly and barely implements the second."
        ]
      },
      {
        heading: "The frontend is not an authorization boundary.",
        paragraphs: [
          "Hiding a button can improve the user experience. It does not prevent a user from calling the underlying endpoint directly.",
          "Sensitive decisions belong in trusted server-side code. Every read, update, delete, export, administrative action, and cross-tenant request should be evaluated against the caller and the resource being accessed."
        ]
      },
      {
        heading: "Object-level access is where multi-tenant systems get dangerous.",
        paragraphs: [
          "A route such as /api/projects/123 might look harmless because the caller is logged in. The actual question is whether project 123 belongs to the caller, the caller's organization, or a scope they are allowed to manage.",
          "IDs are locators, not permissions. Never assume that an unguessable identifier replaces an authorization check."
        ]
      },
      {
        heading: "Roles are useful, but relationships matter too.",
        paragraphs: [
          "Role-based access control works well for broad capabilities such as admin, analyst, or member. Real applications also need resource relationships: project owner, account member, assigned reviewer, billing administrator, regional operator, or service identity.",
          "Good authorization combines stable policy with the current relationship between the actor and the resource."
        ]
      },
      {
        heading: "Default-deny keeps the model understandable.",
        paragraphs: [
          "When new routes and features appear, permissive systems tend to leak access accidentally. A default-deny posture forces the implementation to state why an operation is allowed.",
          "Authorization should also be testable. Add negative tests, cross-tenant tests, privilege-change tests, and audit logging for rejected high-value operations."
        ]
      }
    ]}
    takeaway="Authenticate the actor once. Authorize the operation every time it crosses a meaningful security boundary."
  />;
}

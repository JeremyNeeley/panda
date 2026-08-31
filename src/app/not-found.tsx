import Link from "next/link";
import { PandaMark } from "@/components/PandaMark";

export default function NotFound() {
  return <main className="not-found shell">
    <PandaMark />
    <p className="eyebrow">404 / NETWORK EDGE</p>
    <h1>Lost in the bamboo?</h1>
    <p>This page does not exist—or this panda wandered off the network.</p>
    <Link href="/" className="button">Return Home →</Link>
  </main>;
}

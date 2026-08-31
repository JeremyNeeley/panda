"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Dimension = {
  key: string;
  label: string;
  question: string;
  options: readonly [string, string, number][];
};

const dimensions: Dimension[] = [
  {
    key: "product",
    label: "PRODUCT",
    question: "How clear is the problem and user outcome?",
    options: [
      ["unclear", "Still exploring the problem", 0],
      ["defined", "Problem is clear; scope is moving", 1],
      ["validated", "Users and outcomes are validated", 2]
    ]
  },
  {
    key: "system",
    label: "SYSTEM",
    question: "What state is the software in today?",
    options: [
      ["idea", "Idea / no implementation", 0],
      ["working", "Working prototype or product", 1],
      ["operational", "Production system with real usage", 2]
    ]
  },
  {
    key: "data",
    label: "DATA / AI",
    question: "How ready is the information your system depends on?",
    options: [
      ["scattered", "Scattered, manual, or unknown", 0],
      ["available", "Available but needs structure", 1],
      ["governed", "Structured, owned, and permission-aware", 2]
    ]
  },
  {
    key: "security",
    label: "SECURITY",
    question: "How explicit are permissions and security boundaries?",
    options: [
      ["implicit", "Mostly implicit or still undecided", 0],
      ["partial", "Core controls exist; gaps remain", 1],
      ["designed", "Threats, roles, and boundaries are designed", 2]
    ]
  },
  {
    key: "delivery",
    label: "DELIVERY",
    question: "How repeatable is shipping and operating the system?",
    options: [
      ["manual", "Mostly manual", 0],
      ["repeatable", "Some automation and monitoring", 1],
      ["reliable", "Repeatable delivery, observability, rollback", 2]
    ]
  }
];

const recommendations = [
  {
    max: 3,
    title: "Start with discovery, not a bigger build.",
    copy: "The highest-value next step is reducing uncertainty: define the outcome, identify the riskiest assumption, and prototype only what is necessary to learn."
  },
  {
    max: 6,
    title: "You have enough signal for a focused engineering plan.",
    copy: "The system is taking shape, but one or two boundaries still carry outsized risk. Architecture, data, security, or delivery should be made explicit before adding more surface area."
  },
  {
    max: 8,
    title: "You are ready for production-minded engineering.",
    copy: "The fundamentals are in place. The next gains usually come from closing integration gaps, improving reliability, hardening security, and automating delivery or operations."
  },
  {
    max: 10,
    title: "The foundation is strong enough to optimize and scale.",
    copy: "Your attention can move from basic readiness toward performance, leverage, automation, deeper AI capability, resilience, and product growth."
  }
];

export function SystemReadinessMapper() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const complete = Object.keys(answers).length === dimensions.length;
  const score = Object.values(answers).reduce((total, value) => total + value, 0);
  const recommendation = useMemo(
    () => recommendations.find((item) => score <= item.max) ?? recommendations[recommendations.length - 1],
    [score]
  );

  return (
    <div className="readiness-tool">
      <div className="readiness-header">
        <div>
          <p className="eyebrow">LAB / 001 · INTERACTIVE</p>
          <h2>Map the system before choosing the stack.</h2>
        </div>
        <div className="readiness-score" aria-live="polite">
          <span>READINESS</span>
          <strong>{complete ? `${score}/10` : `${Object.keys(answers).length}/5 answered`}</strong>
        </div>
      </div>

      <div className="readiness-dimensions">
        {dimensions.map((dimension, index) => (
          <fieldset className="readiness-dimension" key={dimension.key}>
            <legend>
              <span>0{index + 1} / {dimension.label}</span>
              <strong>{dimension.question}</strong>
            </legend>
            <div className="readiness-options">
              {dimension.options.map(([value, label, points]) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={answers[dimension.key] === points}
                  className={answers[dimension.key] === points ? "readiness-option active" : "readiness-option"}
                  onClick={() => setAnswers((current) => ({ ...current, [dimension.key]: points }))}
                >
                  <span>{answers[dimension.key] === points ? "✓" : "+"}</span>
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className={complete ? "readiness-result visible" : "readiness-result"} aria-live="polite">
        {complete ? (
          <>
            <p className="eyebrow">PANDA SIGNAL / {score.toString().padStart(2, "0")}</p>
            <h3>{recommendation.title}</h3>
            <p>{recommendation.copy}</p>
            <div className="hero-actions">
              <Link className="button" href="/start-project">Discuss the system <span>→</span></Link>
              <button type="button" className="button button-secondary" onClick={() => setAnswers({})}>Reset map</button>
            </div>
          </>
        ) : (
          <p>Answer all five dimensions to generate a readiness signal.</p>
        )}
      </div>
    </div>
  );
}

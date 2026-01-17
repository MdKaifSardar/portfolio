export interface AchievementHighlight {
  id: number;
  metric: string;
  title: string;
  description: string;
  proof?: string;
}

export interface CertificationHighlight {
  id: number;
  title: string;
  issuer: string;
  year: string;
  focus: string;
  credentialId?: string;
  credentialUrl?: string;
}

export const achievementHighlights: AchievementHighlight[] = [
  {
    id: 1,
    metric: "40K+",
    title: "rituals completed each month",
    description:
      "Habit Coach users stay on track thanks to automation hand-offs and behavioral nudges baked into the product.",
    proof: "Habit Coach Mobile Suite",
  },
  {
    id: 2,
    metric: "18%",
    title: "conversion lift for Commerce Pulse",
    description:
      "Tuned experimentation pipelines and journey analytics helped the merchandising team unlock a double-digit uplift.",
    proof: "Commerce Pulse Intelligence",
  },
  {
    id: 3,
    metric: "<120ms",
    title: "p95 interaction time across hero experiences",
    description:
      "Perf budgets, streaming data, and suspense boundaries keep complex 3D scenes under the latency ceiling.",
  },
];

export const certificationHighlights: CertificationHighlight[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    focus:
      "Distributed systems, resiliency patterns, and cost-aware cloud architecture.",
    credentialId: "AWS-ASA-9XY2",
  },
  {
    id: 2,
    title: "Google Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    year: "2022",
    focus:
      "Model lifecycle management, Vertex AI pipelines, and responsible AI guardrails.",
    credentialId: "GCP-ML-44FT",
  },
  {
    id: 3,
    title: "Meta Certified React Native Developer",
    issuer: "Meta",
    year: "2021",
    focus:
      "Native module bridges, performance profiling, and release automation across platforms.",
  },
];

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
    metric: "30% faster",
    title: "EduTouch LMS launch velocity",
    description:
      "Edge rendering, streaming, and API caching trimmed page loads by 30% and cut latency 25% across App Router classrooms.",
    proof: "EduTouch platform",
  },
  {
    id: 2,
    metric: "18 secure APIs",
    title: "HashTrust identity workspace",
    description:
      "Next.js + FastAPI stack anchors credentials on-chain with GenAI fraud checks, keeping onboarding under five minutes.",
    proof: "HashTrust platform",
  },
  {
    id: 3,
    metric: "3x throughput",
    title: "ResumeBro AI resume studio",
    description:
      "Server Actions + Firebase pipelines deliver 99% typed schemas and generate resumes three times faster for candidates.",
    proof: "ResumeBro",
  },
];

export const certificationHighlights: CertificationHighlight[] = [
  {
    id: 1,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    year: "2024",
    focus:
      "Andrew Ng specialization track covering linear regression, logistic regression, and regularization best practices.",
  },
  {
    id: 2,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    year: "2024",
    focus:
      "Neural networks, decision trees, and optimization techniques guided by Andrew Ng's ML Specialization.",
  },
  {
    id: 3,
    title: "Unsupervised Learning, Recommenders, and Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    year: "2024",
    focus:
      "Clustering, anomaly detection, recommender pipelines, and RL foundations from the Andrew Ng-led series.",
  },
];

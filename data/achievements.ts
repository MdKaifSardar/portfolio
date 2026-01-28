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
    metric: "6+ Shipped",
    title: "Freelance & Enterprise Projects",
    description:
      "Delivered end-to-end full-stack platforms for education, trading, and analytics clients, maintaining strict SLAs.",
    proof: "Career Output",
  },
  {
    id: 2,
    metric: "10K+ Users",
    title: "Cumulative Client Reach",
    description:
      "Active daily users across deployed platforms like Stitch My Clothes, EduTouch and JeoNFT, scaling horizontally without friction.",
    proof: "Global Impact",
  },
  {
    id: 3,
    metric: "99.9% Uptime",
    title: "System Reliability",
    description:
      "Architecture designed for fault tolerance and high availability, ensuring mission-critical exams and trades never fail.",
    proof: "Performance",
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
    year: "2025",
    focus:
      "Neural networks, decision trees, and optimization techniques guided by Andrew Ng's ML Specialization.",
  },
  {
    id: 3,
    title: "Unsupervised Learning, Recommenders, and Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    year: "2025",
    focus:
      "Clustering, anomaly detection, recommender pipelines, and RL foundations from the Andrew Ng-led series.",
  },
  {
    id: 4,
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    year: "2025",
    focus:
      "Build foundational deep learning models, understand neural network architecture, and apply deep learning to real-world problems.",
  },
];

# ResumeBro 🚀

**ResumeBro** is an advanced, AI-powered resume intelligence platform designed to streamline the recruitment and job application process. By leveraging Large Language Models (LLMs), it transforms unstructured resumes and job descriptions into strictly typed, validated JSON data, enabling powerful analysis and tailoring capabilities.

![ResumeBro Banner](https://via.placeholder.com/1200x400?text=ResumeBro+AI+Platform)

## ✨ Key Features

### 🧠 Intelligent Parsing Engine

- **Resume Parsing**: Upload PDF or TXT resumes to extract comprehensive data including Contact Info, Education, Experience, Skills, and Projects.
- **Job Description Parsing**: Analyze JDs to extract Requirements, Responsibilities, and Eligibility criteria.
- **Strict Schema Validation**: All parsed data is validated against rigorous Zod schemas to ensure 99% type safety and consistency.
- **Granular Control**: Review extraction at every stage—Raw Text, Segmentation, and Block Parsing—with a built-in "Unit Testing Playground".

### 📊 Interactive Dashboard

- **Secure Workspace**: User-specific dashboard protected by Firebase Authentication (Google & Email/Password).
- **Session Persistence**: Robust server-side session management using HTTP-only cookies.
- **Data Management**: View, delete, and organize your parsed Resumes and Job Descriptions in a clean, paginated interface.

### 📝 Advanced Editors

- **Full-Fledged Resume Editor**: Manually refine every aspect of your parsed resume. Supports complex nested fields like Project tech stacks, Education details, and more.
- **JD Editor**: Edit and curate job description data to ensure accuracy before generation.
- **Real-Time Updates**: Changes are saved instantly to your Firestore profile.

### 🛠️ Technical Highlights

- **Architecture**: Scalable Serverless Architecture on **Next.js 14**.
- **Backend**: Secure **React Server Actions** for all database mutations.
- **State Management**: **Redux Toolkit** for managing complex parser pipelines and editor states.
- **Database**: **Cloud Firestore** for flexible, real-time NoSQL data storage.
- **Styling**: Beautiful, responsive UI built with **Tailwind CSS**.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+
- npm or yarn
- A Firebase Project
- An OpenRouter (or compatible LLM) API Key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/resumebro.git
   cd resumebro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your keys:

   ```env
   # Firebase Client SDK
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Firebase Admin SDK (Server Side)
   FIREBASE_CLIENT_EMAIL=your_service_account_email
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."

   # LLM Configuration
   OPENROUTER_API_KEY=your_openrouter_key
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/                  # Next.js App Router Pages
├── components/           # React Components
│   ├── Dashboard/        # Dashboard & Editors
│   ├── ResumeParser/     # Parsing Pipeline Components
│   └── ...
├── lib/
│   ├── actions/          # Server Actions (Auth, Data, Parsing)
│   ├── firebase/         # Firebase Config (Client & Admin)
│   ├── models/           # TypeScript Interfaces & Zod Schemas
│   └── state/            # Redux Slices & Store
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# AI Content Generator

This is a [Next.js](https://nextjs.org) project designed to help users generate various types of content using AI. It features a dashboard to access different content generation tools.

## 📸 Screenshot

![AI Content Generator Dashboard](https://github.com/user-attachments/assets/2f24af55-1665-43bf-8826-aaee4ccb890d)

## ✨ Features

-   **AI Content Generation Dashboard:** Access various AI-powered content generation templates.
-   **Responsive Design:** Built with Tailwind CSS for a mobile-first and responsive user interface.
-   **Settings Page:** Allows users to view their profile information.
-   **History Page:** (Placeholder) Intended for displaying generated content history.

## 🚀 Technology Stack

-   **[Next.js](https://nextjs.org/)**: A powerful React framework for building production-ready applications. It enables server-side rendering (SSR) and static site generation (SSG), improving performance and SEO. In this project, it provides the foundational structure for routing, API routes, and optimized builds.
-   **[React.js](https://react.dev/)**: The core JavaScript library for building user interfaces. It is used to construct all the interactive components of the application, including the dashboard, sidebar, and content generation interfaces, providing a declarative way to manage the UI state.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A highly customizable, utility-first CSS framework. It allows for rapid UI development by enabling direct application of utility classes in HTML, significantly reducing the need for custom CSS and ensuring a consistent design system across the dashboard.
-   **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed superset of JavaScript that compiles to plain JavaScript. It enhances code quality and maintainability by catching errors early during development, improving code readability, and providing robust tooling support for a more predictable and scalable codebase.
-   **[Lucide React](https://lucide.dev/)**: A collection of open-source, customizable SVG icons designed for React applications. These icons are integrated into various parts of the UI, such as the sidebar navigation, to provide clear visual cues and enhance the user experience.

## ⚙️ Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have Node.js and npm (or Bun) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd ai-content-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    bun install
    ```

### Environment Variables

Create a `.env.local` file in the root directory with the following environment variable:

```bash
GROQ_API_KEY=your_groq_api_key_here
```

You can get your Groq API key from [https://console.groq.com/](https://console.groq.com/).

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
.
├── app/
│   ├── api/
│   │   └── generate-content/    # API route for content generation
│   │       └── route.ts
│   ├── components/              # Reusable React components (e.g., Sidebar, Navbar)
│   ├── context/                 # React Context for app state management
│   │   └── AuthContext.tsx
│   ├── dashboard/               # Dashboard pages and content generation templates
│   ├── history/                 # History page (placeholder)
│   ├── settings/                # Settings page
│   ├── globals.css              # Global styles (Tailwind CSS imports and custom rules)
│   ├── layout.tsx               # Root layout for the application
│   └── page.tsx                 # Landing page
├── public/                      # Static assets
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

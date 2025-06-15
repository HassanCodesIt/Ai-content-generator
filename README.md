# AI Content Generator

This is a [Next.js](https://nextjs.org) project designed to help users generate various types of content using AI. It features a custom authentication system and a dashboard to access different content generation tools.

## ✨ Features

-   **Custom Authentication:** Sign up and log in with a custom-built authentication system.
    -   Separate **Sign Up** and **Sign In** pages with a modern, clean design.
    -   User data is stored in a `users.json` file on the server (see **Important Note on Authentication** below).
-   **AI Content Generation Dashboard:** Access various AI-powered content generation templates.
-   **Responsive Design:** Built with Tailwind CSS for a mobile-first and responsive user interface.
-   **Settings Page:** Allows users to manage their profile and log out.
-   **History Page:** (Placeholder) Intended for displaying generated content history.

## ⚠️ Important Note on Authentication

For demonstration purposes, the authentication system in this project stores user data (usernames and passwords) in a plain `users.json` file on the server. **This approach is highly insecure and is NOT suitable for production environments.**

In a real-world application, you **MUST** use a secure backend with a proper database (e.g., PostgreSQL, MongoDB), implement strong password hashing (e.g., bcrypt), secure session management (e.g., JWTs, server-side sessions), and other security best practices.

## 🚀 Technology Stack

-   **[Next.js](https://nextjs.org/)**: A powerful React framework for building production-ready applications. It enables server-side rendering (SSR) and static site generation (SSG), improving performance and SEO. In this project, it provides the foundational structure for routing, API routes, and optimized builds.
-   **[React.js](https://react.dev/)**: The core JavaScript library for building user interfaces. It is used to construct all the interactive components of the application, including the authentication forms, dashboard, sidebar, and content generation interfaces, providing a declarative way to manage the UI state.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A highly customizable, utility-first CSS framework. It allows for rapid UI development by enabling direct application of utility classes in HTML, significantly reducing the need for custom CSS and ensuring a consistent design system across the modern authentication pages and dashboard.
-   **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed superset of JavaScript that compiles to plain JavaScript. It enhances code quality and maintainability by catching errors early during development, improving code readability, and providing robust tooling support for a more predictable and scalable codebase.
-   **[Lucide React](https://lucide.dev/)**: A collection of open-source, customizable SVG icons designed for React applications. These icons are integrated into various parts of the UI, such as the sidebar navigation, to provide clear visual cues and enhance the user experience.
-   **Node.js File System API (`fs`)**: A built-in Node.js module that enables interaction with the file system. In this project, it's specifically used by the custom authentication API route (`app/api/auth/route.ts`) to read from and write to the `users.json` file, serving as a simple, file-based storage for user data during development.
-   **REST API**: The custom authentication logic, implemented within the Next.js API routes (`app/api/auth/route.ts`), adheres to REST (Representational State Transfer) architectural principles. This means it utilizes standard HTTP methods (like `POST`) and communicates through JSON payloads, providing a clear, stateless, and structured interface for the client-side application to interact with the server for user sign-up and login operations.

## ⚙️ Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have Node.js and Bun installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd ai-content-generator
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Running the Development Server

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
. 금
├── app/
│   ├── api/
│   │   └── auth/             # API route for custom authentication (login/signup)
│   │       └── route.ts
│   ├── components/         # Reusable React components (e.g., Sidebar, Navbar)
│   ├── context/            # React Context for authentication state management
│   │   └── AuthContext.tsx
│   ├── dashboard/          # Dashboard pages and content generation templates
│   ├── history/            # History page (placeholder)
│   ├── sign-in/            # Sign In page
│   ├── sign-up/            # Sign Up page
│   ├── globals.css         # Global styles (Tailwind CSS imports and custom rules)
│   ├── layout.tsx          # Root layout for the application
│   └── page.tsx            # Landing page
├── public/                 # Static assets
├── users.json              # (IMPORTANT) File-based user data storage for demo auth
├── .env.local              # Environment variables
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── bun.lockb
```

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# wtw - YouTube Video Browser

This project is a web application for browsing and watching YouTube videos, built with a modern frontend stack. It allows users to view a grid of videos, filter them, and watch random selections. The videos are scraped from a telegram community 

## ✨ Features

*   **Video Grid:** Displays a collection of videos in a clean, grid-based layout.
*   **Filtering:** Allows users to filter the videos based on certain criteria.
*   **Random Video:** A feature to watch a randomly selected video.
*   **Pagination:** Navigate through multiple pages of videos.
*   **Responsive Design:** The UI is built to be responsive and work on different screen sizes.

## 🛠️ Tech Stack & Resources

This project utilizes a variety of modern web development tools and libraries:

### Core Frameworks & Libraries
*   **[React](https://react.dev/):** A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/):** A next-generation frontend tooling that provides a faster and leaner development experience.
*   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
*   **[SWR](https://swr.vercel.app/):** A React Hooks library for data fetching, providing features like caching, revalidation, and more.

### Styling
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
*   **[clsx](https://github.com/lukeed/clsx):** A tiny utility for constructing `className` strings conditionally.
*   **[tailwind-merge](https://github.com/dcastil/tailwind-merge):** A utility to merge Tailwind CSS classes without style conflicts.
*   **[PostCSS](https://postcss.org/):** A tool for transforming CSS with JavaScript plugins.
*   **[Autoprefixer](https://github.com/postcss/autoprefixer):** A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

### Tooling & Linting
*   **[ESLint](https://eslint.org/):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript.
*   **[Vercel Analytics](https://vercel.com/analytics):** Used for tracking website traffic and user engagement.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and a package manager like `npm`, `yarn`, or `bun` installed.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/shalomkerry/wtw.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd wtw
    ```
3.  Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    # or
    bun install
    ```

## 📜 Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev` or `bun dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

*   `npm run build` or `bun build`: Builds the app for production to the `dist` folder.

*   `npm run lint` or `bun lint`: Lints the codebase using ESLint to find and fix problems.

*   `npm run preview` or `bun preview`: Serves the production build locally to preview it.

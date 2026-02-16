# Jitsi Meet - Source Installer Documentation

This repository contains the source files for the Jitsi Meet - Source Installer documentation, built with [Nextra](https://nextra.site/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and viewing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:3000` to see the documentation.

## Building for Production

To create a static, production-ready build of your site, run the following command:

```bash
npm run build
```
This will generate the static files in the `out` directory.

## Deployment to GitHub Pages

To deploy the documentation to GitHub Pages, follow these steps:

1.  **Install the `gh-pages` package:**
    This is a one-time setup step to install the deployment utility.
    ```bash
    npm install gh-pages --save-dev
    ```

2.  **Configure `next.config.mjs`:**
    Your `next.config.mjs` must be configured for static export. This involves setting `output: 'export'` and disabling image optimization. If deploying to a repository subdirectory (e.g., `https://<username>.github.io/<repo-name>/`), you must also set the `basePath` property.

    ```javascript
    // next.config.mjs
    // ...
    export default withNextra({
      output: 'export',
      // basePath: '/your-repo-name',
      images: {
        unoptimized: true,
      },
    })
    ```

3.  **Deploy:**
    Run the deploy script from your `package.json`:
    ```bash
    npm run deploy
    ```
    This command builds your site and pushes the contents of the `out` directory to the `gh-pages` branch on GitHub.

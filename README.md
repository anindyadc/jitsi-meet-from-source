# Jitsi Meet - Source Installer Documentation

This repository contains the source files for the Jitsi Meet - Source Installer documentation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and viewing purposes.

### Prerequisites

You need to have Python 3 installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Create and activate a virtual environment:**

    For macOS and Linux:
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

    For Windows:
    ```bash
    python -m venv .venv
    .venv\Scripts\activate
    ```

3.  **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Start the development server:**

    ```bash
    mkdocs serve
    ```

    Open your browser and navigate to `http://127.0.0.1:8000/` to see the documentation.

## Building the documentation

To build the static site from the documentation sources, run the following command:

```bash
mkdocs build
```

The static site will be generated in the `site` directory.

## Deployment

You can deploy the documentation to GitHub Pages using the following command:

```bash
mkdocs gh-deploy
```

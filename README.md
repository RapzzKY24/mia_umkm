# MIA UMKM - MSME Digital Directory Platform

**MIA UMKM** is a modern web application designed to empower and showcase Micro, Small, and Medium Enterprises (MSMEs/UMKM). Built with **Next.js** and **Tailwind CSS**, this platform serves as a digital directory that allows users to discover local businesses, view detailed profiles, and locate them via interactive maps.

The project emphasizes a smooth user experience with advanced animations powered by **GSAP** and responsive design principles.

## 🛠 Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
* **Maps:** [Leaflet](https://leafletjs.com/) & React Leaflet
* **Icons:** Lucide React
* **Containerization:** Docker

## ✨ Key Features

* **🔍 Advanced Search & Discovery:** Users can search for businesses by name or filter them by category and location.
* **🗺️ Interactive Maps:** Integrated map view to visualize MSME locations dynamically using Leaflet.
* **🎨 Immersive UI/UX:** High-quality animations and transitions powered by GSAP for a polished feel.
* **📱 Fully Responsive:** Optimized for all devices, featuring a mobile-first navigation design.
* **🌓 Dark/Light Mode:** Built-in theme switching capability for user preference.
* **📄 Detailed Business Profiles:** Dedicated pages for each MSME showcasing products, descriptions, and galleries.

## 📂 Project Structure

```text
.
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── umkm/           # Directory listing & details pages
│   │   ├── search/         # Search functionality page
│   │   └── mitra/          # Partnership page
│   ├── components/         # Reusable UI components (Navbar, Cards, etc.)
│   ├── data/               # Static JSON data (mock data for UMKMs)
│   ├── hooks/              # Custom React hooks (useMap, useCarousel, etc.)
│   ├── lib/                # Utility libraries (GSAP config)
│   └── utils/              # Helper functions
├── Dockerfile              # Docker configuration
├── next.config.mjs         # Next.js configuration
└── tailwind.config.js      # Tailwind CSS configuration
````

## 🚀 Getting Started

### 1\. Prerequisites

Ensure you have the following installed:

  * [Node.js](https://nodejs.org/) (v18 or higher)
  * [NPM](https://www.npmjs.com/) or Yarn

### 2\. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd mia_umkm
npm install
```

### 3\. Running Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the application.

### 4\. Production Build

To build the application for production:

```bash
npm run build
npm start
```

-----

## 🐳 Docker Deployment

This project includes a `Dockerfile` for easy containerization.

1.  **Build the Image:**

    ```bash
    docker build -t mia-umkm-app .
    ```

2.  **Run the Container:**

    ```bash
    docker run -p 3000:3000 mia-umkm-app
    ```

The application will be accessible at `http://localhost:3000`.


## 📄 License

This project is open-source and available under the **MIT License**.

-----

Copyright © 2025 RapzzKY

```
```

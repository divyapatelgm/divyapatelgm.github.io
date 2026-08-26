# Premium Developer Portfolio - Divya Patel G M

A modern, fast, and fully responsive Developer Portfolio built from scratch using **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** + **GSAP** for premium micro-animations and scroll-driven interactions.

## 🚀 Features

* **Parallax Hero Section:** Fluid typography scaling, floating backdrop particles, and smooth parallax image shifts.
* **Dual-Layout Skills Cloud:** Desktop features an interactive, mouse-tracked 3D depth constellation; mobile and tablet screen sizes degrade gracefully to a responsive cards grid.
* **GSAP Horizontal Projects Showcase:** Replicates the exact pin-and-slide horizontal card track of the reference portfolio on desktop with lazy loading and high-framerate image-zoom overlays.
* **Interactive Vertical Timeline:** A scroll-revealed history timeline displaying internship highlights at GEM Ventures and academic projects.
* **Fully Functional Contact Form:** Integrated with **EmailJS** for direct client inbox delivery, including client validation, loading states, and custom toast responses.
* **Theme System:** A complete dark and light mode provider cached to `localStorage` (defaulting to deep-charcoal dark theme).
* **Springy Cursor Follower:** Custom precision pointer dot and lag-following springy ring (disabled on touch devices).
* **SEO Optimized:** Structured HTML5 semantics, descriptive page metadata, and fast bundle execution.

---

## 📁 Folder Structure

Here is an overview of the clean, scalable folder architecture:

```text
divya_portfolio/
├── .env.example          # Environment variables template
├── index.html            # Core entry point (HTML skeleton with SEO meta tags)
├── package.json          # Dependency mappings
├── vite.config.ts        # Vite plugins configuration (React + Tailwind CSS v4)
└── src/
    ├── main.tsx          # TypeScript entry mounting App
    ├── App.tsx           # Layout assembler containing page routes/sections
    ├── index.css         # Styling stylesheet (Tailwind v4 imports + custom tokens)
    ├── App.css           # Cleared (re-routed to index.css)
    ├── assets/           # Local media assets (copied from reference)
    │   ├── hero-portrait.jpeg
    │   ├── project-aiml.jpg
    │   ├── project-hostel.jpg
    │   ├── project-students.jpg
    │   └── project-translator.jpg
    ├── components/
    │   ├── theme-provider.tsx     # Context provider for dark/light themes
    │   └── ui/
    │       ├── cursor.tsx         # Interactive follower cursor
    │       ├── magnetic-button.tsx # Coordinates pull to cursor hover
    │       ├── mouse-glow.tsx     # Radial cursor background glow
    │       ├── smooth-scroll.tsx  # Lenis scroll controller
    │       └── split-text.tsx     # Text split transition
    └── sections/
        ├── nav.tsx                # Glassmorphic header nav + mobile drawer
        ├── hero.tsx               # Introduction column + profile cards
        ├── about.tsx              # Sticky title + biography tags
        ├── skills.tsx             # constellation / grid selector
        ├── projects.tsx           # Horizontal GSAP slide track
        ├── experience.tsx         # Scroll timeline
        ├── education.tsx          # Degree & GPA card
        ├── certifications.tsx     # Awards & credentials grid
        └── contact.tsx            # EmailJS form + details linkers
```

---

## 🛠️ Local Setup & Installation

Follow these steps to set up and run the project locally on your machine:

1. **Clone or Navigate to the Directory:**
   ```bash
   cd d:/divya_portfolio
   ```

2. **Install Dependencies:**
   Uses standard package installation to fetch React, Tailwind CSS v4, GSAP, Framer Motion, Lenis, and EmailJS.
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and populate your EmailJS credentials:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and fill in the values:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the Development Server:**
   Launch Vite's hot-reloading local dev server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

5. **Build for Production:**
   Compile and bundle assets to the static `dist/` directory:
   ```bash
   npm run build
   ```

---

## 📧 EmailJS Setup Guide (Gmail Delivery)

EmailJS allows you to receive contact submissions directly in your Gmail inbox without requiring a backend server. Follow this guide to set it up:

### Step 1: Sign Up
Go to [EmailJS Sign Up](https://dashboard.emailjs.com/sign-up) and create a free account.

### Step 2: Add Email Service
1. Log in to your EmailJS Dashboard.
2. Click **Email Services** -> **Add Service**.
3. Select **Gmail** from the list.
4. Click **Connect Account**, choose your Gmail account (`divyapatelgm220604@gmail.com`), and authorize EmailJS.
5. Note down the **Service ID** (e.g. `service_xxxxxx`).

### Step 3: Create Email Template
1. Go to **Email Templates** -> **Create New Template**.
2. Customize your email body using the form parameter tags:
   * **Subject:** `New Portfolio Contact: {{subject}}`
   * **Body:**
     ```text
     You received a new message from your portfolio:

     Name: {{from_name}}
     Email: {{reply_to}}
     Subject: {{subject}}

     Message:
     {{message}}
     ```
3. Click **Save**.
4. Note down the **Template ID** (e.g. `template_xxxxxx`).

### Step 4: Retrieve Public API Key
1. Go to the **Account** section or **API Keys** in the lower left menu.
2. Under **Public Key**, copy your string.
3. Save these three keys into your `.env` file as documented in the Setup section.

---

## ☁️ Deployment Instructions

The static bundle produced in `dist/` is ready to host on zero-cost services:

### 1. Vercel (Recommended)
1. Install Vercel CLI globally or use the Vercel Dashboard.
2. **Dashboard Method:**
   * Push your project to GitHub.
   * Import the repository in Vercel.
   * Under **Environment Variables**, add:
     * `VITE_EMAILJS_SERVICE_ID`
     * `VITE_EMAILJS_TEMPLATE_ID`
     * `VITE_EMAILJS_PUBLIC_KEY`
   * Vercel will automatically detect Vite and deploy.
3. **CLI Method:**
   * Run `npx vercel` in the project root and follow the prompts.

### 2. Netlify
1. Log into your Netlify dashboard.
2. Import your GitHub repository.
3. Set the build parameters:
   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist`
4. Under **Site Configuration** -> **Environment variables**, set your three VITE_EMAILJS variables.
5. Click **Deploy Site**.

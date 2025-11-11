# LuxeSculpt™ Performance — Proto-01 Final Build  
**Version:** v1.0 — November 2025  
**Domain:** https://www.luxesculptperformance.com  
**Deployed via:** Vercel + GitHub Pages  
**Author:** Sloane Sterling  

---

## 🧠 Overview
This is the **production baseline build** for **LuxeSculpt™ Proto-01**, the first release of the LuxeSculpt Performance Division.  
It contains the full LuxeSculpt landing page, navigation, styling, and SEO setup that’s currently live at the official domain.  
Future divisions (LuxeRun™, LuxeFlow™, LuxeGoat™, LuxeCycle™) will branch from this foundation.

---

## 📂 Project Structure
app/
components/ → React components (NavBar, CartIcon, etc.)
context/ → Global cart and state logic
brand/ → Brand schemas and metadata
run/ → JSON-LD product schemas for LuxeRun division
luxesculpt/ → LuxeSculpt landing page ( hero video, fabric, mapping )
public/
images/ → Product and brand visuals
Logos/ → Publication logos (Vogue, Nike, Shape, etc.)
globals.css → Tailwind global styles
next.config.js → Next.js build configuration
postcss.config.js → PostCSS setup
tailwind.config.js → Tailwind CSS theme settings
package.json → Dependencies and scripts
README.md → This file

---

## 🌐 Deployment Info
- Hosted on **Vercel**  
- Repository: [`sloanesterling.github.io`](https://github.com/sloanesterling/sloanesterling.github.io)  
- Auto-deploys on push to `main`  
- Domain: **www.luxesculptperformance.com**  
- SSL Certificate: Active via Let’s Encrypt  

---

## 🪄 Metadata & SEO
- Integrated Open Graph + Twitter Card tags  
- Optimized for Google Search Indexing  
- Share image: `/public/images/luxesculpt/engineered-fabric.png`  
- Title & description set for high-performance athletic compression apparel  

---

## 🛠️ Restore Instructions
To restore or redeploy this exact build:

```bash
# 1️⃣ Clone or unzip the project
git clone https://github.com/sloanesterling/sloanesterling.github.io.git
cd sloanesterling.github.io

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start local development
npm run dev

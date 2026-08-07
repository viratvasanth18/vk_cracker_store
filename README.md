# VK Crackers - Premium Fireworks Landing Page & Price List Viewer

A modern, high-performance, and responsive landing website for **VK Crackers** (Sivakasi Fireworks). Built with React and Tailwind CSS, this application enables customers to explore fireworks products, view the complete price list online, download the official price list PDF, and place direct orders via WhatsApp.

---

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Technology Stack](#2-technology-stack)
- [3. Project Structure](#3-project-structure)
- [4. Main Website Features](#4-main-website-features)
- [5. PDF Price List Handling](#5-pdf-price-list-handling)
- [6. WhatsApp Handling](#6-whatsapp-handling)
- [7. Price and Product Management](#7-price-and-product-management)
- [8. Deployment](#8-deployment)
- [9. Client Maintenance Guide](#9-client-maintenance-guide)
- [10. Important Notes](#10-important-notes)

---

## 1. Project Overview

VK Crackers is a client-facing web application designed to showcase a premium Sivakasi fireworks collection. The website provides:

- **Interactive Product Showcase**: Highlighting popular categories like Sparklers, Flower Pots, Fountains, Rockets, Ground Chakkars, and Assorted Gift Boxes.
- **Dedicated Price List Page**: A responsive inline PDF document viewer for viewing the complete price list directly in the browser, complete with a direct PDF download option.
- **Instant WhatsApp Ordering**: Direct click-to-chat integration for placing orders or sending product inquiries directly to the store owner's WhatsApp number.
- **Store Location & Hours**: Integrated Google Maps embed alongside store address, business hours, and contact details.

---

## 2. Technology Stack

The project uses a pure static frontend architecture with zero backend server overhead. Below is the list of technologies currently implemented in the project:

| Technology | Purpose |
| ---------- | ------- |
| **React 19** (`react`, `react-dom`) | UI library for building modular component structures |
| **Vite 8** (`vite`) | Next-generation frontend build tool and dev server |
| **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`) | Utility-first CSS framework for responsive layout & styling |
| **JavaScript (ES6+)** | Core web logic, state handling, and data management |
| **CSS3 Animations** | Custom keyframes for ambient light glows, fades, and smooth transitions |
| **`pdf-lib`** | Node.js binary PDF generation library used to build the static price list PDF |
| **Google Fonts** | `Outfit` & `Inter` custom typography configured in `index.html` |
| **Oxlint** (`oxlint`) | Ultra-fast linter for code quality verification |

---

## 3. Project Structure

Below is the directory structure of the project:

```text
cracker-landing-page/
├── public/                     # Public static assets
│   ├── favicon.svg             # Website favicon
│   ├── icons.svg               # SVG icons sheet
│   └── price-list.pdf          # Official price list PDF file
├── scripts/                    # Build utilities
│   └── generate-pdf.js         # PDF generation script using pdf-lib
├── src/                        # Main React application source code
│   ├── assets/                 # Brand images & asset files
│   │   ├── hero.png            # Hero section visual banner
│   │   ├── vite.svg            # Vite logo
│   │   └── images/             # Product category images
│   │       ├── chakkar.png
│   │       ├── fancy_fountain.png
│   │       ├── flowerpot.png
│   │       ├── fountain.png
│   │       ├── giftbox.png
│   │       ├── hero-fireworks.png
│   │       ├── rockets.png
│   │       └── sparklers.png
│   ├── components/             # Reusable UI components
│   │   ├── About.jsx           # Store history & Sivakasi quality section
│   │   ├── AnnouncementBar.jsx # Top announcement header bar
│   │   ├── Categories.jsx      # Browse product categories grid
│   │   ├── CategoryCard.jsx    # Individual category card component
│   │   ├── Contact.jsx         # Address, contact cards & Google Map embed
│   │   ├── CTA.jsx             # Final call-to-action section
│   │   ├── FeaturedProducts.jsx# Highlighted products grid
│   │   ├── FloatingButtons.jsx # Fixed bottom-right WhatsApp chat button
│   │   ├── Footer.jsx          # Site footer with navigation links & credits
│   │   ├── Hero.jsx            # Hero section with primary action CTAs
│   │   ├── Navbar.jsx          # Fixed header navigation with mobile menu
│   │   ├── ProductCard.jsx     # Individual product card component
│   │   ├── ProductShowcase.jsx # Featured product spotlight banner
│   │   ├── QualitySafety.jsx   # 100% Safety & certification details
│   │   └── WhyChooseUs.jsx     # Value proposition cards
│   ├── data/                   # Local static data files
│   │   ├── categories.js       # Product categories dataset
│   │   └── products.js         # Products dataset (names, prices, badges)
│   ├── pages/                  # Main views/pages
│   │   ├── Home.jsx            # Landing page assembling all sections
│   │   └── PriceList.jsx       # Dedicated Price List viewing page
│   ├── App.jsx                 # Root component with lightweight hash navigation controller
│   ├── index.css               # Global CSS, glassmorphism rules & custom animations
│   └── main.jsx                # Application entry point
├── .gitignore                  # Git ignore rules
├── .oxlintrc.json              # Oxlint linter configuration
├── index.html                  # HTML entry document
├── package.json                # Project dependencies & scripts
├── README.md                   # Project documentation
└── vite.config.js              # Vite & Tailwind CSS plugin configuration
```

---

## 4. Main Website Features

- **Header Navigation Bar**: Fixed backdrop-blur navbar with brand logo, nav links (`Home`, `About`, `Categories`, `Products`, `Why Us`, `Contact`), desktop WhatsApp CTA button, and a mobile hamburger menu dropdown.
- **Hero Section**: Feature section with ambient lighting glows, trust statistics (*500+ Varieties, 100% Certified, 15+ Years Trust*), quality badge, and three primary action buttons:
  1. **Explore Products**
  2. **Order on WhatsApp**
  3. **View Price List**
- **Browse Categories**: Responsive grid displaying category cards with item counts and category descriptions.
- **Featured Products**: Dynamic product catalog rendered from `products.js`, including badges (*Bestseller*, *Premium*, *Popular*, *Value Pack*), prices in INR (₹), and descriptions.
- **Dedicated Price List Page (`#price-list`)**:
  - Displays the complete official price list PDF inside an embedded responsive document viewer frame.
  - Prominent **Download PDF** button to download the PDF file directly (`VK_Crackers_Price_List_2026.pdf`).
  - **Back to Home** button to return to the landing page.
  - Accessible, responsive mobile summary table for quick price references on smaller screens.
- **Store Location & Contact Section**: Contains contact cards for store address, WhatsApp link, email, business hours, and a full responsive Google Maps embed of Sivakasi.
- **Fixed WhatsApp Float Button**: Persistent bottom-right floating action button for quick WhatsApp messaging on mobile and desktop.
- **Full Responsive Support**: Tailored breakpoint adjustments for mobile devices (320px–430px), tablets, laptops, and wide desktop displays without horizontal scrollbars.

---

## 5. PDF Price List Handling

### Storage & Access
The official price list PDF is stored in the static public directory at `public/price-list.pdf`. It is served directly by Vite / web server at the root URL path `/price-list.pdf`.

### Display & Download Behavior
- **Inline Viewing**: When users click **View Price List** on the website, it navigates to the dedicated Price List page (`#price-list`). The page renders an embedded iframe PDF viewer:
  ```jsx
  <iframe src="/price-list.pdf#view=FitH" title="VK Crackers Price List PDF" />
  ```
- **Direct Download**: Clicking **Download PDF** triggers a direct file download using the HTML5 `download` attribute:
  ```jsx
  <a href="/price-list.pdf" download="VK_Crackers_Price_List_2026.pdf">Download PDF</a>
  ```
- **No Auto-Download**: Navigating to the Price List page does **not** force an automatic download; users can freely view and scroll through the document online.

### Replacing / Updating the Price List

#### Recommended Workflow for Clients / Administrators:
1. Export or save the new price list as a PDF file named **`price-list.pdf`**.
2. Replace the existing file at `public/price-list.pdf`.
3. Rebuild and deploy the application (`npm run build`).
4. The website will immediately serve the updated PDF file without requiring code changes.

#### Automated PDF Generation (For Developers):
The project includes a Node.js utility script `scripts/generate-pdf.js` that uses `pdf-lib` to programmatically build `public/price-list.pdf`. To generate a fresh PDF programmatically:
```bash
node scripts/generate-pdf.js
```

---

## 6. WhatsApp Handling

### Configuration
WhatsApp links are configured across components (`Hero.jsx`, `Navbar.jsx`, `Contact.jsx`, `CTA.jsx`, `Footer.jsx`, `FloatingButtons.jsx`, `PriceList.jsx`).

The standard URL format used is:
```text
https://wa.me/919514407348
```

### URL Format Guidelines
- **Country Code**: Include the country code without leading zeros or `+` signs (`91` for India).
- **Mobile Number**: Append the 10-digit mobile number directly without spaces, dashes, or parentheses (e.g. `919514407348`).

### Pre-filled Message Support
For specific action links (e.g. from the Price List page), pre-filled text parameters are appended using URL encoding:
```text
https://wa.me/919514407348?text=Hi%20VK%20Crackers,%20I%20saw%20your%20Price%20List%20and%20would%20like%20to%20place%20an%20order.
```

### Changing the WhatsApp Number
To change the WhatsApp number across the project:
1. Search for `9514407348` across `src/components/` and `src/pages/`.
2. Update the target number to the new WhatsApp number.

*(Optionally, developers can centralize this number into a single configuration file like `src/config.js` for one-place updates).*

---

## 7. Price and Product Management

### Data Storage
All product and category information is stored as local JavaScript datasets in `src/data/`:
- **`src/data/products.js`**: Array of product objects.
- **`src/data/categories.js`**: Array of category objects.

### Product Object Schema (`products.js`)
```javascript
{
  id: 1,
  name: 'Premium Flower Pot',
  category: 'Flower Pots',
  image: flowerpot, // imported from '../assets/images/flowerpot.png'
  price: 250,
  description: 'Multi-color fountain with stunning visual effects and long burn time.',
  badge: 'Bestseller', // Optional: 'Bestseller', 'Premium', 'Popular', 'Value Pack', or null
}
```

### Updating Products & Prices (Developer Guide)
1. **Modify Existing Product**: Edit the target product object in `src/data/products.js` (change `price`, `name`, or `description`).
2. **Add New Product**: Append a new object with a unique `id` to the array in `src/data/products.js`.
3. **Add Product Image**: Place the new image file in `src/assets/images/`, import it at the top of `src/data/products.js`, and set it in the `image` property.

### Database Requirement
- **No Database Needed**: The website is 100% static, fast, and secure. Data is served directly from compiled JavaScript assets.

---

## 8. Deployment

### Local Development Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   *Runs local server at `http://localhost:5173/` (or next available port) with Hot Module Replacement (HMR).*

3. **Build for Production**:
   ```bash
   npm run build
   ```
   *Compiles production bundle into the `dist/` directory.*

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

### Recommended Hosting Platforms

This project can be deployed to any static web hosting platform:

- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

#### Recommended Platform Settings (e.g. Vercel / Netlify / GitHub Pages):
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or higher
- **Environment Variables**: None required

---

## 9. Client Maintenance Guide

A simple, non-technical guide for maintaining the website:

### 1. How to Update the PDF Price List
- Get the new price list PDF file from your computer.
- Rename the file to exactly `price-list.pdf`.
- Upload/replace `price-list.pdf` in the `public/` directory of the project.
- Re-deploy the website.

### 2. How to Change the WhatsApp Number
- Open the project files in `src/components/` and `src/pages/`.
- Replace the phone number `919514407348` with your new 10-digit phone number with country code `91`.

### 3. How to Change Product Prices or Names
- Open `src/data/products.js`.
- Locate the product you want to change.
- Edit the `name`, `price`, or `description` values.
- Save the file and rebuild the site.

### 4. How to Replace Product Images
- Save your new product image into the `src/assets/images/` folder.
- Import the image in `src/data/products.js` and assign it to the product object.

### 5. How to Update Store Contact & Location Details
- Open `src/components/Contact.jsx`.
- Update the store address, email address, or business hours text.
- To update the Google Map location, replace the `src` link in the `<iframe>` tag under `Contact.jsx`.

---

## 10. Important Notes

- **Static Infrastructure**: No server maintenance, backend database, or hosting monthly costs for databases are required.
- **WhatsApp Integration**: Operates via official `wa.me` deep links—no external WhatsApp API keys or monthly API subscription fees are needed.
- **PDF Price List**: Served static file—no complex document rendering server or external PDF hosting dependency required.
- **When is a Backend/Database Needed?**:
  - If you want an online shopping cart with automated payment gateway processing (e.g. Razorpay/Stripe).
  - If you need real-time inventory and stock tracking.
  - If you want an admin login dashboard for non-technical staff to edit products without code files.
  - If you need to store customer accounts, order histories, and automated SMS alerts.

---

## License & Credits

Designed & Developed for **VK Crackers**. All rights reserved.

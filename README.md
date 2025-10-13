# DMR Media - Luxury Real Estate Marketing Agency

A premium, luxury-focused website for DMR Media, a specialized marketing agency serving luxury real estate professionals with SEO, Google Ads, and digital marketing strategies.

## 🏆 Overview

DMR Media is a luxury real estate marketing agency that helps premium agents dominate their markets through strategic digital marketing. This website showcases our expertise in SEO optimization, Google Ads management, and comprehensive digital strategy for the luxury real estate sector.

## ✨ Key Features

### 🎨 **Luxury Design**
- **Premium Aesthetic**: Natural off-blacks and off-whites color palette
- **Typography**: Instrument Serif font for sophisticated appeal
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion integration for elegant interactions

### 📊 **Performance Statistics**
- **$11K** Average Client GCI Monthly
- **100+** Total Clients (Luxury Real Estate Professionals)
- **4.9★** Average Rating (Client Satisfaction)

### 🚀 **Core Services**
- **SEO Optimization**: Local search dominance for luxury markets
- **Google Ads Management**: Precision-targeted campaigns for affluent clients
- **Content Strategy**: Authority-building content for luxury real estate
- **Property Marketing**: Premium listing showcases
- **Analytics & Reporting**: Data-driven insights and transparent reporting
- **Brand Development**: Distinguished personal branding

### 📝 **Content Management**
- **Sanity CMS Integration**: Dynamic blog posts and content management
- **Blog System**: Latest insights and marketing strategies
- **SEO Optimized**: Proper metadata and structured data

### 📅 **Booking System**
- **iClosed Integration**: Professional consultation booking
- **Calendar Widget**: Seamless appointment scheduling
- **Contact Forms**: Integrated email system with SendGrid

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Animations**: Framer Motion
- **Email**: SendGrid
- **Deployment**: Vercel (recommended)
- **Analytics**: Built-in performance monitoring

## 📁 Project Structure

```
dmr-media/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages and dynamic routes
│   ├── calendar/          # Booking page
│   ├── contact/           # Contact page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ContactForm.tsx   # Contact form
├── lib/                   # Utility libraries
│   ├── sanity.ts         # Sanity client
│   └── email.ts          # Email configuration
├── sanity/               # Sanity CMS schemas
├── scripts/              # Utility scripts
├── public/               # Static assets
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account (for CMS)
- SendGrid account (for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dmr-media-website.git
   cd dmr-media-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with the following variables:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token

   # SendGrid Email Configuration
   SENDGRID_API_KEY=your_sendgrid_key
   SENDGRID_FROM_EMAIL=team@dmrmedia.org
   SENDGRID_FROM_NAME=DMR Media

   # Email Recipients
   CONTACT_FORM_EMAIL=team@dmrmedia.org
   VALUATION_FORM_EMAIL=team@dmrmedia.org
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Sanity Studio
- **Studio URL**: `/studio` (when deployed)
- **Configuration**: `sanity.config.ts`
- **Schemas**: Located in `sanity/schemas/`

### Blog Management
- **Import Script**: `scripts/import-blogs.ts`
- **Run Import**: `npm run import-blogs`

## 🎯 SEO & Performance

- **Dynamic Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **Meta Tags**: Optimized for each page
- **Performance**: Lighthouse score optimized
- **Accessibility**: WCAG compliant

## 📧 Contact & Support

- **Email**: team@dmrmedia.org
- **Phone**: +1 (920) 940-4049
- **LinkedIn**: [DMR Media Company](https://www.linkedin.com/company/90571937/)
- **Instagram**: [@andrewrohmtcm](https://www.instagram.com/andrewrohmtcm/)
- **YouTube**: [@AndrewRohmcm](https://www.youtube.com/@AndrewRohmcm)

## 📄 License

This project is proprietary software owned by DMR Media. All rights reserved.

## 🤝 Contributing

This is a client project. For inquiries about collaboration or modifications, please contact team@dmrmedia.org.

---

**Built with ❤️ for luxury real estate professionals who demand excellence in digital marketing.**
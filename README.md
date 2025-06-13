# EnvoyX - Digital Invoice Financing Platform

A modern Next.js application for B2B invoice financing in emerging markets, featuring AI-powered infrastructure for lending solutions.

## 🚀 Features

- **Homepage**: Complete landing page with hero section, features, and product demo
- **Insurance Page**: Comprehensive health insurance plans and coverage options
- **For Banks Page**: Financial institution partnership solutions
- **Responsive Design**: Mobile-first approach with modern UI components
- **Modern Tech Stack**: Built with Next.js 13, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Netlify (configured)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd envoyx-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── insurance/        # Insurance page
│   └── for-banks/        # For banks page
├── components/            # React components
│   ├── screens/          # Page-level components
│   ├── shared/           # Shared components
│   └── ui/               # UI primitives
├── lib/                  # Utility functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🚀 Deployment

The project is configured for deployment on Netlify:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `out/` directory
3. Deploy to Netlify or your preferred hosting platform

## 📄 Pages

- **/** - Homepage with hero, features, and demo sections
- **/insurance** - Health insurance plans and coverage
- **/for-banks** - Financial institution solutions

## 🎨 Design System

- **Colors**: Custom color palette with primary green (#66db4a) and dark (#081f24)
- **Typography**: Bricolage Grotesque for headings, Inter for body text
- **Components**: Consistent design system with reusable components
- **Responsive**: Mobile-first design with breakpoints for all devices

## 🔧 Configuration

- **Next.js**: Configured for static export and production builds
- **Tailwind**: Custom configuration with design tokens
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency

## 📝 License

This project is proprietary software owned by EnvoyX Inc.

## 🤝 Contributing

This is a private project. For internal development guidelines, please refer to the team documentation.

---

Built with ❤️ by the EnvoyX team
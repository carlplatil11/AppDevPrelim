# Future-Proof Portfolio

A modern, professional portfolio built with Next.js 14, TypeScript, and Tailwind CSS — optimized for Vercel deployment.

## 🚀 Features

- **Hero Section**: Clear, compelling statement of who you are
- **The Big Three Projects**: Showcase your journey
  - What I Know: Core skills
  - What I Learned: Growth and problem-solving
  - What I'm Aspiring To: Future direction
- **Currently Learning**: Demonstrates growth mindset to recruiters
- **Responsive Design**: Mobile-first, beautiful on all devices
- **Dark Mode**: Automatic theme switching
- **SEO Optimized**: Meta tags and semantic HTML
- **Vercel-Ready**: Zero-config deployment

## 📝 Customization Guide

### 1. Update Personal Information

**[app/layout.tsx](app/layout.tsx)**
- Update `title` and `description` in metadata

**[components/Hero.tsx](components/Hero.tsx)**
- Replace "Your Name Here" with your actual name
- Customize your hero statement (e.g., "Frontend Developer passionate about...")

**[components/Footer.tsx](components/Footer.tsx)**
- Add your email, GitHub, LinkedIn, and Twitter links

### 2. Add Your Projects

**[components/Projects.tsx](components/Projects.tsx)**

Replace the placeholder projects with your actual projects:

```typescript
{
  title: "Your Project Name",
  description: "What does it do? What did you learn?",
  category: "What I Know", // or "What I Learned" or "What I'm Aspiring To"
  tech: ["React", "API", "Database"],
  link: "https://live-demo.com",
  github: "https://github.com/you/project"
}
```

### 3. Update Learning Progress

**[components/CurrentlyLearning.tsx](components/CurrentlyLearning.tsx)**

Add what you're currently learning:

```typescript
{
  title: "Technology/Skill",
  description: "Why you're learning it",
  progress: 60, // 0-100
  icon: "🎯" // Any emoji
}
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## 🚀 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts — done!

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**That's it!** Vercel auto-detects Next.js and configures everything.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with statement
│   ├── Projects.tsx        # Big Three projects showcase
│   ├── CurrentlyLearning.tsx # Growth mindset section
│   └── Footer.tsx          # Contact links
├── public/                 # Static assets (add images here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Styling

This project uses Tailwind CSS with automatic dark mode support. Customize colors in [tailwind.config.ts](tailwind.config.ts).

## 💡 Tips for Recruiters

- **Hero Statement**: Should be clear and specific (avoid "passionate coder")
- **Projects**: Show progression — don't just list features, explain growth
- **Currently Learning**: Update regularly — shows you're current
- **Keep it Real**: Better to have 3 strong projects than 10 weak ones

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using Next.js & Tailwind CSS

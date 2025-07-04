# Portfolio - Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design inspired by Vercel's aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Smooth Animations**: Subtle animations and transitions for better UX

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section with technologies
│   ├── Projects.tsx        # Featured projects
│   ├── Experience.tsx      # Work experience and stats
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer component
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. You can customize the Vercel-inspired colors:

```javascript
colors: {
  'vercel-bg': '#000000',
  'vercel-card': '#111111',
  'vercel-border': '#333333',
  'vercel-text': '#888888',
  'vercel-light': '#ffffff',
  'vercel-accent': '#0070f3',
}
```

### Content

Update the content in each component file:

- **Personal Info**: Update name, title, and description in `Hero.tsx`
- **About**: Modify the about text and technologies in `About.tsx`
- **Projects**: Add your projects in `Projects.tsx`
- **Experience**: Update work history in `Experience.tsx`
- **Contact**: Update contact information in `Contact.tsx`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Alternatively, you can deploy to any platform that supports Next.js.

## License

MIT License - feel free to use this template for your own portfolio!#   p o r t f o l i o  
 
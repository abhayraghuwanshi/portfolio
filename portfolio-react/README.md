# Modern Portfolio - React + Tailwind CSS

A beautiful, modern portfolio website built with React and Tailwind CSS featuring Pinterest-style masonry layouts, smooth animations, and a professional design.

## Features

### Design Highlights
- **Pinterest-Style Masonry Layout** - Beautiful card-based layouts for Projects and Skills sections
- **Smooth Animations** - Typing effect, scroll animations, hover effects, and micro-interactions
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Modern UI/UX** - Clean, professional design with gradient accents and glassmorphism effects
- **Dark Theme** - Eye-friendly dark theme optimized for developer portfolios

### Sections
- **Hero** - Dynamic typing animation showcasing multiple roles with stats and social links
- **About** - Professional introduction with highlights and expertise areas
- **Skills** - Organized skill categories with visual progress indicators
- **Experience** - Timeline-based work history with achievements and technologies
- **Projects** - Featured projects with tech stacks, highlights, and action buttons
- **Contact** - Contact form with validation and contact information
- **Footer** - Quick links, social media, and additional information

### Technical Features
- ⚡ Built with **Vite** for blazing fast development
- ⚛️ **React 18** with functional components and hooks
- 🎨 **Tailwind CSS** for utility-first styling
- 🎭 Custom animations and transitions
- 📱 Mobile-responsive masonry grids
- 🎯 Smooth scroll navigation
- 🔍 SEO optimized with meta tags

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+ (currently using 20.14.0 - works with warning)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles & Tailwind config
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## Customization

### Update Personal Information

Edit the component files to update your information:

1. **Hero.jsx** - Name, roles, stats, social links
2. **About.jsx** - Bio, highlights, expertise
3. **Skills.jsx** - Technical skills and proficiency levels
4. **Experience.jsx** - Work history and achievements
5. **Projects.jsx** - Portfolio projects with details
6. **Contact.jsx** - Contact information and form handling

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'dark-bg': '#0a0a0a',      // Background color
  'dark-card': '#1a1a1a',    // Card background
  'dark-border': '#2a2a2a',  // Border color
  'accent': '#ffc107',        // Primary accent
  'accent-dark': '#ff9800',   // Secondary accent
}
```

### Add/Remove Sections

Modify `App.jsx` to add or remove sections:

```javascript
import NewSection from './components/NewSection/NewSection';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      {/* Add your new section here */}
      <NewSection />
      {/* ... other sections */}
    </div>
  );
}
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - Tool for transforming CSS
- **ESLint** - Linting utility for JavaScript

## Performance Optimizations

- Lazy loading for images
- Optimized animations with CSS transforms
- Minimal dependencies
- Code splitting with Vite
- Production build optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Abhay Raghuwanshi**
- Email: raghuwanshi.abhay405@gmail.com
- LinkedIn: [abhay-raghuwanshi-2a6804173](https://www.linkedin.com/in/abhay-raghuwanshi-2a6804173/)
- GitHub: [abhayraghuwanshi](https://github.com/abhayraghuwanshi)
- LeetCode: [abhayraghuwanshi](https://leetcode.com/u/abhayraghuwanshi/)

---

Built with ❤️ using React & Tailwind CSS

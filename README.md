# Saurabh Shukla - Portfolio Website

A fully animated, modern React-based developer portfolio website showcasing the work and skills of Saurabh Shukla, a passionate Web and Android Developer from Prayagraj, India.

## 🚀 Live Demo

The website is now running at: `http://localhost:5173/`

## ✨ Features

### 🧍‍♂️ Personal Information
- **Name**: Saurabh Shukla
- **Tagline**: Code. Create. Innovate.
- **Location**: Prayagraj, India
- **Experience**: 2.5+ years of web development with 7.5M+ traffic
- **Apps**: Several successful Android apps on Play Store

### 🎨 Design & Animations
- **Framework**: React + TypeScript + TailwindCSS + Framer Motion
- **Theme**: Dark mode with neon gradient highlights (blue/purple/cyan)
- **Animations**: Smooth scrolling, section fade-ins, card flips, hover effects
- **Custom Cursor**: Glowing cursor effect with hover interactions
- **Loading Screen**: Animated loading screen with logo and typewriter effect
- **Responsive**: Mobile-first design with adaptive transitions

### 🧭 Navigation
- Sticky navbar with smooth scroll navigation
- Logo "Saurabh." with gradient effect
- Dark/Light mode toggle
- Mobile hamburger menu with animations

### 🏠 Hero Section
- Full-screen animated gradient background
- Particle effects animation
- Profile picture placeholder (SS initials)
- Typewriter effect for tagline
- Social media links (GitHub, LinkedIn, Email)
- Download Resume button (placeholder link)
- Scroll indicator animation

### 🛠️ Skills Section
- **Frontend**: React.js, HTML, CSS, JavaScript, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB, Firebase
- **App Development**: Android Studio (Kotlin & Java)
- **Other Tools**: Git, Render, Vercel, Twilio API, Razorpay, OpenCV, Google Colab, Python
- Animated progress bars for each skill
- Category filtering (All, Frontend, Backend, App Development, Other Tools)
- Statistics cards with achievement numbers

### 💼 Projects Section
- **Android Projects**:
  - BMI Calculator - Health-based calculator app
  - Multipurpose Application - Calculator, notes, and converter in one place
  - Mood-Based Music Player - AI-based app that detects mood from face
- **Web Projects**:
  - Omegoo - Strangers Talk Website ([omegoo.chat](https://omegoo.chat))
  - Vaaniweb - Create Website by voice ([vaaniweb.com](https://vaaniweb.com))
- Animated project cards with hover effects
- Project filtering by category (All, Web, Android)
- Links to live demos, GitHub, and Play Store

### 💡 Featured Project
- **Omegoo** spotlight with detailed information
- Hero banner with animated statistics
- Feature highlights and tech stack
- Live project metrics and achievements
- Interactive demo preview

### 🎓 Education & Experience
- **Bachelor of Computer Application (BCA)**
  - United Institute of Management (FUGS), Naini, Prayagraj
  - Year: 2022–2025
- **Master of Computer Application (MCA)**
  - Lovely Professional University, Phagwara, Punjab
  - Year: 2025–2027
- **Internship**: MNNIT Prayagraj (March 2024 - March 2025)
  - Project: Caregiver Service Platform (Web + Android)

### 🚀 Achievements
- Built apps with 7.5M+ total traffic (Web 2021–2023)
- Running 2 live game apps on Google Play Store
- Created scalable web + mobile platforms with API integrations
- Successfully completed internship at MNNIT Prayagraj

### 💬 Contact Section
- **Email**: saurabhshukla1966@gmail.com (direct integration)
- **GitHub**: https://github.com/Saurabhji123
- **LinkedIn**: https://www.linkedin.com/in/saurabh-shukla-0a6914226
- **Portfolio**: saurabhshukla.dev (placeholder)
- Contact form with direct email redirection
- Animated contact cards with hover effects
- Social media links with hover animations
- Availability status indicator

## 🖼️ Profile Picture Setup

To add your profile picture, replace the placeholder in the Hero section:

1. **Location**: `src/components/Hero.tsx`
2. **Find this code block**:
   ```tsx
   <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
     <span className="text-2xl font-bold text-white">SS</span>
   </div>
   ```
3. **Replace with**:
   ```tsx
   <img 
     src="/path-to-your-image.jpg" 
     alt="Saurabh Shukla" 
     className="w-full h-full rounded-full object-cover"
   />
   ```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Dependencies
- **React 18** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling framework
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Sticky navigation with dark/light toggle
│   ├── Hero.tsx           # Hero section with typewriter effect
│   ├── About.tsx          # About section with personal info
│   ├── Skills.tsx         # Skills with animated progress bars
│   ├── Projects.tsx       # Projects grid with filtering
│   ├── FeaturedProject.tsx # Omegoo project showcase
│   ├── Education.tsx      # Education and internship details
│   ├── Contact.tsx        # Contact form with email integration
│   └── CustomCursor.tsx   # Custom glowing cursor effect
├── App.tsx               # Main app component with routing
├── main.tsx             # App entry point
├── index.css            # Global styles and animations
└── App.css              # App-specific styles
```

## 🎯 Key Features Implemented

### ✅ All Requirements Completed
- [x] Modern React + TypeScript + TailwindCSS + Framer Motion
- [x] Dark theme with neon gradient highlights
- [x] Sticky navigation with smooth scrolling
- [x] Full-screen animated hero section
- [x] Typewriter effect for tagline
- [x] Animated skills section with progress bars
- [x] Project cards with hover effects and filtering
- [x] Featured project showcase (Omegoo)
- [x] Education and internship timeline
- [x] Contact form with direct email integration
- [x] Custom glowing cursor effect
- [x] Dark/Light mode toggle
- [x] Mobile-responsive design
- [x] Loading screen animation
- [x] Particle effects and smooth transitions

### 📧 Contact Integration

The contact form automatically redirects to the user's default email client with:
- Pre-filled recipient: `saurabhshukla1966@gmail.com`
- Subject line from form input
- Message body with sender details
- Direct mailto links throughout the site

### 🎨 Animations & Effects

- Page load animations with staggered children
- Hover effects on all interactive elements
- Smooth scroll navigation between sections
- Custom cursor with hover states and click effects
- Typewriter text animation
- Progress bar animations
- Card flip and hover animations
- Particle background effects
- Gradient shifting backgrounds
- Scale and transform animations on buttons and cards

## 🔧 Customization

### Color Scheme
The website uses a custom gradient color palette:
- **Primary**: Blue (#3b82f6) to Purple (#d946ef)
- **Secondary**: Cyan (#06b6d4) accents
- **Background**: Dark gradients with transparency
- **Text**: White with gray variations for hierarchy

### Fonts
- **Primary Font**: Inter (Google Fonts)
- **Weight Range**: 300-900 for different text hierarchies

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The project is ready for deployment on platforms like:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

### Build Command
```bash
npm run build
```

### Build Output
The `dist/` folder contains the production-ready files.

## 📞 Support

For any questions or customizations, contact:
- **Email**: saurabhshukla1966@gmail.com
- **GitHub**: https://github.com/Saurabhji123
- **LinkedIn**: https://www.linkedin.com/in/saurabh-shukla-0a6914226

---

**Built with ❤️ by Saurabh Shukla**

*Code. Create. Innovate.*

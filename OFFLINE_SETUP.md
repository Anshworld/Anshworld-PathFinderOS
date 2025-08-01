# 🚀 Pathfinder Platform - Offline Setup Guide

## Prerequisites

### 1. Install Node.js
- **Windows**: Download from https://nodejs.org/ (LTS version)
- **Mac**: `brew install node` or download from nodejs.org
- **Linux**: `sudo apt update && sudo apt install nodejs npm`

### 2. Verify Installation
```bash
node --version  # Should show v16+ 
npm --version   # Should show 8+
```

## 📁 Project Setup

### Method 1: Create New Project

```bash
# Create project folder
mkdir pathfinder-platform
cd pathfinder-platform

# Initialize project
npm init -y

# Install dependencies
npm install react@latest react-dom@latest
npm install -D @vitejs/plugin-react vite typescript @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npm install -D eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint

# Initialize Tailwind
npx tailwindcss init -p
```

### Method 2: Copy Files Manually

1. **Create folder structure:**
```
pathfinder-platform/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── index.html
```

2. **Copy all files from this environment to your local folder**

## 🔧 Configuration Files

### package.json
```json
{
  "name": "pathfinder-platform",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🚀 Run Commands

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

## 📱 Access Application

- **Development**: http://localhost:5173
- **Production**: After build, serve the `dist` folder

## 🔧 Troubleshooting

### Common Issues:

1. **Port already in use**
   ```bash
   # Vite will automatically use next available port
   # Or specify custom port:
   npm run dev -- --port 3000
   ```

2. **Permission errors (Mac/Linux)**
   ```bash
   sudo npm install
   ```

3. **Clear cache if issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **TypeScript errors**
   ```bash
   # Check tsconfig files are properly configured
   npx tsc --noEmit
   ```

## 📂 File Structure After Setup

```
pathfinder-platform/
├── node_modules/          # Dependencies (auto-generated)
├── dist/                  # Build output (after npm run build)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Tracks.tsx
│   │   ├── SkillSprints.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json      # Auto-generated
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

## 🌐 Deployment Options

### Local Network Access
```bash
npm run dev -- --host
# Access from other devices: http://YOUR_IP:5173
```

### Production Build
```bash
npm run build
# Serve dist folder with any static server
npx serve dist
```

## 💡 Next Steps

1. Customize content in component files
2. Add your own images and branding
3. Configure contact information
4. Set up analytics (Google Analytics)
5. Deploy to hosting service (Netlify, Vercel, etc.)

## 📞 Support

If you face any issues:
1. Check Node.js version (should be 16+)
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall
4. Check firewall settings for local development

---

Happy coding! 🚀
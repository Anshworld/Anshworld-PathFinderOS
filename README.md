# Pathfinder Innovation & Readiness Center Platform

A comprehensive platform for empowering Tier-3 youth through dual-track innovation programs.

## Features

- **Dual Track System**: Startup Builder and Skill Collaborator tracks
- **Skill Sprints**: Sector-specific learning modules
- **Mentorship Platform**: Connect students with industry experts
- **Progress Tracking**: Gamified learning with Spark Coins
- **Demo Day Showcase**: Platform for student presentations
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify ready

## Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Extract the downloaded files
2. Navigate to the project directory:
   ```bash
   cd pathfinder-platform
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── About.tsx       # About section
│   ├── Tracks.tsx      # Dual track showcase
│   ├── SkillSprints.tsx # Skill sprints grid
│   ├── HowItWorks.tsx  # Process explanation
│   ├── Stats.tsx       # Impact statistics
│   ├── Testimonials.tsx # Student success stories
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Customization

### Colors
The platform uses a consistent color scheme defined in Tailwind classes:
- Primary: Blue (blue-600)
- Secondary: Orange (orange-500)
- Success: Green (green-600)
- Neutral: Gray shades

### Content
To customize content:
1. Edit component files in `src/components/`
2. Update text, images, and data arrays
3. Modify contact information in `Contact.tsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes
- Custom styles: Add to `tailwind.config.js`

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support:
- Email: hello@pathfinder.in
- Phone: +91 9876543210
- Website: https://pathfinder.in

## Roadmap

- [ ] Student dashboard with login
- [ ] Mentor portal
- [ ] Payment integration
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Multi-language support

---

Built with ❤️ for empowering India's youth
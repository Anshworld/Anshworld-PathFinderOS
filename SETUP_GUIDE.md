# Complete Setup Guide for Pathfinder Platform

## System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **Node.js**: Version 16.0.0 or higher
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 1GB free space

## Step-by-Step Installation

### 1. Install Node.js

#### Windows:
1. Visit https://nodejs.org/
2. Download the LTS version
3. Run the installer and follow the prompts
4. Verify installation by opening Command Prompt and typing:
   ```cmd
   node --version
   npm --version
   ```

#### macOS:
1. Visit https://nodejs.org/ and download the LTS version, OR
2. Use Homebrew: `brew install node`
3. Verify installation in Terminal:
   ```bash
   node --version
   npm --version
   ```

#### Linux (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Extract and Setup Project

1. Extract the downloaded zip file to your desired location
2. Open terminal/command prompt in the project folder
3. Install dependencies:
   ```bash
   npm install
   ```

### 3. Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at: http://localhost:5173

### 4. Production Build

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Troubleshooting

### Common Issues

#### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

#### Permission Errors (macOS/Linux)
If you get permission errors, try:
```bash
sudo npm install
```

#### Node Version Issues
Ensure you're using Node.js 16+:
```bash
node --version
```

#### Clear Cache
If you encounter build issues:
```bash
npm run build --force
rm -rf node_modules
npm install
```

### Getting Help

1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Check firewall settings if the dev server won't start

## IDE Recommendations

- **VS Code** (Recommended)
  - Install extensions: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense
- **WebStorm**
- **Sublime Text** with appropriate packages

## Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_APP_TITLE=Pathfinder Innovation Center
VITE_API_URL=https://api.pathfinder.in
```

## Performance Tips

1. Use `npm run build` for production deployments
2. Enable gzip compression on your server
3. Use a CDN for static assets
4. Monitor bundle size with `npm run build -- --analyze`

## Security Considerations

1. Never commit sensitive data to version control
2. Use environment variables for API keys
3. Implement proper input validation
4. Keep dependencies updated: `npm audit fix`

## Backup and Version Control

1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create regular backups of your customizations
3. Use branches for feature development

---

Need more help? Contact our support team at hello@pathfinder.in
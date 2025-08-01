# Deployment Guide for Pathfinder Platform

## Overview

This guide covers deploying the Pathfinder platform to various hosting services.

## Build Process

Before deploying, create a production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended)

#### Method A: Drag and Drop
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag the `dist` folder to the deployment area
4. Your site will be live instantly

#### Method B: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on every push

#### Custom Domain Setup
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS records as instructed

### 2. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site will be deployed automatically

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```

### 4. Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
5. Deploy: `firebase deploy`

### 5. AWS S3 + CloudFront

1. Create an S3 bucket
2. Enable static website hosting
3. Upload `dist` folder contents
4. Set up CloudFront distribution
5. Configure custom domain (optional)

### 6. Traditional Web Hosting

1. Run `npm run build`
2. Upload `dist` folder contents via FTP
3. Ensure your hosting supports single-page applications
4. Configure URL rewriting if needed

## Environment Configuration

### Production Environment Variables

Create production environment files:

```env
# .env.production
VITE_APP_ENV=production
VITE_API_URL=https://api.pathfinder.in
VITE_ANALYTICS_ID=your-analytics-id
```

### Build Optimization

For better performance:

```bash
# Build with analysis
npm run build -- --analyze

# Build with specific base URL
npm run build -- --base=/pathfinder/
```

## SSL/HTTPS Setup

Most modern hosting services provide free SSL certificates:

- **Netlify**: Automatic HTTPS
- **Vercel**: Automatic HTTPS
- **Firebase**: Automatic HTTPS
- **Custom hosting**: Use Let's Encrypt or CloudFlare

## Performance Optimization

### 1. Enable Compression
Ensure your server enables gzip/brotli compression.

### 2. CDN Setup
Use a CDN for faster global delivery:
- CloudFlare (free tier available)
- AWS CloudFront
- Google Cloud CDN

### 3. Caching Headers
Configure proper cache headers:
```
# Static assets
Cache-Control: public, max-age=31536000

# HTML files
Cache-Control: public, max-age=0, must-revalidate
```

## Monitoring and Analytics

### 1. Google Analytics
Add tracking code to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 2. Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## Domain and DNS

### Custom Domain Setup
1. Purchase domain from registrar
2. Point DNS to hosting service
3. Configure SSL certificate
4. Test thoroughly

### DNS Records
Typical DNS configuration:
```
A     @     192.0.2.1
CNAME www   your-site.netlify.app
```

## Backup and Recovery

### 1. Code Backup
- Use Git for version control
- Regular pushes to remote repository
- Tag releases for easy rollback

### 2. Content Backup
- Export any dynamic content regularly
- Database backups if applicable
- Asset backups

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies updated
- [ ] No sensitive data in client code
- [ ] Content Security Policy implemented
- [ ] Regular security audits

## Troubleshooting

### Common Deployment Issues

#### 1. Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### 2. Routing Issues
Ensure your hosting service supports SPA routing or configure redirects:

**Netlify** - Create `_redirects` file:
```
/*    /index.html   200
```

**Apache** - Create `.htaccess`:
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

#### 3. Asset Loading Issues
Check base URL configuration in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  // ... other config
});
```

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor performance metrics
- Check for broken links
- Review analytics data
- Update content as needed

### Automated Deployments
Set up CI/CD pipelines for automatic deployments:
- GitHub Actions
- GitLab CI
- Netlify Build Hooks
- Vercel Git Integration

---

For deployment support, contact: hello@pathfinder.in
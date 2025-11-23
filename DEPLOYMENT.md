# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

1. Build the project:
```bash
npm install
npm run build
```

This creates a `dist` folder with all production-ready files.

## Deployment Options

### 1. Netlify (Recommended)

#### Option A: Drag and Drop
1. Build your project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site will be live instantly!

#### Option B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Option C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### 2. Vercel

#### Option A: Git Integration
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/my-portfolio"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/my-portfolio/', // Replace with your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

4. Configure:
   - Public directory: `dist`
   - Single-page app: Yes
   - Overwrite index.html: No

5. Deploy:
```bash
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder contents to S3 bucket
3. Configure bucket for static website hosting
4. Set up CloudFront distribution for CDN

### 6. Custom Server

You can serve the `dist` folder with any static file server:

#### Using Node.js (serve):
```bash
npm install -g serve
serve -s dist
```

#### Using Python:
```bash
cd dist
python -m http.server 8000
```

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify dark mode works correctly
- [ ] Test contact form (if using a service)
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test page load speed
- [ ] Check browser console for errors
- [ ] Test on different browsers
- [ ] Verify all project links work

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel
1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS as instructed

## Environment Variables

If you need environment variables:

1. Create `.env` file:
```
VITE_API_URL=https://api.example.com
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

3. Add to deployment platform's environment variables section

## Continuous Deployment

Both Netlify and Vercel support automatic deployments:
- Every push to main branch triggers a new deployment
- Pull requests create preview deployments
- Configure in platform settings

## Performance Optimization

After deployment, consider:
1. Enable compression (gzip/brotli)
2. Set up CDN caching
3. Optimize images
4. Enable HTTP/2
5. Set proper cache headers

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

### 404 Errors on Refresh
- Configure redirect rules (Netlify: `_redirects` file)
- Ensure SPA routing is configured

### Assets Not Loading
- Check `base` path in `vite.config.ts`
- Verify asset paths are relative

---

Need help? Check the platform-specific documentation or open an issue.



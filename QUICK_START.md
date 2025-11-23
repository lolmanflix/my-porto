# Quick Start Guide

Get your portfolio up and running in minutes!

## 🚀 Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React, TypeScript, TailwindCSS, Framer Motion, and more.

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Your portfolio will be available at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates optimized production build in the `dist` folder.

## 📝 Customization Checklist

### Essential Updates

- [ ] **Update Contact Email** - Edit `src/components/Contact.tsx` and replace the email placeholder
- [ ] **Add Your Image** - Replace `kareem image.jpg` or update image references
- [ ] **Update Social Links** - Add your GitHub, LinkedIn, etc. in relevant components
- [ ] **Customize Colors** - Edit `tailwind.config.js` to match your brand
- [ ] **Update SEO** - Modify meta tags in `index.html`

### Content Updates

- [ ] Review and update all project descriptions
- [ ] Add actual project screenshots/images
- [ ] Update experience timeline dates
- [ ] Verify all external links work
- [ ] Test contact form integration

## 🎨 Styling Customization

### Change Primary Color

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... update these values
    600: '#your-color',
  }
}
```

### Modify Animations

All animations use Framer Motion. Edit component files to adjust:
- Animation duration
- Easing functions
- Hover effects
- Scroll animations

## 🔧 Common Issues

### Port Already in Use
```bash
# Change port in vite.config.ts
server: {
  port: 3001, // or any available port
}
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Ensure all dependencies are installed
npm install
# Restart your IDE/editor
```

## 📦 Project Structure

```
my-portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── context/     # React context (theme)
│   └── ...
├── index.html       # Main HTML file
└── package.json     # Dependencies
```

## 🚢 Next Steps

1. Customize the content to match your style
2. Add your projects and achievements
3. Test on different devices
4. Deploy using instructions in `DEPLOYMENT.md`
5. Share your portfolio!

## 💡 Tips

- Use the dark mode toggle to test both themes
- All sections are responsive - test on mobile
- Animations are optimized for performance
- SEO is already configured - just update content

---

Happy coding! 🎉



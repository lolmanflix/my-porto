# Kareem Diyaa - Portfolio Website

A modern, responsive portfolio website showcasing my work as a full-stack developer specializing in mobile and web applications.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth interactions
- **Animations**: Beautiful animations powered by Framer Motion

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 📁 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚢 Deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Option 1: Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Option 2: Connect your Git repository to Netlify
   - Option 3: Use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=dist
     ```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your color values
  }
}
```

### Content

Update the content in each component file:
- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section
- `src/components/Skills.tsx` - Skills section
- `src/components/Experience.tsx` - Experience timeline
- `src/components/Projects.tsx` - Projects showcase
- `src/components/Contact.tsx` - Contact form

### SEO

Update meta tags in `index.html`:
- Title
- Description
- Open Graph tags
- Twitter Card tags

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

For inquiries, please use the contact form on the website or reach out directly.

---

Built with ❤️ by Kareem Diyaa



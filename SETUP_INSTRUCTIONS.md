# Setup Instructions

## Step 1: Install Node.js

You need to install Node.js (which includes npm) to run this website.

### Option A: Download from Official Website (Recommended)

1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version for Windows
3. Run the installer and follow the setup wizard
4. Make sure to check "Add to PATH" during installation
5. Restart your terminal/PowerShell after installation

### Option B: Using Chocolatey (if you have it)

```powershell
choco install nodejs-lts
```

### Option C: Using Winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

## Step 2: Verify Installation

After installing Node.js, open a **new** terminal/PowerShell window and run:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Step 3: Install Project Dependencies

Navigate to your project folder and run:

```bash
cd "C:\Users\karee\Desktop\my portofolio"
npm install
```

This will install all required packages (React, TypeScript, TailwindCSS, Framer Motion, etc.)

## Step 4: Start the Development Server

```bash
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000`

## Step 5: View Your Portfolio

- The site will automatically reload when you make changes
- Press `Ctrl + C` in the terminal to stop the server
- To build for production: `npm run build`

## Troubleshooting

### "npm is not recognized"
- Make sure Node.js is installed
- Restart your terminal/PowerShell
- Check if Node.js is in your PATH: `echo $env:PATH` (PowerShell)

### Port Already in Use
If port 3000 is busy, the server will try the next available port. Check the terminal output for the actual URL.

### Installation Errors
- Make sure you have internet connection
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again
- Check Node.js version: should be 18 or higher

---

Once Node.js is installed, come back and we can run the website!



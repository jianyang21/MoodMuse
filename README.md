# MoodMuse - Mood Tracking App

A React-based mood tracking application with a Node.js/Express backend.

## Project Structure

```
├── public/           # Public assets for React app
│   ├── index.html    # Main HTML template
│   ├── manifest.json # PWA manifest
│   └── favicon.ico   # App icon
├── src/              # React source code
│   ├── App.js        # Main App component
│   ├── App.css       # App styles
│   ├── WritingPage.js # Writing/journaling component
│   ├── WritingPage.css # Writing page styles
│   ├── index.js      # React entry point
│   ├── index.css     # Global styles
│   └── ...           # Other React files
├── server.js         # Express backend server
├── package.json      # Project dependencies and scripts
└── README.md         # This file
```

## Features

- Mood tracking with emoji buttons
- Writing/journaling functionality
- React Router navigation
- Express.js backend with MongoDB
- Responsive design

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   This starts the React app on http://localhost:3000

3. **Start the backend server (in another terminal):**

   ```bash
   npm run server
   ```

   This starts the Express server on http://localhost:3001

4. **For full development (both servers):**
   ```bash
   npm run dev:full
   ```

## Available Scripts

- `npm start` / `npm run dev` - Start React development server
- `npm run server` - Start Express backend server
- `npm run dev:full` - Start both frontend and backend
- `npm run build` - Build React app for production
- `npm test` - Run tests

## Backend Requirements

The backend requires MongoDB to be running. Make sure you have MongoDB installed and running on the default port (27017).

## Troubleshooting

If you encounter issues:

1. Ensure all dependencies are installed: `npm install`
2. Check that MongoDB is running if using writing features
3. Verify ports 3000 and 3001 are available
4. Clear node_modules and reinstall if needed: `rm -rf node_modules package-lock.json && npm install`

## Recent Fixes

- ✅ Created missing package.json with all required dependencies
- ✅ Set up proper Create React App structure with src/ and public/ directories
- ✅ Fixed import paths and file organization
- ✅ Configured development server and build scripts
- ✅ Added proper React Router navigation
- ✅ Set up Express backend with MongoDB integration

# MoodMuse - Personal Mood and Writing Companion

A React-based web application for journaling and mood tracking.

## Features

- **Writing Page**: Create and save personal journal entries
- **Diary Page**: View all your saved entries with timestamps
- **Mood Tracking**: Interactive mood selection on the homepage
- **Responsive Design**: Works on both desktop and mobile devices
- **Local Storage**: Entries are saved locally in your browser

## Fixed Issues

✅ **Project Structure**: Proper React app setup with correct file structure
✅ **Dependencies**: All required npm packages installed
✅ **Navigation**: Profile section removed from navbar as requested  
✅ **Diary Functionality**: Displays entries with proper formatting and timestamps
✅ **Error Handling**: Improved error states and loading messages
✅ **Responsive Design**: Mobile-friendly layout
✅ **Demo Data**: Sample entries included for better user experience

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app

## Navigation

- **Home**: Welcome page with mood selection
- **Writing**: Create new journal entries
- **Diary**: View all your saved entries

## Data Storage

Currently uses browser localStorage for data persistence. Entries include:

- Content text
- Creation timestamp
- Unique ID for each entry

## Technologies Used

- React 18
- React Router for navigation
- CSS3 with modern features (backdrop-filter, gradients)
- localStorage for data persistence

## Future Enhancements

- Backend database integration (MongoDB)
- User authentication
- Mood analytics and insights
- Entry search and filtering
- Export functionality

# MoodMuse - Personal Mood and Writing Companion

A React-based web application for journaling and mood tracking.

## Features

- **🎭 Animated Homepage**: Beautiful GIF-like CSS animations with breathing circles, floating particles, and interactive elements
- **🔐 Authentication**: Beautiful login and signup pages with form validation
- **✍️ Writing Page**: Create and save personal journal entries
- **📖 Diary Page**: View all your saved entries with timestamps
- **😊 Interactive Mood Tracking**: Animated mood buttons with click feedback that save daily mood and navigate to writing
- **👤 User Management**: Personalized welcome messages and user sessions
- **✨ Rich Animations**: Breathing effects, floating particles, shimmer effects, and button interactions
- **📱 Responsive Design**: Works perfectly on both desktop and mobile devices
- **💾 Local Storage**: Entries, user data, and daily moods saved locally in your browser

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
- **Login**: User authentication with email/password
- **Sign Up**: New user registration with validation

## Animation Features

- **🌬️ Breathing Circle**: Central meditation-inspired breathing animation
- **✨ Floating Particles**: Six animated emoji particles (✨🌙💫🌟☁️🦋) floating around the centerpiece
- **🔄 Rotating Rings**: Dual rotating gradient rings for visual depth
- **💫 Shimmer Effects**: Subtle light shimmer across the welcome content
- **🎯 Interactive Buttons**: Mood buttons with hover, press, and wiggle animations
- **📱 Responsive Animations**: All animations scale beautifully on mobile devices

## Authentication Features

- **📝 Sign Up**: Register with first name, last name, email, and secure password
- **🔒 Password Strength**: Real-time password strength indicator
- **🔑 Login**: Secure login with email and password
- **👁️ Password Visibility**: Toggle password visibility
- **✅ Form Validation**: Comprehensive client-side validation
- **🎨 Beautiful UI**: Glassmorphism design with floating animations
- **📱 Responsive**: Mobile-friendly authentication forms

## Data Storage

Currently uses browser localStorage for data persistence:

**User Data:**

- User profile information (name, email)
- Authentication status
- Registration/login timestamps

**Journal Entries:**

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

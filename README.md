# DSA Progress Tracker

A modern, responsive web application built with React to help developers track their Data Structures and Algorithms (DSA) practice progress. The application provides a curated list of LeetCode problems organized by different DSA categories, making it easier to systematically practice and monitor your progress.

## Features

### 🎯 Core Features
- **Categorized Problems**: Well-organized problems divided into key DSA categories:
  - Arrays
  - Strings
  - Linked Lists
  - Trees
  - Graphs
  - Dynamic Programming

### 💡 User Experience
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Progress Tracking**: Visual progress indicators for each category
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Problem Difficulty**: Clear indication of problem difficulty (Easy, Medium, Hard)
- **Direct LeetCode Links**: Quick access to problems on LeetCode

### 📊 Progress Visualization
- **Category Progress**: Circular progress bars showing completion percentage
- **Overall Progress**: Horizontal progress bar for total progress across all categories
- **Status Tracking**: Mark problems as:
  - Pending
  - Completed
  - Need Revision

## Tech Stack

### Frontend
- **React**: Core framework for building the user interface
- **React Router**: For handling navigation between pages
- **Context API**: For state management
- **Mock API** For DSA Questions
- **Tailwind CSS**: For styling and responsive design

### Additional Tools
- **React Icons**: For UI icons
- **React Top Loading Bar**: For progress indication
- **Local Storage**: For persisting user preferences

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd DSA_Tracker_React
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   The application will start running on [http://localhost:3000](http://localhost:3000)

## Project Structure

```
DSA_Tracker_React/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/        # React Context for state management
│   ├── pages/          # Page components
│   └── App.js          # Root component
├── public/             # Static files
└── package.json        # Project dependencies and scripts
```

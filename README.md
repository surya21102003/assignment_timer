⏱ Timer App – React.js
A categorized, multi-timer web app built with React.js. Supports countdown timers with start, pause, reset, progress bar, halfway alerts, completion logs, and history tracking.

📦 Features
✅ Create timers with name, duration, and category

⏳ Countdown with start/pause/reset controls

📁 Group timers by category (collapsible sections)

📊 Visual progress bar per timer

📂 History page showing completed timers

📢 Halfway alert (optional)

🔃 Bulk actions per category (Start/Pause/Reset all)

💾 Data persistence using localStorage

🔧 Built using React, useReducer, react-router-dom

🚀 Getting Started
1. Clone the repository
git clone https://github.com/surya21102003/assignment_timer
cd timer-app

3. Install dependencies

npm install,

3. Run the development server

npm start,

The app will run at: http://localhost:3000

🗂 Folder Structure

src/
├── App.js                 # Root component with routing and reducer setup
├── index.js              # Entry point
├── store/
│   └── timersReducer.js  # Reducer and initial state logic
├── pages/
│   ├── HomePage.js       # Main timer management screen
│   └── HistoryPage.js    # Completed timers history view
└── components/
    ├── TimerForm.js      # Add new timer form
    ├── TimerItem.js      # Individual timer with countdown
    └── CategorySection.js# Timer groups and bulk controls
⚙️ Technologies Used
React.js

React Router DOM v6

useReducer for global timer state management

localStorage for persistence

uuid for unique timer IDs


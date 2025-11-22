# BOO Clone — Take-Home Assignment

This project is a recreation of the BOO question page using Next.js (Pages Router) and TailwindCSS, based on the take-home assignment instructions.

# Reference Page:
https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of

# Tech Stack
Next.js (Pages Router)
React
TailwindCSS
Mock API Routes
Local mock data (no backend)


# Getting Started
1. Install dependencies
npm install

2. Run development server
npm run dev


# Then open your browser:

👉 http://localhost:3000/questions/dwsQOX

# Time Spent
Item	Waktu
Start	06:30 WIB
End	10:30 WIB
Total Duration	4 hours

(Di bawah limit 4 jam sesuai instruksi.)

# What I Completed
Fully setup project using Next.js Pages Router.
Implemented layout structure (Navbar, Sidebar, Main content).
Styled everything using TailwindCSS only.

# Recreated:
Question header section
Card layout & spacing
Typography & colors
Options UI
Added mocked API endpoints under /pages/api/...
Built interactive UI components using React state.
Ensured responsiveness for mobile & desktop.
Sidebar collapsible system (like BOO).
Scroll behavior improvements.

# What I Skipped (Due to Time Limit)
Animations & micro-interactions persis seperti BOO.
Transitions untuk pilihan (vote animation).
Full user profile popover.
Dynamic routing based on question IDs.
SEO tags & social meta.

# What I Would Improve With More Time
Add more realistic mock API (users, questions, votes).
Add animations using Framer Motion.
Implement global state (Zustand/Context).
Improve mobile UX & transitions.


# Project Structure
/pages
  /api
    question.js    # mock API
  index.js
  question/[id].js
/components
  Navbar.js
  Sidebar.js
  Layout.js
  QuestionCard.js
/styles
  globals.css

# github : https://github.com/fandiaji45/boo-clone
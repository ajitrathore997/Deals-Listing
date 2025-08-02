

Overview
This is a fully responsive, React-based application designed to manage and visualize deals. It includes dynamic filters, grouped listings, and expandable deal rows for efficient navigation and use.

Features
- Deal Listing: Grouped and expandable rows for better data management.
- Filters & Search: Filter by assignee and stage, with a live search bar.
- Responsive UI: Built using Ant Design’s grid system for seamless UX across devices.

Tech Stack
- Frontend: React (Vite), Ant Design
- Backend: Node.js, Express.js

Project Setup

Backend
1. Navigate to the server directory:
   cd server
2. Start the backend server:
   npm start
3. The API will run on: http://localhost:3000

Frontend
1. Navigate to the client directory:
   cd client
2. Install dependencies and start the frontend:
   npm install
   npm run dev
3. Access the app at: http://localhost:5173

Usage
- Open http://localhost:5173 in your browser.
- Use the search bar and filters to query deals.
- Expand deal groups to view detailed listings.

API Endpoints
- GET /api/deals: Fetch deals with optional search, assignee, and stage query parameters.
- GET /api/assignees: Fetch unique assignees.
- GET /api/stages: Fetch unique stages.

Core Components
- DealsList: Displays grouped deal data with expandable rows.
- Filters: Provides search and filter options.
- Header: Application header.

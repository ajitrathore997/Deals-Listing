Overview
A React-based application for managing deals, built with Vite for the frontend, Node.js/Express.js for the backend, and styled with Ant Design. The app features deal listings, filters, and search functionality using dummy data and designed to be fully responsive.
Features

Deal Listing: Display grouped deal data with expandable rows.
Filters and Search: Apply filters by assignee and stage, with a search bar.
Responsive Design: Styled with Ant Design's grid system.

Tech Stack

Frontend: Vite, React, Ant Design
Backend: Node.js, Express.js


Start the backend:node server.js

The API will run on http://localhost:3000.

Frontend Setup

Navigate to the client/ directory:cd client


Start the frontend:npm run dev

Access the app at http://localhost:5173 (default Vite port).

Usage

Open http://localhost:5173 in your browser.
Use the search bar and filters to query deals.
Expand deal groups to view detailed listings.

API Endpoints

GET /api/deals: Fetch deals with optional search, assignee, and stage query parameters.
GET /api/assignees: Fetch unique assignees.
GET /api/stages: Fetch unique stages.

Components

DealsList: Displays grouped deal data with expandable rows.
Filters: Provides search and filter options.
Header: Application header.
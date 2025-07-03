
# 🧾 Log Ingestion and Querying System

This is a full-stack developer tool built with Node.js and React that allows real-time ingestion, searching, filtering, and visualization of structured logs. The application strictly follows the requirements outlined in the assessment document — using a local JSON file for persistence and implementing all filters and API specs.

---

## 🔍 Project Overview & Approach

The goal was to simulate a production-grade log ingestion and monitoring tool, without using any external databases. The application is split into:

- **Backend (Node.js + Express):** Accepts and stores logs in `logs.json`, provides filtered queries, and supports real-time updates using Socket.IO.
- **Frontend (React):** Allows developers to search/filter logs, view them with visual distinction, and see real-time updates via WebSockets.

**Approach Highlights:**

- Logs are stored in a flat JSON file and filtered using native JavaScript methods.
- API layer built with proper schema validation and status codes.
- Socket.IO integration ensures real-time UI updates when new logs are ingested.
- Modular React frontend with Bootstrap for clean UI/UX.
- A bar chart (via Chart.js) provides a visual breakdown of logs by level.

---

## 🛠 Installation Instructions

Before you begin, make sure **Node.js (v16 or higher)** and **npm** are installed on your machine.

---

### 📦 Backend Setup (Node.js)

1. Navigate to the backend folder:
   cd backend
2. Install backend dependencies:

   npm install

   - This installs:
   - express – Server framework
   - cors – For frontend-backend connection
   - fs-extra – For file read/write
   - socket.io – Real-time log broadcasting
   - Make sure a file named logs.json exists. If not, create one with: []

### 🌐 Frontend Setup (React)

1. In a new terminal, navigate to the frontend folder:

   cd frontend

2. Install frontend dependencies:

   npm install

   - This installs:

   - react, react-dom, react-scripts
   - axios – For HTTP requests
   - bootstrap – For UI
   - socket.io-client – WebSocket client
   - chart.js, react-chartjs-2 – For bar chart
   - react-top-loading-bar – For loading UI

🚀 Running the Project

▶️ Start Backend

- cd backend
- node index.js
- Runs at: http://localhost:5000

▶️ Start Frontend

- cd frontend
- npm start
- Opens at: http://localhost:3000
=======
# 🧾 Log Ingestion and Querying System

This is a full-stack developer tool built with Node.js and React that allows real-time ingestion, searching, filtering, and visualization of structured logs. The application strictly follows the requirements outlined in the assessment document — using a local JSON file for persistence and implementing all filters and API specs.

---

## 🔍 Project Overview & Approach

The goal was to simulate a production-grade log ingestion and monitoring tool, without using any external databases. The application is split into:

- **Backend (Node.js + Express):** Accepts and stores logs in `logs.json`, provides filtered queries, and supports real-time updates using Socket.IO.
- **Frontend (React):** Allows developers to search/filter logs, view them with visual distinction, and see real-time updates via WebSockets.

**Approach Highlights:**

- Logs are stored in a flat JSON file and filtered using native JavaScript methods.
- API layer built with proper schema validation and status codes.
- Socket.IO integration ensures real-time UI updates when new logs are ingested.
- Modular React frontend with Bootstrap for clean UI/UX.
- A bar chart (via Chart.js) provides a visual breakdown of logs by level.

---

## 🛠 Installation Instructions

Before you begin, make sure **Node.js (v16 or higher)** and **npm** are installed on your machine.

---

### 📦 Backend Setup (Node.js)

1. Navigate to the backend folder:
   cd backend
2. Install backend dependencies:

   npm install

   - This installs:
   - express – Server framework
   - cors – For frontend-backend connection
   - fs-extra – For file read/write
   - socket.io – Real-time log broadcasting
   - Make sure a file named logs.json exists. If not, create one with: []

### 🌐 Frontend Setup (React)

1. In a new terminal, navigate to the frontend folder:

   cd frontend

2. Install frontend dependencies:

   npm install

   - This installs:

   - react, react-dom, react-scripts
   - axios – For HTTP requests
   - bootstrap – For UI
   - socket.io-client – WebSocket client
   - chart.js, react-chartjs-2 – For bar chart
   - react-top-loading-bar – For loading UI

🚀 Running the Project

▶️ Start Backend

- cd backend
- node index.js
- Runs at: http://localhost:5000

▶️ Start Frontend

- cd frontend
- npm start
- Opens at: http://localhost:3000


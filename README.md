# TaskMaster 📝

A full-stack task management application built with the **MERN** stack (**MongoDB, Express.js, React, Node.js**) and **Vite**. TaskMaster provides a clean, responsive interface to organize, track, and manage daily workflows with real-time UI synchronization and persistent database storage.

---

## 🚀 Features

- **Full CRUD Capabilities:** Create, read, update, toggle completion status, and delete tasks seamlessly.
- **RESTful API Architecture:** Modular backend design using Express.js following the MVC pattern (controllers, routes, models).
- **Persistent Cloud Database:** MongoDB Atlas integration using Mongoose schemas with built-in validation (`trim`, `minLength`).
- **Request Validation Middleware:** Custom middleware ensuring valid MongoDB ObjectIds before query execution to avoid application crashes.
- **Modern Reactive Frontend:** Fast React 19 single-page application powered by Vite, utilizing hooks (`useState`, `useEffect`) for state management.
- **CORS Enabled:** Cross-Origin Resource Sharing configured for smooth client-server communication.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (v19)** – Component-based UI library
- **Vite** – Next-generation build tool & development server
- **CSS3** – Custom responsive styling
- **Fetch API** – Asynchronous client-to-server HTTP requests

### Backend
- **Node.js** – Server-side JavaScript runtime
- **Express.js (v5)** – RESTful API web framework
- **MongoDB & Mongoose (v9)** – NoSQL database and Object Data Modeling (ODM)
- **CORS & Dotenv** – Cross-origin management and environment configuration

---

## 📂 Project Structure

```bash
Task-Master/
├── backend/
│   ├── controllers/
│   │   └── todoController.js     # Request handling & database operations
│   ├── middleware/
│   │   └── validateTodoId.js     # MongoDB ObjectId validation middleware
│   ├── models/
│   │   └── todo.js               # Mongoose schema and model
│   ├── routes/
│   │   └── todoRoutes.js         # API endpoint routes
│   ├── .env                      # Environment variables (private)
│   ├── package.json              # Backend dependencies & scripts
│   └── server.js                 # Express server & DB connection setup
│
├── frontend/
│   ├── public/                   # Static assets & icons
│   ├── src/
│   │   ├── assets/               # Image assets & SVGs
│   │   ├── App.css               # Application layout styles
│   │   ├── App.jsx               # Main React application component
│   │   ├── index.css             # Global stylesheet
│   │   ├── main.jsx              # Application DOM root
│   │   └── Todo.jsx              # Task item presentation component
│   ├── index.html                # Entry HTML template
│   ├── package.json              # Frontend dependencies & scripts
│   └── vite.config.js            # Vite build configuration
│
└── README.md                     # Project documentation
```

---

## 🔌 API Endpoints

All endpoints are prefixed with `/todos`:

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/todos` | Retrieve all tasks | `200 OK` |
| `POST` | `/todos` | Create a new task | `201 Created` |
| `GET` | `/todos/:id` | Retrieve a single task by ID | `200 OK` / `404 Not Found` |
| `PUT` | `/todos/:id` | Update task title or completed status | `200 OK` / `404 Not Found` |
| `DELETE` | `/todos/:id` | Delete a task by ID | `200 OK` / `404 Not Found` |

### Sample Todo Schema
```json
{
  "_id": "67a3f8b0e8c14e0012a9b345",
  "title": "Complete MERN Project Documentation",
  "completed": false,
  "__v": 0
}
```

---

## 💻 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster URI)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository
```bash
git clone https://github.com/kurmasiddartha/Task-Master.git
cd Task-Master
```

---

### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   *The server will start on `http://localhost:5000`.*

---

### 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit the local URL (typically `http://localhost:5173`).

---

## 🔮 Future Enhancements
- [ ] User authentication with JWT and bcrypt (multi-user support).
- [ ] Task categorization (e.g., Work, Personal, Urgent) and priority badges.
- [ ] Due date scheduling and reminders.
- [ ] Filter and search functionalities (Active, Completed, All).

---

## 👤 Author
- GitHub: [@kurmasiddartha](https://github.com/kurmasiddartha)

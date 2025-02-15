# Alemeno Courses Application

A full-stack web application for showcasing courses, course details, and a student dashboard using React, Redux, and Firebase. The backend is built with Express and Firebase Admin SDK to connect to Firestore, and the frontend uses Vite for a fast React development environment.

## Features

### Course Listing Page:

- Fetches and displays a list of courses.
- Search functionality by course name or instructor.
- Real-time update of course likes (bonus feature).

### Course Details Page:

- Displays detailed course information including syllabus (expandable), prerequisites, schedule, etc.

### Student Dashboard:

- Shows courses the student is enrolled in.
- Displays progress bar, due date, and a "Mark as Completed" button.

### State Management:

- Uses Redux (with Redux Toolkit) for managing the global state.

### Responsive Design:

- Built using Tailwind CSS for a clean, responsive UI.

## Installation & Setup

### Backend

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

#### Firebase Setup:

Place your `serviceAccountKey.json` in the backend/firebase folder.

The `firebase/admin.js` file initializes Firebase:

```javascript
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
```

#### Start the Backend Server:

```bash
npm run dev
```

The server will run on port `5000`.

### Frontend

Navigate to the frontend folder (root directory)

Install dependencies:

```bash
npm install
```

Start the Frontend Development Server:

```bash
npm run dev
```

The frontend will run on port `5173` (default Vite port).

## Running the Application

Ensure both the backend and frontend servers are running simultaneously:

```bash
# In one terminal, start the backend
cd backend && npm run dev
```

```bash
# In another terminal, start the frontend
npm run dev
```

Access the application at: `http://localhost:5173`.

## API Endpoints

### Courses API:

#### Get All Courses

```http
GET /api/courses
```

#### Create a Course

```http
POST /api/courses
```

**Request Body:**

```json
{
  "name": "Introduction to React Native",
  "instructor": "Rahul Verma",
  "description": "Learn the fundamentals of React Native and build your first mobile app.",
  "enrollmentStatus": "Open",
  "thumbnail": "/assets/img1.png",
  "duration": "12 weeks",
  "schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
  "location": "Online",
  "prerequisites": ["Basic JavaScript", "Familiarity with React"],
  "syllabus": [
    {
      "week": 1,
      "topic": "Introduction & Environment Setup",
      "content": "Overview of React Native."
    },
    {
      "week": 2,
      "topic": "JSX & Components",
      "content": "Building reusable components."
    }
  ],
  "students": [
    {
      "id": 123,
      "name": "Soumyadip Roy",
      "email": "soumyadiproy1611@gmail.com"
    }
  ],
  "likes": 39,
  "dueDate": "2025-03-15",
  "progress": 0
}
```

## Notes

- Ensure Firebase credentials are correctly set up.
- Make sure the frontend and backend are connected properly.
- Modify `vite.config.js` if needed for proxy settings.

---

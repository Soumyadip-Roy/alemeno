const express = require("express");
const router = express.Router();
const { db } = require("../firebase/admin");

// GET /courses – Fetch all courses
router.get("/", async (req, res) => {
  try {
    const coursesSnapshot = await db.collection("courses").get();
    const courses = [];
    coursesSnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /courses/:id – Fetch a course by ID
router.get("/:id", async (req, res) => {
  try {
    const courseDoc = await db.collection("courses").doc(req.params.id).get();
    if (!courseDoc.exists) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json({ id: courseDoc.id, ...courseDoc.data() });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /courses – Create a new course
router.post("/", async (req, res) => {
  try {
    const newCourse = req.body;
    const docRef = await db.collection("courses").add(newCourse);
    const createdCourse = await docRef.get();
    res.status(201).json({ id: createdCourse.id, ...createdCourse.data() });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// BONUS TASK
// PATCH /courses/:id – Update a course (for handling progress and likes)
router.patch("/:id", async (req, res) => {
  try {
    const courseRef = db.collection("courses").doc(req.params.id);
    const courseDoc = await courseRef.get();
    if (!courseDoc.exists) {
      return res.status(404).json({ error: "Course not found" });
    }
    await courseRef.update(req.body);
    const updatedCourse = await courseRef.get();
    res.json({ id: updatedCourse.id, ...updatedCourse.data() });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

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

module.exports = router;

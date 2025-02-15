require("dotenv").config();
const express = require("express");
const cors = require("cors");
const coursesRouter = require("./routes/courses");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/courses", coursesRouter);

app.get("/", (req, res) => {
  res.send("Firebase Course API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

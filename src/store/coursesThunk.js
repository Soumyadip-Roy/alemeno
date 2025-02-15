import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "http://localhost:5000/courses";

// Async thunk to fetch all courses
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    return await response.json();
  }
);

// Async thunk to fetch a course by ID
export const fetchCourseById = createAsyncThunk(
  "courses/fetchCourseById",
  async (courseId) => {
    const response = await fetch(`${API_BASE_URL}/${courseId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }
    return await response.json();
  }
);

// Async thunk to create a new course
export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData) => {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    });
    if (!response.ok) {
      throw new Error("Failed to create course");
    }
    return await response.json();
  }
);

// Async thunk to update a course
export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ courseId, updateData }) => {
    const response = await fetch(`${API_BASE_URL}/${courseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      throw new Error("Failed to update course");
    }
    return await response.json();
  }
);

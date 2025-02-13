import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courses from "../data/courses";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    // API call simulation with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courses);
      }, 500);
    });
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    markCourseCompleted: (state, action) => {
      const courseId = action.payload;
      const course = state.list.find((course) => course.id === courseId);
      if (course) {
        course.progress = 100;
      }
    },
  },
  //api call simulation
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { markCourseCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;

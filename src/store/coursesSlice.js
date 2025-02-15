import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses, createCourse } from "./coursesThunk";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    currentCourse: null,
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
  extraReducers: (builder) => {
    // fetchCourses
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = naull;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // createCourse
    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { markCourseCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;

import { createSlice, unwrapResult } from "@reduxjs/toolkit";
import data from "../../../mock/data";

const initialState = {
  data: {},
  isError: false,
  error: {},
  list: data,
};

const listCoursesSlice = createSlice({
  name: "listCourses",
  initialState,
  reducers: {
    rateCourse: (state, action) => {
      const index = state.list.courses.findIndex(
        (course) => course.id.toString() === action.payload.id
      );
      console.log("wwdwd",action);
      state.list.courses[index].rating = parseInt(action.payload.newRating) ;
    },
    fetchSingleCourse: (state, action) => {
      const filterSpecificCourse = state.list.courses.filter((a) => {
        return action.payload.id === a.id.toString();
      });
      console.log(filterSpecificCourse);
      state.data = filterSpecificCourse;
    },
    updateCourseActivity: (state, action) => {
      const index = state.list.courses.findIndex(
        (course) => course.id.toString() === action.payload.id
      );
      const aIndex = action.payload.activeId - 1;
      console.log(aIndex);
      state.list.courses[index].activities[parseInt(aIndex)].completed = true;
    },
  },
});

// Selectors
export const listCoursesSelector = (state) => state.listCoursesSlice;

export const { rateCourse, fetchSingleCourse, updateCourseActivity } =
  listCoursesSlice.actions;

// The reducer
export default listCoursesSlice.reducer;

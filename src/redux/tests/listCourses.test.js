import listCoursesSlice, {
    fetchSingleCourse,
  } from "../modules/slices/listCourses.slice";
  import data from "../../mock/data";
  
  const initialState = {
    data: {},
    isError: false,
    error: {},
    list: data,
  };
  
  describe("listCoursesSlice", () => {
    describe("reducers", () => {
      it("returns initial state", () => {
        const nextState = listCoursesSlice(undefined, {});
        expect(nextState).toStrictEqual(initialState);
      });

    });
  });
  
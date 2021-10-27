//@ts-nocheck
import { createContext, useReducer, useContext } from "react";
//Project files
import coursesReducer from "./coursesReducer";

const CoursesContext = createContext(null);

export function CoursesProvider({ children }) {
  // Local state
  const [courses, dispatchCourses] = useReducer(coursesReducer, []);

  return (
    <CoursesContext.Provider value={{ courses, dispatchCourses }}>
      {children}
    </CoursesContext.Provider>
  );
}

export function useCourses() {
  return useContext(CoursesContext);
}

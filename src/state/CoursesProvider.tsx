// NPM packages
import { createContext, ReactNode, useContext, useReducer } from "react";

//Project files
import coursesReducer from "./coursesReducer";
import iCourse from "types/iCourse"

interface iProp {
  children: ReactNode;
}

interface iContext {
  courses: iCourse[];
  dispatch: Function;
}

const initialState: iCourse[] = [];

const CoursesContext = createContext<iContext>({
  courses: initialState,
  dispatch: () => console.warn("CoursesContext used outside provider"),
});

export function CoursesProvider({ children }: iProp) {

  const [courses, dispatch] = useReducer(coursesReducer, initialState);

  console.log("CoursesProvider", courses);

  return (
    <CoursesContext.Provider value={{ courses, dispatch }}>
      {children}
    </CoursesContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CoursesContext);
  return context;

}

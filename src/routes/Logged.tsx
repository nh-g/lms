// @ts-nocheck
// NPM packages
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Teacher from "components/Teacher";
import Student from "components/Student";
import Login from "components/Login";
import SignUp from "components/Signup";
import Course from "components/Course";
import StudentList from "components/StudentList"
import Navigator from "components/shared/Navigator";

export default function Logged() {
  const { user } = useAuth();
  const isTeacher = user.role === "teacher";
  const isStudent = user.role === "student";

  return (
    <>
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />

      <div className="page template">
        <Navigator />

        {isTeacher && <Route component={Teacher} path="/course-edit" />}

        {isStudent && <Route component={Student} path="/course" />}

        <Route component={Course} path="/courses/:courseID" />
        <Route component={StudentList} path="/students" />
      </div>

    </>
  );
}

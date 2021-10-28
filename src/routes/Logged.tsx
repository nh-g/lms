//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Teacher from "components/Teacher";
import Student from "components/Student";
import Login from "components/Login";
import SignUp from "components/Signup";
import Header from "components/shared/Navigator";
import Course from "components/Course";
import Navigator from "components/shared/Navigator";

export default function Logged() {
  const { user } = useAuth();
  const isTeacher = user.role === "teacher";
  return (
    <>
      {isTeacher ? (
        <Route component={Teacher} path="/course-edit" />
      ) : (
        <Route component={Student} path="/course" />
      )}
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Course} path="/courses/:courseID" />
    </>
  );
}

// @ts-nocheck
// NPM packages
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Teacher from "components/teacher";
import Student from "components/student";
import Login from "components/Login";
import SignUp from "components/Signup";
import Course from "components/Course";
import StudentList from "components/StudentList"
import Navigator from "components/shared/Navigator";

export default function Logged() {
  const { user } = useAuth();
  const isTeacher = user.role === "teacher";

  return (
    <>
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />

      <div className="template">
        <Navigator />

        <Route exact path="/" component={isTeacher ? Teacher : Student} />


        <Route component={Course} path="/courses/:courseID" />
        <Route component={StudentList} path="/students" />
      </div>
    </>
  );
}

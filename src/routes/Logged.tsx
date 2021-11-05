// @ts-nocheck
// NPM packages
import { Route } from "react-router-dom";

// Project files
import Teacher from "components/teacher";
import Student from "components/student";
import Login from "components/authentication/Login";
import SignUp from "components/authentication/Signup";
import Course from "components/course";
import StudentList from "components/teacher/StudentList"
import Navigator from "components/shared/Navigator";
import Profile from "components/profile";
import AddDocuments from "components/teacher/AddDocuments";

import { useUser } from "state/UserProvider";


export default function Logged() {
  const { user } = useUser();
  const isTeacher = user.role === "teacher";

  return (
    <>
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />

      <div className="template">
        <Navigator />

        <Route exact path="/" component={isTeacher ? Teacher : Student} />

        <Route component={Course} path="/courses/:courseID" />

        <Route component={AddDocuments} exact path="/course-edit/:courseID" />

        <Route component={StudentList} path="/students" />
        
        <Route
          component={() => <Profile user={user} />}
          path={`/profile/${user.id}`}
        />
      </div>
    </>
  );
}

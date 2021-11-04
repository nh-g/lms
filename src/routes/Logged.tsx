// @ts-nocheck
// NPM packages
import { Route } from "react-router-dom";

// Project files
import TeacherPage from "components/teacher";
import StudentPage from "components/student";
import Login from "components/authentication/Login";
import SignUp from "components/authentication/Signup";
import Course from "components/course";
import StudentList from "components/teacher/StudentList";
import Profile from "components/profile";
import AddDocuments from "components/teacher/AddDocuments";
import { useUser } from "state/UserProvider";

export default function Logged() {
  const { user } = useUser();
  const HomePage = user.role === "teacher" ? TeacherPage : StudentPage;

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Course} path="/courses/:courseID" />
      <Route component={AddDocuments} exact path="/course-edit/:courseID" />
      <Route component={StudentList} path="/students" />
      <Route component={Profile} path="/profile" />
    </>
  );
}

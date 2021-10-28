//@ts-nocheck
//NM=PM PAckages
import { useState } from "react";

// Project files
import { useAuth } from "state/AuthProvider";
import Identificator from "components/shared/Identificator";
import Sorter from "components/shared/Sorter";
import CoursesList from "components/CoursesList";
import StudentList from "components/StudentList";
import Navigator from "./shared/Navigator";

export default function Teacher() {
  // Global state
  const { user } = useAuth();

  //Local state
  const [selection, setSelection] = useState("courses");

  return (
    <div className="template">
      <Navigator />
      {/* <Identificator username={user.username} role={user.role} /> */}
      <div className="page-container">
        <Sorter hook={[selection, setSelection]} />
        {selection === "courses" && <CoursesList />}
        {selection === "students" && <StudentList />}
      </div>
    </div>
  );
}

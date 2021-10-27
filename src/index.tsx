import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "state/AuthProvider";
import { CoursesProvider } from "state/CoursesProvider";
import { UsersProvider } from "state/UsersProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CoursesProvider>
        <UsersProvider>
          <App />
        </UsersProvider>
      </CoursesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

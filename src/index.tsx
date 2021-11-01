import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "state/AuthProvider";
import { CoursesProvider } from "state/CoursesProvider";
import { UserProvider } from "state/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <CoursesProvider>
          <App />
        </CoursesProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "components/authentication/Login";
import SignUp from "components/authentication/Signup";
import Landing from "components/Landing";
import ResetPassword from "components/authentication/ResetPassword";

export default function Unlogged() {
  return (
    <>
      <Route component={Landing} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={ResetPassword} path="/password-reset" />
    </>
  );
}

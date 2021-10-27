//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "components/Login";
import SignUp from "components/Signup";
import Landing from "components/Landing";
import Recover from "components/Recover";

export default function Unlogged() {
  return (
    <>
      <Route component={Landing} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Recover} path="/recover" />
    </>
  );
}

import { NavLink, useHistory } from "react-router-dom";

import logo from "assets/images/bale-logo.png";
import Dropdown from "./Dropdown";
import { useAuth } from "state/AuthProvider";

export default function Header() {
  // Global state
  const { user, setUser, setLoggedIn } = useAuth();
  const history = useHistory();

  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setLoggedIn(false);
    history.push("/login");
  }

  return (
    <header>
      <nav>
        <NavLink to="/" className="home">
          <img src={logo} alt="Home" />
          <h2>
            Foot<strong>X</strong>
          </h2>
        </NavLink>
        <Dropdown onLogout={onLogout} />
      </nav>
    </header>
  );
}

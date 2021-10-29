// NPM packages
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

// Project files
import logo from "assets/brand/logo.png";
import { useAuth } from "state/AuthProvider";

export default function Navigator() {
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
    <nav className="navigation-bar">
      <a href="/" className="nav-logo">
        <img src={logo} alt="Home" />
      </a>

      <hr />

      <div className="item-navigation">
        <div className="label">Hello</div>
        <div className="icon">
          <h4>{user.username}</h4>
        </div>
      </div>

      {user.role === "teacher" && (
        <Link to="/students" className="item-navigation ">
          <div className="icon">
            <RiContactsBookLine />
          </div>
          <div className="label">Students</div>
        </Link>
      )}

      <a href="/" className="item-navigation selected">
        <div className="icon">
          <FiBookOpen />
        </div>
        <div className="label">Courses</div>
      </a>

      <a
        href="https://calendar.google.com/calendar"
        target="_blank"
        rel="noreferrer"
        className="item-navigation"
      >
        <div className="icon">
          <FaCalendarAlt />
        </div>
        <div className="label">Calendar</div>
      </a>

      <Link to={`/profile/${user.id}`} href="" className="item-navigation ">
        <div className="icon">
          <FaUserAlt />
        </div>
        <div className="label">Profile</div>
      </Link>

      <a href="" className="item-navigation ">
        <div className="icon">
          <AiOutlineLogout onClick={onLogout} />
        </div>
        <div className="label">Logout</div>
      </a>
    </nav>
  );
}

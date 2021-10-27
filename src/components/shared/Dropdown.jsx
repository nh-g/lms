import { useState } from "react";
import down from "../../assets/images/down.png";
import calendar from "assets/images/calendar.png";
import logout from "assets/images/logout.png";
import cross from "assets/images/cross.png";
import { useAuth } from "state/AuthProvider";

export default function Dropdown({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className={isOpen ? "dropdown dropdown-open" : "dropdown"}>
      <div className="buttons">
        <button type="button" className="btn calendar ">
          <img src={calendar} alt="." />
          <h4>See calendar</h4>
        </button>
        <button type="button" className="btn logout" onClick={onLogout}>
          <img src={logout} alt="." />
          <h4>Logout</h4>
        </button>
        <div className="open">
          <h4>@{user.username}</h4>
          <button
            type="button"
            className="btn "
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={!isOpen ? down : cross} alt="." />
          </button>
        </div>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import clsx from "clsx";

const UserMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };
  return (
    <div>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};
export default UserMenu;

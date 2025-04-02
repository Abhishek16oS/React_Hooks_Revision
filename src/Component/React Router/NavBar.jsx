import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div>
      <ul className="flex justify-around text-xl">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-indigo-600" : "text-gray-500"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-indigo-600" : "text-gray-500"
            }
            to={"/user"}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-indigo-600" : "text-gray-500"
            }
            to={"/college"}
          >
            College
          </NavLink>
        </li>
      
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

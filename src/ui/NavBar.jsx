import React from "react";
import Avatar from "./Avatar";

import {
  HiOutlineFire,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBell,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

export default function NavBar() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="">
      <ul
        className={` ${
          darkMode ? "header-nav-dark" : "header-nav"
        }  d-flex align-items-center nav justify-content-end  p-3 gap-3`}
      >
        <li>
          <Avatar src="https://picsum.photos/200" alt="avatar" />
        </li>
        <li>
          <Link to="/user/account">
            <span className="fw-bold">profile</span>
          </Link>
        </li>
        <li>
          <span>
            <HiOutlineBell size={20} />
          </span>
        </li>
        <li>
          <span>
            <HiOutlineFire size={20} />
          </span>
        </li>
        <li>
          <span onClick={() => setDarkMode(!darkMode)} className="pointer">
            {darkMode ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} />
            )}
          </span>
        </li>
        <li>
          <span>
            <HiOutlineArrowRightOnRectangle size={20} />
          </span>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { useSliderToggle } from "../context/SliderToggleContext";
import {
  HiHome,
  HiUser,
  HiMiniBookOpen,
  HiMiniGlobeAsiaAustralia,
} from "react-icons/hi2";
import Footer from "./Footer";
import { useDarkMode } from "../context/DarkModeContext";

export default function SideBar() {
  const { show } = useSliderToggle();
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode ? "sidebar-dark" : "border-end"
      } trans h-100 d-flex flex-column align-items-center  overflow-x-hidden overflow-y-auto ${
        show ? "p-3" : "p-0"
      }`}
    >
      <img
        src="https://picsum.photos/200"
        alt="logo"
        width="85px"
        height="85px"
        className="rounded-circle"
      />
      <p className="lead fw-bold ">CodeRoad</p>
      <div className={`${darkMode ? "sidebar-div-dark" : ""} sidebar-div `}>
        <NavLink to="/">
          <span className="sidebar-button">
            <HiHome size={20} /> Home
          </span>
        </NavLink>
        <NavLink to="/user">
          <span className="sidebar-button">
            <HiUser size={20} /> User
          </span>
        </NavLink>
        <NavLink to="/topics">
          <span className="sidebar-button">
            <HiMiniBookOpen size={20} /> Topics
          </span>
        </NavLink>
        <NavLink to="/posts">
          <span className="sidebar-button">
            <HiMiniGlobeAsiaAustralia size={20} /> Posts
          </span>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}

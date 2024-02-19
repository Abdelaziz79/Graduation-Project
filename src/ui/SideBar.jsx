import React from "react";
import { NavLink } from "react-router-dom";
import { useSliderToggle } from "../context/SliderToggleContext";
import {
  HiHome,
  HiUser,
  HiMiniBookOpen,
  HiMiniGlobeAsiaAustralia,
} from "react-icons/hi2";

export default function SideBar() {
  const { show } = useSliderToggle();
  return (
    <div
      className={` trans h-100 bg-body-tertiary d-flex flex-column align-items-center  overflow-x-hidden overflow-y-auto ${
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
      <div className="sidebar-div ">
        <NavLink to="/">
          <span>
            <HiHome size={20} />{" "}
          </span>
          home
        </NavLink>
        <NavLink to="/user">
          <span>
            <HiUser size={20} />{" "}
          </span>
          user
        </NavLink>
        <NavLink to="/toipcs">
          <span>
            <HiMiniBookOpen size={20} />{" "}
          </span>
          toipcs
        </NavLink>
        <NavLink to="/posts">
          <span>
            <HiMiniGlobeAsiaAustralia size={20} />{" "}
          </span>
          posts
        </NavLink>
      </div>
    </div>
  );
}

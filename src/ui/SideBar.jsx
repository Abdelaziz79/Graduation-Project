import React from "react";
import { Link } from "react-router-dom";
import { useSliderToggle } from "../context/SliderToggleContext";

export default function SideBar() {
  const { show } = useSliderToggle();
  return (
    <div
      className={` trans h-100 bg-body-tertiary d-flex flex-column overflow-x-hidden overflow-y-auto ${
        show ? "p-3" : "p-0"
      }`}
    >
      <h3>CodeRoad</h3>
      <div className="sidebar-div ">
        <Link to="/">home</Link>
        <Link to="/user">user</Link>
        <Link to="/toipcs">toipcs</Link>
        <Link to="/dashboard">dashboard</Link>
      </div>
    </div>
  );
}

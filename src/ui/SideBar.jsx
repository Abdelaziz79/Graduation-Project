import React from "react";
import { Link } from "react-router-dom";
import { useSliderToggle } from "../context/SliderToggleContext";

export default function SideBar() {
  const { show } = useSliderToggle();
  return (
    <div
      className={`bg-body-tertiary d-flex flex-column overflow-x-hidden overflow-y-auto  ${
        show ? "p-3" : "p-0"
      }`}
      style={{ height: "100%", transition: "all 0.3s ease" }}
    >
      <h3>CodeRoad</h3>
      <Link to="/">home</Link>
      <Link to="/user">user</Link>
      <Link to="/">home</Link>
    </div>
  );
}

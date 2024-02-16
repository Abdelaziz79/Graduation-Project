import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className={`bg-body-tertiary d-flex flex-column overflow-x-hidden overflow-y-auto p-3`}
      style={{ minHeight: "100vh" }}
    >
      <h3>CodeRoad</h3>
      <Link to="/">home</Link>
      <Link to="/user">user</Link>
      <Link to="/">home</Link>
    </div>
  );
}

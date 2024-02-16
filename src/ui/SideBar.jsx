import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-body-tertiary d-flex flex-column min-vh-100 overflow-x-hidden overflow-y-auto p-3 ">
      <h3>CodeRoad</h3>
      <Link to="/">home</Link>
      <Link to="/user">user</Link>
      <Link to="/">home</Link>
    </div>
  );
}

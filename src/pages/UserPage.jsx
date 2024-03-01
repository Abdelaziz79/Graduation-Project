import React, { useEffect } from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  HiDocumentPlus,
  HiIdentification,
  HiMiniBeaker,
  HiMiniClipboardDocumentList,
} from "react-icons/hi2";

export default function UserPage() {
  const navigate = useNavigate();
  const url = window.location.pathname;
  useEffect(() => {
    if (url === "/user") {
      navigate("/user/123");
    }
  }, [url, navigate]);
  return (
    <>
      <h1>UserPage</h1>
      <hr />
      <div className="user-button">
        <NavLink to="123">
          <span className="">
            <HiIdentification size={20} />
            User Info
          </span>
        </NavLink>
        <NavLink to="addpost">
          <span className="">
            <HiDocumentPlus size={20} />
            Add Post
          </span>
        </NavLink>

        <NavLink to="addtopic">
          <span className="">
            <HiMiniBeaker />
            Add Topic
          </span>
        </NavLink>
        <NavLink to="update">
          <span className="">
            <HiMiniClipboardDocumentList size={20} />
            Update Info
          </span>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import {
  HiDocumentPlus,
  HiIdentification,
  HiMiniBeaker,
  HiMiniClipboardDocumentList,
} from "react-icons/hi2";

export default function UserPage() {
  return (
    <>
      <h1>UserPage</h1>
      <hr />
      <div className="user-button">
        <NavLink to="id">
          <span className="">
            <HiIdentification size={20} />
            User Info
          </span>
        </NavLink>
        <NavLink to="addPost">
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

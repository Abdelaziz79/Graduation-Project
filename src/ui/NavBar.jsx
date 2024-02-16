import React from "react";
import Avatar from "./Avatar";

import { HiMiniBell } from "react-icons/hi2";
import { HiFire } from "react-icons/hi2";

export default function NavBar() {
  return (
    <div className="">
      <ul className="d-flex align-items-center nav justify-content-end bg-body-tertiary p-3 gap-3">
        <li>
          <Avatar src="https://picsum.photos/200" alt="avatar" />
        </li>
        <li>
          <span className="fw-bold">profile</span>
        </li>
        <li>
          <span>
            <HiMiniBell size={20} />
          </span>
        </li>
        <li>
          <span>
            <HiFire size={20} />
          </span>
        </li>
      </ul>
    </div>
  );
}

import React from "react";

import { useSliderToggle } from "../context/SliderToggleContext";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";

export default function SliderToggleButton() {
  const { show, handleToggle } = useSliderToggle();
  return (
    <span
      className="p-2 rounded-circle trans sidebar-toggle-button border "
      style={{
        left: show ? "175px" : "0px",
        transform: show ? "translate(0%, 0%)" : "translate(-50%, 0%)",
      }}
      onClick={() => handleToggle(!show)}
    >
      {show ? (
        <HiOutlineChevronDoubleLeft size={30} />
      ) : (
        <HiOutlineChevronDoubleRight size={30} />
      )}
    </span>
  );
}

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
      className="p-2 rounded-circle trans sidebar-toggle-button border"
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

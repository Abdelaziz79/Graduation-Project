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
      className=""
      style={{
        cursor: "pointer",
        position: "fixed",
        zIndex: "1000",
        top: "50%",
        left: show ? "190px" : "0px",
        transition: "all 0.3s ease",
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

import React, { useEffect, useState } from "react";

import { useSliderToggle } from "../context/SliderToggleContext";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi2";

export default function SliderToggleButton() {
  const { show, setShow } = useSliderToggle();
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (pageWidth < 768) {
      setShow(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageWidth, setShow]);
  return (
    <span
      className="p-2 rounded-circle trans sidebar-toggle-button border"
      onClick={() => setShow(!show)}
    >
      {show ? (
        <HiOutlineChevronDoubleLeft size={30} />
      ) : (
        <HiOutlineChevronDoubleRight size={30} />
      )}
    </span>
  );
}

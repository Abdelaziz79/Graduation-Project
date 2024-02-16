import React from "react";

export default function Avatar({ src, alt = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      width="50px"
      height="50px"
      className="rounded-circle"
    />
  );
}

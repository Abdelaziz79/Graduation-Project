import React from "react";

export default function Avatar({ src, alt = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      width="40px"
      height="40px"
      className="rounded-circle"
    />
  );
}

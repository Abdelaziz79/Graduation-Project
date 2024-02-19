import React from "react";

export default function Box({ item }) {
  return (
    <div className="box p-3 ">
      <p className="fw-bold mb-2 ">{item.title}</p>
      <span
        className={`p-1 rounded-3 text-center text-white fs-6 ${item.level}`}
      >
        {item.level}
      </span>
    </div>
  );
}

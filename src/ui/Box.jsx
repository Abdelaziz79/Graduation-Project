import React from "react";
import { Link } from "react-router-dom";

export default function Box({ item }) {
  const topics = item.topics.split("-");

  return (
    <Link to={`/topics/${item.id}`} className="text-decoration-none">
      <div className="box p-3 ">
        <p className="fw-bold mb-2 ">{item.title}</p>
        <span
          className={`p-1 rounded-3 text-center text-white fs-6 ${item.level}`}
        >
          {item.level}
        </span>
        <div>
          {topics?.map((topic) => (
            <Tage key={topic} name={topic} kay={item.id} />
          ))}
        </div>
      </div>
    </Link>
  );
}

function Tage({ name }) {
  return <span className="p-1 rounded-3 text-center  fs-6">{name}</span>;
}

import React from "react";
import Algorithms from "../ui/Algorithms";
import DataStructures from "../ui/DataStructures";

export default function Toipcs() {
  return (
    <div>
      <h1 className="mb-4">Alogrithm</h1>
      <Algorithms />
      <hr />
      <h1 className="mb-4">Data Structure</h1>
      <DataStructures />
      <hr />
    </div>
  );
}

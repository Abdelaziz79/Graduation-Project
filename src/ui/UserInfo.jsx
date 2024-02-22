import React from "react";
import { useParams } from "react-router-dom";

export default function UserInfo() {
  const { id } = useParams();
  return <div>{id}</div>;
}

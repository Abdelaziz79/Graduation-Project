import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDeleteExplanation } from "./useDeleteExplanation";
import {
  HiOutlineArrowUpOnSquare,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import { useDarkMode } from "../../context/DarkModeContext";

export default function TableComp({ explanations }) {
  const { deleteExplanation, isLoading } = useDeleteExplanation();
  const { darkMode } = useDarkMode();
  return (
    <Table
      striped
      bordered
      hover
      responsive
      className={` ${darkMode ? "table-dark" : ""} `}
    >
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Topics</th>
          <th>Level</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {explanations?.map((explanation, index) => (
          <tr key={explanation.id}>
            <td className="t-td">
              <Link
                to={`/topics/${explanation.id}`}
                className={`text-decoration-none ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                {index + 1}
              </Link>
            </td>
            <td className="t-td">
              <Link
                to={`/topics/${explanation.id}`}
                className={`text-decoration-none t-title ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                {explanation.title}
              </Link>
            </td>
            <td className="t-td">
              <Link
                to={`/topics/${explanation.id}`}
                className={`text-decoration-none t-topics ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                {explanation.topics?.split("-").join(", ")}
              </Link>
            </td>
            <td className="t-td">
              <Link
                to={`/topics/${explanation.id}`}
                className={`text-decoration-none ${
                  darkMode ? "text-light" : "text-dark"
                }`}
              >
                {explanation.level}
              </Link>
            </td>
            <td className="t-td">
              <Link>
                <button
                  className={`btn ${darkMode ? "text-light" : "text-dark"}`}
                  disabled={isLoading}
                  onClick={() => deleteExplanation(explanation.id)}
                >
                  <HiOutlineTrash size={20} />
                </button>
              </Link>
              <Link to={`/topics/edit/${explanation.id}`}>
                <button
                  className={`btn  ${darkMode ? "text-light" : "text-dark"}`}
                  disabled={isLoading}
                >
                  <HiOutlinePencilSquare size={20} />
                </button>
              </Link>
              <Link to={`/topics/${explanation.id}`}>
                <button
                  className={`btn ${darkMode ? "text-light" : "text-dark"}`}
                  disabled={isLoading}
                >
                  <HiOutlineArrowUpOnSquare size={20} />
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

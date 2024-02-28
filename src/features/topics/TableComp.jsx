import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDeleteExplanation } from "./useDeleteExplanation";
import {
  HiOutlineArrowUpOnSquare,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

export default function TableComp({ explanations }) {
  const { deleteExplanation, isLoading } = useDeleteExplanation();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Topics</th>
          <th>Level</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {explanations?.map((explanation, index) => (
          <tr key={explanation.id}>
            <td>
              <Link
                to={`/topics/${explanation.id}`}
                className="text-decoration-none text-dark"
              >
                {index + 1}
              </Link>
            </td>
            <td>
              <Link
                to={`/topics/${explanation.id}`}
                className="text-decoration-none text-dark"
              >
                {explanation.title}
              </Link>
            </td>
            <td>
              <Link
                to={`/topics/${explanation.id}`}
                className="text-decoration-none text-dark"
              >
                {explanation.topics?.split("-").join(", ")}
              </Link>
            </td>
            <td>
              <Link
                to={`/topics/${explanation.id}`}
                className="text-decoration-none text-dark"
              >
                {explanation.level}
              </Link>
            </td>
            <td>
              <Link>
                <button
                  className="btn  "
                  disabled={isLoading}
                  onClick={() => deleteExplanation(explanation.id)}
                >
                  <HiOutlineTrash size={20} />
                </button>
              </Link>
              <Link to={`/topics/edit/${explanation.id}`}>
                <button className="btn " disabled={isLoading}>
                  <HiOutlinePencilSquare size={20} />
                </button>
              </Link>
              <Link to={`/topics/${explanation.id}`}>
                <button className="btn " disabled={isLoading}>
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

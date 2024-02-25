import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TableComp({ explanations }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Topics</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        {explanations?.map((explanation) => (
          <tr key={explanation.id}>
            <td>
              <Link
                to={`/topics/${explanation.id}`}
                className="text-decoration-none text-dark"
              >
                {explanation.id}
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
                {explanation.level}{" "}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Markdown from "react-markdown";

export default function AddExplanation() {
  const [explanation, setExplanation] = useState("");
  return (
    <Row>
      <Col sm={12} md={12} lg={6}>
        <textarea
          className="no-scroll-width form-control bg-body-tertiary border-0 p-3 rounded-3 w-100 h-100"
          style={{ resize: "none", minHeight: "70vh" }}
          required
          name="explanation"
          id="explanation"
          type="text"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />
      </Col>
      <Col sm={12} md={12} lg={6}>
        <Explanation explanation={explanation} />
      </Col>
    </Row>
  );
}

function Explanation({ explanation }) {
  return <Markdown>{explanation}</Markdown>;
}

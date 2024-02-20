import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AddExplanation() {
  const [explanation, setExplanation] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newExplanation = {
      topic,
      level,
      explanation,
    };
    console.log(newExplanation);
  }
  return (
    <Row className="">
      <Col sm={12} md={12} lg={6} className="">
        <form>
          <label htmlFor="topic" className="form-label fs-4">
            Topic
          </label>
          <input
            type="text"
            name="topic"
            id="topic"
            className=" form-control mb-3"
            placeholder="topic name"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <label htmlFor="level" className="form-label fs-4">
            Level
          </label>
          <select
            name="level"
            id="level"
            className="form-select mb-3"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
          <label htmlFor="explanation" className="form-label fs-4">
            Explanation
          </label>
          <textarea
            className="explanation no-scroll-width form-control bg-body-tertiary border-0 p-3 rounded-3 w-100 h-100"
            placeholder="Add Explanation Here"
            style={{ resize: "none", minHeight: "500px" }}
            required
            type="text"
            id="explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            name="explanation"
          />
        </form>
      </Col>
      <Col sm={12} md={12} lg={6} className="overflow-auto no-scroll-width  ">
        <Explanation explanation={explanation} />
      </Col>
      <Col>
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Add
        </button>
      </Col>
    </Row>
  );
}

function Explanation({ explanation }) {
  return (
    <>
      <label className="form-label fs-4">The Result</label>
      <div style={{ height: "696px" }}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={
            "no-scroll-width rounded p-3 bg-body-tertiary h-100 overflow-auto"
          }
        >
          {explanation}
        </Markdown>
      </div>
    </>
  );
}

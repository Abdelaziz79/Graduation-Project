import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import Explanation from "./Explanation";
import AddQuiz from "./AddQuiz";
import { useNavigate } from "react-router-dom";
import { usePreviewTopic } from "../context/PreviewTopicContext";

const MemoizedExplanation = React.memo(Explanation);

export default function AddExplanation() {
  const { setNewTopic } = usePreviewTopic();

  const [questions, setQuestions] = useState([]);

  const [explanation, setExplanation] = useState("");
  const [topicName, setTopicName] = useState("");
  const [level, setLevel] = useState("easy");
  const [title, setTitle] = useState("");

  const [showQuiz, setShowQuiz] = useState(false);

  const [topic, setTopic] = useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!topicName || !level || !title || !explanation) return;
    const newExplanation = {
      topicName,
      title,
      level,
      explanation,
      questions,
    };

    console.log(newExplanation);
    setTopic(newExplanation);
    setNewTopic(newExplanation);
    navigate("/preview");
    // setExplanation("");
    // setTopic("");
    // setLevel("easy");
    // setTitle("");
    // setQuestions([]);
    // setShowQuiz(false);
  }

  return (
    <Row className="">
      <Col sm={12} md={12} lg={6} className="">
        <form>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <label htmlFor="topic" className="form-label fs-4">
                Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                className=" form-control mb-3"
                placeholder="topic name"
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
              />
            </Col>
            <Col lg={6} md={6} sm={12}>
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
            </Col>
            <Col lg={12} md={12} sm={12}>
              <label htmlFor="title" className="form-label fs-4">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className=" form-control mb-3 "
                placeholder="title name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </Row>
          <label htmlFor="explanation" className="form-label fs-4">
            Explanation
          </label>
          <textarea
            className=" no-scroll-width form-control bg-body-tertiary border p-3 rounded-3 w-100 h-100"
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
        <MemoizedExplanation explanation={explanation} />
      </Col>
      <Col>
        <div className="">
          <Button
            className=" btn-success mt-3"
            onClick={() => setShowQuiz((show) => !show)}
          >
            Add Quize
          </Button>
        </div>
        <div>
          {showQuiz && (
            <AddQuiz questions={questions} setQuestions={setQuestions} />
          )}
        </div>
        <div className="mt-3">
          <Button className=" btn-success " onClick={handleSubmit}>
            Add
          </Button>
        </div>
      </Col>
    </Row>
  );
}

import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import Explanation from "../explanation/Explanation";
import AddQuiz from "./AddQuiz";
// import { useNavigate } from "react-router-dom";
import { usePreviewTopic } from "../../context/PreviewTopicContext";
import useCreateExplanation from "./useCreateExplanation";

const MemoizedExplanation = React.memo(Explanation);

export default function AddExplanation() {
  const { setNewTopic } = usePreviewTopic();

  const [questions, setQuestions] = useState([]);

  const [explanation, setExplanation] = useState("");
  const [topicName, setTopicName] = useState("");
  const [level, setLevel] = useState("easy");
  const [title, setTitle] = useState("");

  const [showQuiz, setShowQuiz] = useState(false);

  const { createExplanation, isLoading } = useCreateExplanation();

  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!topicName || !level || !title || !explanation) return;
    const newExplanation = {
      topics: topicName,
      title,
      level,
      explanation,
    };
    createExplanation(newExplanation, {
      onSuccess: () => {
        setTopicName("");
        setLevel("");
        setTitle("");
        setExplanation("");
        setShowQuiz(false);
      },
    });

    console.log(newExplanation);
    setNewTopic(newExplanation);

    // navigate("/preview");
  }

  return (
    <Row className="">
      <Col sm={12} md={12} lg={6}>
        <form>
          <Row className="h-25">
            <Col>
              <label htmlFor="topic" className="form-label fs-4">
                Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                className=" form-control "
                placeholder="topic name"
                value={topicName}
                disabled={isLoading}
                onChange={(e) => setTopicName(e.target.value)}
              />
            </Col>
            <Col>
              <label htmlFor="level" className="form-label fs-4">
                Level
              </label>
              <select
                disabled={isLoading}
                name="level"
                id="level"
                className="form-select "
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </Col>
            <Col lg={12}>
              <Col>
                <label htmlFor="title" className="form-label fs-4">
                  Title
                </label>
                <input
                  disabled={isLoading}
                  type="text"
                  name="title"
                  id="title"
                  className=" form-control  "
                  placeholder="title name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Col>
          </Row>
          <Row className="h-75">
            <Col className="">
              <label htmlFor="explanation" className="form-label fs-4 ">
                Explanation
              </label>
              <textarea
                disabled={isLoading}
                className="resize-none no-scroll-width form-control bg-body-tertiary border rounded-3 "
                placeholder="Add Explanation Here"
                required
                rows={17}
                type="text"
                id="explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                name="explanation"
              />
            </Col>
          </Row>
        </form>
      </Col>

      <Col className="overflow-auto" sm={12} md={12} lg={6}>
        <label className="form-label fs-4 ">The Result</label>
        <MemoizedExplanation explanation={explanation} />
      </Col>

      <Col>
        <div className="">
          <Button
            disabled={isLoading}
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
          <Button
            className=" btn-success "
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      </Col>
    </Row>
  );
}

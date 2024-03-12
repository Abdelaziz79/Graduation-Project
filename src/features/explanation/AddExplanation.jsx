import AddQuiz from "./AddQuiz";
import useCreateExplanation from "./useCreateExplanation";
import ExplanationForm from "./ExplanationForm";

import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { usePreviewTopic } from "../../context/PreviewTopicContext";
import { useDarkMode } from "../../context/DarkModeContext";

export default function AddExplanation() {
  const { setNewTopic } = usePreviewTopic();

  const [questions, setQuestions] = useState([]);

  const [explanation, setExplanation] = useState("");
  const [topicName, setTopicName] = useState("");
  const [level, setLevel] = useState("easy");
  const [title, setTitle] = useState("");

  const [showQuiz, setShowQuiz] = useState(false);

  const { createExplanation, isLoading } = useCreateExplanation();

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
        setTitle("");
        setExplanation("");
        setLevel("easy");
        setShowQuiz(false);
        setQuestions([]);
      },
    });

    console.log(newExplanation);
    console.log(questions);
    setNewTopic(newExplanation);
  }
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode ? "form-style-dark" : "form-style"
      } p-3 rounded my-3`}
    >
      <Row className="">
        <ExplanationForm
          explanation={explanation}
          setExplanation={setExplanation}
          title={title}
          setTitle={setTitle}
          topicName={topicName}
          setTopicName={setTopicName}
          level={level}
          setLevel={setLevel}
        />
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
    </div>
  );
}

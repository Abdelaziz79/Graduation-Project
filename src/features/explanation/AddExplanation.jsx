import AddQuiz from "./AddQuiz";
import useCreateExplanation from "./useCreateExplanation";
import ExplanationForm from "./ExplanationForm";

import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { usePreviewTopic } from "../../context/PreviewTopicContext";
import { useDarkMode } from "../../context/DarkModeContext";
import { useCreateQuiz } from "../quiz/useCreateQuiz";
import { useNavigate } from "react-router-dom";

export default function AddExplanation() {
  const { setNewTopic } = usePreviewTopic();

  const [quiz, setQuiz] = useState([]);

  const [explanation, setExplanation] = useState("");
  const [topicName, setTopicName] = useState("");
  const [level, setLevel] = useState("easy");
  const [title, setTitle] = useState("");

  const [showQuiz, setShowQuiz] = useState(false);

  const { createExplanation, isLoading } = useCreateExplanation();
  const { createQuiz, isLoading2, quizData } = useCreateQuiz();

  const show = showQuiz && !quizData;
  const navigate = useNavigate();
  function handleAddQuiz() {
    if (quiz.length > 0) {
      createQuiz({ quiz });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!topicName || !level || !title || !explanation) return;

    const newExplanation = {
      topics: topicName,
      title,
      level,
      explanation,
    };
    if (quizData) {
      newExplanation["quiz_id"] = quizData[0]["id"];
    }
    createExplanation(newExplanation, {
      onSuccess: () => {
        setTopicName("");
        setTitle("");
        setExplanation("");
        setLevel("easy");
        setShowQuiz(false);
        setQuiz([]);
      },
    });

    setNewTopic(newExplanation);
    navigate("/preview");
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
            {!quizData && (
              <Button
                disabled={isLoading || isLoading2}
                className=" btn-success mt-3"
                onClick={() => setShowQuiz((show) => !show)}
              >
                Add Quize
              </Button>
            )}
          </div>
          <div>
            {show && (
              <AddQuiz
                questions={quiz}
                setQuestions={setQuiz}
                handleAddQuiz={handleAddQuiz}
              />
            )}
          </div>
          <div className="mt-3">
            <Button
              className=" btn-success "
              disabled={isLoading || isLoading2}
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

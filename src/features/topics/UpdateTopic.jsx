import { useState } from "react";
import ExplanationForm from "../explanation/ExplanationForm";

import { useGetExplanationById } from "./useGetExplanationById";
import { Button } from "react-bootstrap";
import { useUpdateExplanation } from "./useUpdateExplanation";
import { useNavigate } from "react-router-dom";

export default function UpdateTopic() {
  const navigate = useNavigate();

  const { isLoading: isLoading1, updateExplanation } = useUpdateExplanation();

  const { explanation, isLoading: isLoading2 } = useGetExplanationById();

  const [exp, setExp] = useState(explanation.explanation);
  const [title, setTitle] = useState(explanation.title);
  const [level, setLevel] = useState(explanation.level);
  const [topics, setTopics] = useState(explanation.topics);

  function handleUpdate(e) {
    e.preventDefault();
    if (!topics || !level || !title || !explanation) return;

    const newExplanation = {
      id: explanation.id,
      topics,
      title,
      level,
      explanation: exp,
    };

    updateExplanation(newExplanation, {
      onSuccess: () => {
        navigate("/topics");
      },
    });
  }

  return (
    <>
      <ExplanationForm
        explanation={exp}
        isLoading={isLoading1 || isLoading2}
        title={title}
        level={level}
        topicName={topics}
        setExplanation={setExp}
        setTitle={setTitle}
        setLevel={setLevel}
        setTopicName={setTopics}
      />
      <Button className="mt-3" variant="success" onClick={handleUpdate}>
        Update
      </Button>
    </>
  );
}

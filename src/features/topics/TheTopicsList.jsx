import React from "react";
import { useExplanation } from "../explanation/useExplanation";
import { Spinner } from "react-bootstrap";
import Box from "../../ui/Box";

export default function TheTopicsList() {
  const { isLoading, explanationTopics } = useExplanation();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="d-flex gap-3 flex-wrap">
      {explanationTopics.map((explanation) => (
        <Box key={explanation.id} item={explanation} />
      ))}
    </div>
  );
}

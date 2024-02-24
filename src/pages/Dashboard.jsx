import React, { useState } from "react";
import AddExplanation from "../features/explanationTopics/AddExplanation";
import { Button } from "react-bootstrap";
import { useExplanation } from "../features/explanationPage/useExplanation";

export default function Dashboard() {
  const [showExplanation, setShowExplanation] = useState(false);
  const { isLoading, explanationTopics } = useExplanation();
  console.log("explanationTopics", explanationTopics);
  console.log("isLoading", isLoading);
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <Button
        onClick={() => setShowExplanation((show) => !show)}
        variant="success"
        className="mb-3"
      >
        {showExplanation ? "Hide" : "Add"} Explanation
      </Button>
      {showExplanation && <AddExplanation />}
    </div>
  );
}

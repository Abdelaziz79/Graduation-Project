import React, { useState } from "react";
import AddExplanation from "../ui/AddExplanation";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const [showExplanation, setShowExplanation] = useState(false);
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

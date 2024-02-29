import React, { useState } from "react";
import AddExplanation from "../features/explanation/AddExplanation";
import { Button } from "react-bootstrap";
import DashboardPage from "../ui/DashboardPage";

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
      <DashboardPage />
    </div>
  );
}

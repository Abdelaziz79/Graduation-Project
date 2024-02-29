import React from "react";
import { Spinner } from "react-bootstrap";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useExplanation } from "../features/explanation/useExplanation";

function getData(exp) {
  let numOfEasy = exp
    .map((e) => (e.level === "easy" ? 1 : 0))
    .reduce((a, b) => a + b);
  const numOfMedium = exp
    .map((e) => (e.level === "medium" ? 1 : 0))
    .reduce((a, b) => a + b);
  const numOfHard = exp
    .map((e) => (e.level === "hard" ? 1 : 0))
    .reduce((a, b) => a + b);

  return [
    { name: "Easy", value: numOfEasy, color: "#00C49F" },
    { name: "Medium", value: numOfMedium, color: "#FFBB28" },
    { name: "Hard", value: numOfHard, color: "#FF8042" },
  ];
}
export default function LevelStatistic() {
  const { isLoading, explanationTopics } = useExplanation();
  if (isLoading) return <Spinner />;
  const data = getData(explanationTopics);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          innerRadius={85}
          outerRadius={110}
          cx={"40%"}
          cy={"50%"}
          paddingAngle={3}
          nameKey={"name"}
          dataKey={"value"}
        >
          {data.map((entry) => (
            <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          width={"30%"}
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

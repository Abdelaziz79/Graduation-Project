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
import { getLevelsCount } from "../helper/getLevelsCount";

export default function LevelStatistic() {
  const { isLoading, explanationTopics } = useExplanation();
  if (isLoading) return <Spinner />;
  const data = getLevelsCount(explanationTopics);

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

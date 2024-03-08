import React from "react";
import { Spinner } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useExplanation } from "../features/explanation/useExplanation";
import { getTopicsName } from "../helper/getTopicsName";

export default function TopicsStatistic() {
  const { isLoading, explanationTopics } = useExplanation();
  if (isLoading) return <Spinner />;
  const data = getTopicsName(explanationTopics);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} width={150} height={40}>
        <Tooltip />
        <XAxis dataKey={"name"} />

        <Bar dataKey={"value"} fill={"#00C49F"} />
      </BarChart>
    </ResponsiveContainer>
  );
}

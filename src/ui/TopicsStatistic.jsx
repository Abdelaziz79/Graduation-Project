import React from "react";
import { Spinner } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { useExplanation } from "../features/explanation/useExplanation";

function getData2(exp) {
  const TopicNames = exp.map((e) => e.topics.split("-")).flat();
  let set = new Set(TopicNames);

  const data = [];
  set.forEach((e) => {
    data.push({
      name: e,
      value: TopicNames.filter((x) => x === e).length,
    });
  });
  return data;
}

export default function TopicsStatistic() {
  const { isLoading, explanationTopics } = useExplanation();
  if (isLoading) return <Spinner />;
  const data2 = getData2(explanationTopics);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data2} width={150} height={40}>
        <Tooltip />
        <XAxis dataKey={"name"} />

        <Bar dataKey={"value"} fill={"#00C49F"} />
      </BarChart>
    </ResponsiveContainer>
  );
}

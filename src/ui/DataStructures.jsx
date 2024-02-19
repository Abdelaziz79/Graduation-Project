import React from "react";
import Box from "./Box";

const dataStructures = [
  {
    id: 1,
    title: "depth first search",
    description: "dfs ",
    level: "easy",
  },
  {
    id: 2,
    title: "breadth first search",
    description: "bfs ",
    level: "easy",
  },
  {
    id: 3,
    title: "topological sort",
    description: "topological sort ",
    level: "medium",
  },
  {
    id: 4,
    title: "backtracking",
    description: "backtracking ",
    level: "hard",
  },
  {
    id: 5,
    title: "binary search",
    description: "binary search ",
    level: "hard",
  },
  {
    id: 6,
    title: "divide and conquer",
    description: "divide and conquer ",
    level: "hard",
  },
  {
    id: 7,
    title: "greedy algorithm",
    description: "greedy algorithm ",
    level: "hard",
  },
  {
    id: 8,
    title: "dynamic programming",
    description: "dynamic programming ",
    level: "hard",
  },
  {
    id: 9,
    title: "branch and bound",
    description: "branch and bound ",
    level: "hard",
  },
  {
    id: 10,
    title: "iterative deepening search",
    description: "iterative deepening search ",
    level: "hard",
  },
];

export default function DataStructures() {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {dataStructures.map((item) => (
        <Box key={item.id} item={item} />
      ))}
    </div>
  );
}

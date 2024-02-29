import React from "react";

export default function StatisticBox({ title, children }) {
  return (
    <div className="statistic-box">
      <h3 className="statistic-title">{title}</h3>
      {children}
    </div>
  );
}

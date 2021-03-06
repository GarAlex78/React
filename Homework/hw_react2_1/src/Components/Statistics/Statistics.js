import React from "react";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage} %</p>
    </>
  );
};

export default Statistics;

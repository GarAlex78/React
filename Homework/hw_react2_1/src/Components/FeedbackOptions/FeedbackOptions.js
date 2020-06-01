import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onStateUpdate }) => {
  return (
    <>
      <button className={s.button} onClick={onStateUpdate.bind(this, "good")}>
        good
      </button>
      <button
        className={s.button}
        onClick={onStateUpdate.bind(this, "neutral")}
      >
        neutral
      </button>
      <button className={s.button} onClick={onStateUpdate.bind(this, "bad")}>
        bad
      </button>
    </>
  );
};

export default FeedbackOptions;

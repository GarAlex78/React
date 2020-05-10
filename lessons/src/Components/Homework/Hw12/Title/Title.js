import React from "react";

import T from "prop-types";
import s from "./Title.module.css";
const Title = ({ text }) => {
  return (
    <div className={s.title}>
      <p className={s.title_text}>{text}</p>
    </div>
  );
};

Title.propTypes = {
  text: T.string,
};

export default Title;

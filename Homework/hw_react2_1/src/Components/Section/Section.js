import React from "react";
import s from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={s.title}>{title}</h3>
      {children}
    </>
  );
};

export default Section;

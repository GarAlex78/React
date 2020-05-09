import React from "react";

import s from "./Description.module.css";

const Description = ({ datall }) => {
  return (
    <div className={s.description}>
      <img src={data.avatar} alt="user avatar" className={s.avatar} />
      <p className={s.name}>{data.name}</p>
      <p className={s.tag}>@{data.tag}</p>
      <p className={s.location}>{data.location}</p>
    </div>
  );
};
export default Description;

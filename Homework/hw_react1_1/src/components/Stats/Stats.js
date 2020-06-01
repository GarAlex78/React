import React from "react";

import s from "./Stats.module.css";

const Stats = ({ dataStats }) => {
  const arrayDataKey = Object.entries(dataStats);
  return (
    <ul className={s.stats}>
      {arrayDataKey.map(([label, quantity]) => (
        <li className={s.stats_list} key={label}>
          <span className={s.label}>{label}</span>
          <span className={s.quantity}>{quantity}</span>
        </li>
      ))}
    </ul>
  );
};
export default Stats;

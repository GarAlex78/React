import React from "react";
import s from "./Item.module.css";

//---------------------------------------------
const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};
//-------------------------------------------
const Item = ({ statistic }) => {
  const labels = [...new Set(statistic.map((el) => el.label))];
  const res = [];
  for (let label of labels) {
    const percentage = statistic
      .filter((el) => el.label === label)
      .reduce((prev, curr) => prev + curr.percentage, 0);
    res.push({ label, percentage });
  }

  return (
    <ul className={s.stats}>
      {res.map(({ label, percentage }) => (
        <li
          style={{ backgroundColor: randomColor() }}
          className={s.stats_list}
          key={label}
        >
          <span className={s.label}>{label}</span>
          <span className={s.quantity}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

export default Item;

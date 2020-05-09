import React from "react";
import Title from "../Title/Title";
import Item from "../Item/Item";
import data from "../../Data/statistical-data.json";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.card}>
      <Title text="Upload Stats" />
      <Item statistic={data} />
    </div>
  );
};

export default App;

// ------------------------------------------------------

//===============================

// //debugger;

// const r = statistic.reduce((previousValue, currentItem, index, array) => {
//   //================================================================
//   let sum = 0;
//   console.log("label", currentItem.label);
//   if (previousValue.length === 0) {
//     previousValue.push(currentItem);
//     console.log("previousValueR", previousValue);
//     return previousValue;
//   }
//   previousValue.filter((prev, index, array) => {
//     if (prev.label === currentItem.label) {
//       prev.percentage = prev.percentage + currentItem.percentage;
//       sum = prev.percentage;

//       previousValue.splice(index, 1, prev);
//       console.log("prev1", prev);
//     } else if (array.length - 1 === index && sum === 0) {
//       previousValue.push(currentItem);
//       console.log("prev2", prev);
//       console.log("previousValue", previousValue);
//     }
//   });
//   return previousValue;
// }, []);
// console.log("r: ", r);

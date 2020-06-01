import React from "react";

import s from "./TransactionItem.module.css";

function TransactionItem({ item }) {
  const values = Object.keys(item)
    .filter((key) => key !== "id")
    .map((key) => <td className={s.general}>{item[key]}</td>);
  return <>{values}</>;
}
export default TransactionItem;

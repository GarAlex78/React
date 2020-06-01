import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";

import s from "./TransactionHistory.module.css";

function TransactionHistory({ transactions }) {
  const keys = Object.keys(transactions[0])
    .filter((key) => key !== "id")
    .map((item) => <th className={s.head}>{item}</th>);

  const deals = transactions.map((deal, idx) => (
    <tr className={idx % 2 === 0 ? s.white : s.greey}>
      <TransactionItem item={deal} />
    </tr>
  ));

  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>{keys}</tr>
      </thead>
      <tbody>{deals}</tbody>
    </table>
  );
}

export default TransactionHistory;

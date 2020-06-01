import React from "react";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../Data/transactions.json";
function App() {
  return <TransactionHistory transactions={transactions} />;
}

export default App;

import React from "react";

import data from "../../Data/user.json";
import Stats from "../Stats/Stats";
import Description from "../Description/Description";

import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.profile}>
      <Description dataAll={data} />
      <Stats dataStats={data.stats} />
    </div>
  );
};
export default App;

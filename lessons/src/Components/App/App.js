import React from "react";
import Nav from "../Nav/Nav";
import Container from "react-bootstrap/Container";
import Data from "../../Data/refs.json";

import s from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  return (
    <div className="wrapper">
      <Container fluid className={s.container}>
        <Nav refs={Data} />
      </Container>
    </div>
  );
};

export default App;

import React from "react";
// import PropTypes from "prop-types";

import Nav from "../Nav/Nav";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Data from "../../Data/refs.json";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
// import icon from "../../images/react_icon_130845.svg";

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

// App.propTypes = {};

export default App;

// { "helpGitHab": "https://habr.com/ru/post/273897/" }

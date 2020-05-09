import React from "react";
// import PropTypes from "prop-types";
import Lessons from "../Lessons/Lessons";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import icon from "../../images/react_icon_130845.svg";

import s from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  return (
    <div className="wrapper">
      <Container fluid>
        <Row className={s.row}>
          <Col>
            {/* {`${icon}/100px250`}  */}
            <Image className={s.logo} src={icon} rounded />
          </Col>
          <Col>
            <Lessons />
          </Col>
          <Col>
            <Main />
          </Col>
        </Row>
      </Container>
      <div className="conteiner">
        <Sidebar />
      </div>
    </div>
  );
};

// App.propTypes = {};

export default App;

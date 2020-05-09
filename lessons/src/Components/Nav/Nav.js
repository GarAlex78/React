import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import icon from "../../images/react_icon_130845.svg";
import Main from "../Main/Main";
import s from "./Nav.module.css";

const Nav = ({ refs }) => {
  return (
    <Row className={s.row}>
      <Col>
        <Image className={s.logo} src={icon} rounded />
      </Col>
      {refs.map((item) => (
        <Col>
          <Main data={item} />{" "}
        </Col>
      ))}
    </Row>
  );
};

export default Nav;

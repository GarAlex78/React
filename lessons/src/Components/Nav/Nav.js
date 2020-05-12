import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
// import icon from "../../images/react_icon_130845.svg";
import Main from "../Main/Main";
import s from "./Nav.module.css";

const Nav = ({ refs }) => {
  return (
    <>
      <Row className={s.row}>
        <Col className={s.col}>
          {/* <Image className={s.logo} src={icon} rounded /> */}
        </Col>
      </Row>
      <Row md={9} className={s.row}>
        {refs.map((item) => (
          <Col className={s.col}>
            <Main data={item} />{" "}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Nav;

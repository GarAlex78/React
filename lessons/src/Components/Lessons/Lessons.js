import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
const Lessons = () => {
  return (
    <OverlayTrigger
      key="left"
      placement="left"
      overlay={
        <Tooltip id="tooltip-left">
          Знакомство с React. JSX. Props. Коллекции.
        </Tooltip>
      }
    >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Вебинар 1{/* Знакомство с React. JSX. Props. Коллекции. */}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Video</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Lecture notes</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Homework</Dropdown.Item>
          <Dropdown.Item href="#/action-4">My homework</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </OverlayTrigger>
  );
};

export default Lessons;

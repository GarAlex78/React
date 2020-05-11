import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import s from "./Main.module.css";

const Main = ({ data }) => {
  return (
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={<Tooltip id="tooltip-top">{data.tema}</Tooltip>}
    >
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ backgroundColor: "chocolate" }}
        >
          {data.id}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "#fae596" }}>
          <Dropdown.Item href={data.video} target="_blank">
            Video
          </Dropdown.Item>
          <Dropdown.Item href={data.notes} target="_blank">
            Lecture notes
          </Dropdown.Item>
          <Dropdown.Item href={data.homework} target="_blank">
            Homework
          </Dropdown.Item>
          <Dropdown.Item href={data.code} target="_blank">
            Gh-code
          </Dropdown.Item>
          <Dropdown.Item href={data.pages} target="_blank">
            Gh-pages
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </OverlayTrigger>
  );
};

export default Main;

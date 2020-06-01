import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Main = ({ data }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ backgroundColor: "chocolate" }}
      >
        {data.id}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: "#fae596" }}>
        <Dropdown.Item href={data.code} target="_blank">
          Gh-code
        </Dropdown.Item>
        <Dropdown.Item href={data.pages} target="_blank">
          Gh-pages
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Main;

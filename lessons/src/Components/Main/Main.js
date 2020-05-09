import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
const Main = () => {
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
          <Dropdown.Item
            href="https://www.youtube.com/watch?v=c-HxK6iFKhY&feature=youtu.be"
            target="_blank"
          >
            Video
          </Dropdown.Item>
          <Dropdown.Item
            href="http://fecore.net.ua/books/rq7s2k-react/lesson-01/"
            target="_blank"
          >
            Lecture notes
          </Dropdown.Item>
          <Dropdown.Item
            href="https://github.com/goitacademy/react-homework/tree/master/homework-01"
            target="_blank"
          >
            Homework
          </Dropdown.Item>
          <Dropdown.Item
            href="https://github.com/GarAlex78/React/tree/master/lessons/src/Components/Lessons"
            target="_blank"
          >
            Gh-code
          </Dropdown.Item>
          <Dropdown.Item
            href="https://garalex78.github.io/React/"
            target="_blank"
          >
            Gh-pages
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </OverlayTrigger>
  );
};

export default Main;

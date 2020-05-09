import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Main = () => {
  return (
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
          href="https://garalex78.github.io/React/"
          target="_blank"
        >
          My homework
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Main;

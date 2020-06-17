import React from "react";
import s from "./ListContact.module.css";
const ListContact = ({ filterList, onDelete }) => {
  return (
    <ul>
      {filterList.map((item) => (
        <li className={s.listContact}>
          {`${item.name}: ${item.number}`}{" "}
          <input
            className={s.inputLi}
            type="button"
            value="delete"
            onClick={onDelete.bind(this, item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListContact;

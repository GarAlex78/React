import React from "react";
import ListContact from "../ListContact/ListContact";
import s from "./Filter.module.css";
const Filter = ({ contacts, value, onFilter, onDelete }) => {
  let filter = contacts.filter(({ name }) =>
    name
      .toLowerCase()
      .split(" ")
      .reduce((acc, cur) => (cur.startsWith(value) ? true : acc), false)
  );

  return (
    <>
      <input
        className={s.input}
        type="text"
        id="name"
        value={value}
        onChange={onFilter}
      />
      <ListContact filterList={filter} onDelete={onDelete} />
    </>
  );
};

export default Filter;

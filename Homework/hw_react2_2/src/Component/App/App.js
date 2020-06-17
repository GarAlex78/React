import React, { Component } from "react";
import Filter from "../Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import s from "./App.module.css";
import Form from "../Form/Form";
class EssayForm extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  handleSubmit = (e, nameUser, number) => {
    const repeatCheck = this.state.contacts.find(
      ({ name }) => name === nameUser
    );
    if (!repeatCheck) {
      const { contacts } = this.state;
      this.setState({
        contacts: [
          ...contacts,
          { id: uuidv4(), name: nameUser, number: number },
        ],
      });
    } else {
      alert(`${nameUser} is already in contacts`);
    }
    e.preventDefault();
  };
  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  handleDelete = (idUser) => {
    const result = this.state.contacts.filter(({ id }) => id !== idUser);
    this.setState({ contacts: result });
  };

  render() {
    return (
      <>
        <h2 className={s.caption}>Phonebook</h2>
        <Form
          handleSubmit={this.handleSubmit}
          valid={this.state.check}
          onDelete={this.handleDelete}
        />
        <h3 className={s.caption}>Search contacts</h3>
        <Filter
          contacts={this.state.contacts}
          value={this.state.filter}
          onFilter={this.handleFilter}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}
export default EssayForm;

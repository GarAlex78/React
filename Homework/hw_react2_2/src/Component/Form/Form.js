import React, { Component } from "react";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
    isError: false,
  };

  handleChange = ({ target }, key) => {
    this.setState({
      [key]: target.value,
      isError: false,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.length < 3 || !number) {
      let isError = true;
      this.setState({ isError });
    } else {
      this.props.handleSubmit(e, name, number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number, isError } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className={s.fieldset}>
          <label className={s.label} for="name">
            имя
          </label>
          <input
            className={s.input + " " + s.inputName}
            type="text"
            id="name"
            value={name}
            onChange={(e) => this.handleChange(e, "name")}
          />
          {isError ? (
            <p className={s.error}>мало буковок</p>
          ) : (
            <p className={s.error}></p>
          )}
          <label className={s.label} for="number1">
            номер в формате ххх-хх-xx
          </label>
          <input
            className={s.input}
            type="tel"
            id="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            maxLength="9"
            value={number}
            onChange={(e) => this.handleChange(e, "number")}
          />
          <p>
            <input className={s.addContact} type="submit" value="Add contact" />
          </p>
        </fieldset>
      </form>
    );
  }
}

export default Form;

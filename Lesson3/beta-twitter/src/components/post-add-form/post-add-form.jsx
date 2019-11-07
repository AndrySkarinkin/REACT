/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { Button } from "reactstrap";
import "./post-add-form.css";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.text != "") {
      this.props.onAdd(this.state.text);
    }

    this.setState({
      text: ""
    });
  }
  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чём вы думаете сейчас?"
          className="form-control new-post-label"
          onChange={this.onInputChange}
          value={this.state.text}
        />
        <Button outline color="primary" type="submit">
          Добавить
        </Button>
      </form>
    );
  }
}

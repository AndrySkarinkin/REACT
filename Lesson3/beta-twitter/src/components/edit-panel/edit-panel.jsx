import React, { Component } from "react";
import "./edit-panel.css";

export default class EditPanel extends Component {
  constructor(props) {
    super(props);
    this.getEditText = this.getEditText.bind(this);
  }

  getEditText(e) {
    return e.target.value;
  }
  render() {
    const { data, editText, setEdittext, onEditText } = this.props;
    let clas = "edit-wrap";
    data.forEach(el => {
      if (el.edit) {
        clas += " flex-wrap";
      }
    });
    return (
      <div className={clas}>
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={e => setEdittext(this.getEditText(e))}
        />
        <button className="edit-button" onClick={onEditText}>
          Заменить
        </button>
      </div>
    );
  }
}

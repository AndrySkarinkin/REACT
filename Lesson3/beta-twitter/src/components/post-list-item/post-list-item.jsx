import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
  render() {
    const {
      label,
      important,
      like,
      id,
      onDeletePost,
      onToggleLikeorImportant,
      onToggleEdit
    } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span
          className="app-list-item-label"
          onClick={() => onToggleLikeorImportant(id, "like")}
        >
          {label}
        </span>
        <div className="  button-wrap">
          <button id="btn-edit" onClick={() => onToggleEdit(id, label)}>
            Редактировать
          </button>
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={() => onToggleLikeorImportant(id, "important")}
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={onDeletePost}
          >
            <i className="fa fa-trash-o"> </i>
          </button>
          <i className="fa fa-heart"> </i>
        </div>
      </div>
    );
  }
}

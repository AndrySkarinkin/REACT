import React, { Component } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import "./itemList.css";
export default class ItemList extends Component {
  gotService = new GotService();
  state = { charList: null };

  componentDidMount() {
    this.gotService.getAllCharacters().then(charList => {
      this.setState({ charList });
    });
  }
  renderItems(arr) {
    return arr.map(el => {
      return (
        <li
          className="list-group-item"
          key={el.id}
          onClick={() => this.props.onCharSelected(el.id)}
        >
          {el.name}
        </li>
      );
    });
  }
  render() {
    const { charList } = this.state;
    if (!charList) {
      return <Spinner />;
    }
    const items = this.renderItems(charList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}

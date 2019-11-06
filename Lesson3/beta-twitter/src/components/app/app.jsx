import React, { Component } from "react";
import nextId from "react-id-generator";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "I go to learn React", id: nextId() },
        { label: "I think that it is not difficalt", id: nextId() },
        { label: "But it is very interesting", id: nextId() }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(el => el.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      };
    });
  }

  addItem(text) {
    const input = document.querySelector(".new-post-label");
    const newItem = {
      label: text,
      important: false,
      id: nextId()
    };
    input.value = "";
    console.log(this.state);
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

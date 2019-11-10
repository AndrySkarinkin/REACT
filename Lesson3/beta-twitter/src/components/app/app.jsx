import React, { Component } from "react";
import nextId from "react-id-generator";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import EditPanel from "../edit-panel/edit-panel";
import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "I go to learn React",
          important: false,
          like: false,
          edit: false,
          id: nextId()
        },
        {
          label: "I think that it is not difficalt",
          important: false,
          like: false,
          edit: false,
          id: nextId()
        },
        {
          label: "But it is very interesting",
          important: false,
          like: false,
          edit: false,
          id: nextId()
        }
      ],
      term: "",
      filter: "all",
      editText: ""
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    //this.onToggleImportant = this.onToggleImportant.bind(this);
    //this.onToggleLiked = this.onToggleLiked.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onToggleLikeorImportant = this.onToggleLikeorImportant.bind(this);
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.setEdittext = this.setEdittext.bind(this);
    this.onEditText = this.onEditText.bind(this);
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
    const newItem = {
      label: text,
      important: false,
      like: false,
      id: nextId()
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  }

  onToggleLikeorImportant(id, param) {
    this.setState(({ data }) => {
      const index = data.findIndex(el => el.id === id);
      const oldItem = data[index];
      let newItem = null;
      if (param === "important") {
        newItem = { ...oldItem, important: !oldItem.important };
      } else if (param === "like") {
        newItem = { ...oldItem, like: !oldItem.like };
      }
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
      return {
        data: newArr
      };
    });
  }

  /* onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(el => el.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
      return {
        data: newArr
      };
    });
  } */

  /* onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(el => el.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
      return {
        data: newArr
      };
    });
  }
 */
  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(el => {
      return el.label.indexOf(term) > -1;
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter(el => el.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  onToggleEdit(id, text) {
    this.setState(({ data }) => {
      const index = data.findIndex(el => el.id === id);
      const newEl = { ...data[index], edit: !data[index].edit };
      const newArr = [...data.slice(0, index), newEl, ...data.slice(index + 1)];
      return {
        data: newArr,
        editText: text
      };
    });
  }

  setEdittext(text) {
    this.setState({ editText: text });
  }
  onEditText() {
    this.setState(({ data, editText }) => {
      const index = data.findIndex(el => el.edit === true);
      const newEl = {
        ...data[index],
        label: editText,
        edit: false
      };
      const newArr = [...data.slice(0, index), newEl, ...data.slice(index + 1)];
      return {
        data: newArr,
        editText: ""
      };
    });
  }

  render() {
    const { data, term, filter, editText } = this.state;
    const countLike = data.filter(el => el.like).length;
    const allPost = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader countLike={countLike} allPost={allPost} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          //onToggleImportant={this.onToggleImportant}
          //onToggleLiked={this.onToggleLiked}
          onToggleLikeorImportant={this.onToggleLikeorImportant}
          onToggleEdit={this.onToggleEdit}
        />
        <PostAddForm onAdd={this.addItem} />
        <EditPanel
          data={data}
          editText={editText}
          setEdittext={this.setEdittext}
          onEditText={this.onEditText}
        />
      </div>
    );
  }
}

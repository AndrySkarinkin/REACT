/* eslint-disable array-callback-return */
import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";

const PostList = ({ posts }) => {
  const elements = posts
    .filter(item => {
      if (item.label && item.id) {
        return item;
      }
    })
    .map(el => {
      const { label: itemLabel, important: itemImportant, id } = el;
      return (
        <li key={id} className="list-group-item">
          <PostListItem label={itemLabel} important={itemImportant} />
        </li>
      );
    });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;

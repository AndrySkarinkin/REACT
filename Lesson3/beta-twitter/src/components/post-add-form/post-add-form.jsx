import React from "react";
import { Button } from "reactstrap";
import "./post-add-form.css";

const PostAddForm = props => {
  const { onAdd } = props;

  const onInputChange = () => {
    const input = document.querySelector(".new-post-label");
    return input.value;
  };
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чём вы думаете сейчас?"
        className="form-control new-post-label"
        onChange={onInputChange}
      />
      <Button outline color="primary" onClick={() => onAdd(onInputChange())}>
        Добавить
      </Button>
    </form>
  );
};

export default PostAddForm;

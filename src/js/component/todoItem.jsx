import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.item.text}</p>
      <button onClick={() => props.onDelete(props.item.id)}>Delete</button>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
};

export default TodoItem;

import React from "react";
import PropTypes from "prop-types";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;

  return (
    <div className={`todo-item ${completed && "completed"}`}>
      <label className="todo-item-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => props.markComplete(id)}
          />
          <span className="checkmark"></span>
        </div>
        <span>{title}</span>
      </label>
      {/* <button className="btn-item" onClick={() => props.delTodo(id)}>
        &times;
      </button> */}
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
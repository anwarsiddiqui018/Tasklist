import React from "react";

const DeleteTodo = ({ deleteTodo }) => {
  return (
    <div>
      <button onClick={deleteTodo}>delete</button>
    </div>
  );
};

export default DeleteTodo;

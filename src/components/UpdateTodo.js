import React, { useState } from "react";

const UpdateTodo = ({ todo, updateTodo }) => {
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };
  const handleUpdateTodo = () => {
    if (updatedText.trim() === "") return;
    updateTodo(todo.id, updatedText);
  };

  return (
    <div>
      <input type="text" value={updatedText} onChange={handleInputChange} />
      <button onClick={handleUpdateTodo}>Update Todo</button>
    </div>
  );
};

export default UpdateTodo;

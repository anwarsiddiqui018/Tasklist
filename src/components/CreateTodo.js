import { useState } from "react";

const CreateTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}> Add</button>
    </div>
  );
};

export default CreateTodo;

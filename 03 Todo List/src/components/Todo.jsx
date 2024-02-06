import React, { useState } from "react";
import { useTodo } from "../contexts";

function Todo({ todo }) {
  const { todos, setTodos } = useTodo();
  const [updatedTodo, setUpdateTodo] = useState(todo.msg);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleDeleteTodo = () => {
    setTodos(todos.filter((prevTodo) => prevTodo.id !== todo.id));
  };

  const handleUpdateTodo = () => {
    setTodos(
      todos.map((prevTodo) =>
        prevTodo.id === todo.id ? { ...prevTodo, msg: updatedTodo } : prevTodo
      )
    );
    setIsTodoEditable(!isTodoEditable);
  };

  const handleToggleComplete = () => {
    setTodos(
      todos.map((prevTodo) =>
        prevTodo.id === todo.id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <div className="flex border-4 gap-1 border-black/75 rounded-lg w-full justify-between items-center min-h-12 p-0">
      <input
        type="checkbox"
        checked={todo.completed}
        className="cursor-pointer w-1/12 accent-yellow-600 outline-none border-4 border-black/75"
        onChange={handleToggleComplete}
      />
      <input
        type="text"
        className={`w-9/12 pl-2 outline-none ${
          todo.completed ? "line-through" : ""
        }`}
        onChange={(e) => setUpdateTodo(e.currentTarget.value)}
        value={updatedTodo}
        readOnly={!isTodoEditable}
      />
      <div className="mr-2 flex gap-1">
        <button
          className="h-8 w-8 text-center -pt-1 border-[calc(0.215rem)] border-black/75 rounded-lg text-sm"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              handleUpdateTodo();
              console.log("editing ended");
            } else {
              console.log("editing begin");
              setIsTodoEditable(!isTodoEditable);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "🗃️" : "✏️"}
        </button>
        <button
          className="h-8 w-8 text-center -pt-1 border-[calc(0.215rem)] border-black/75 rounded-lg text-sm"
          onClick={handleDeleteTodo}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todo;

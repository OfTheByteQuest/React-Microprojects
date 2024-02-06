import { useEffect, useState } from "react";

import { Todo } from "./components/index.js";
import { TodoContextProvider } from "./contexts/TodoContext.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([{ id: Date.now(), msg: newTodo, completed: false }, ...todos]);
    setNewTodo("");
  };

  return (
    <TodoContextProvider value={{ todos, setTodos }}>
      <div className="bg-white w-full min-h-screen px-20">
        <div className="mx-auto mt-32 border-4 border-black/75 w-full max-w-[calc(600px)] min-w-[calc(300px)] rounded-lg p-1">
          <div className="my-4 text-center flex flex-col gap-3 justify-center items-center">
            <h1 className="font-black text-4xl">Your Todo List</h1>
            {/* {Input form begins from here} */}
            <form
              onSubmit={handleAddTodo}
              className="flex w-11/12 h-12 border-4 border-black/75 rounded-lg p-1"
            >
              <input
                placeholder="Write Todo..."
                className=" w-11/12 h-full  p-2 font-semibold outline-none"
                value={newTodo}
                onChange={(e) => setNewTodo(e.currentTarget.value)}
              />
              <button
                type="submit"
                className=" text-center h-8 w-8 border-[calc(0.215rem)] border-black/75 rounded-lg text-sm"
              >
                ➕
              </button>
            </form>
            <div className="flex w-10/12 flex-col justify-center align-center font-medium gap-3">
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;

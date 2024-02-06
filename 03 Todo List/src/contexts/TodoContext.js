import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      msg: "Todo msg",
      completed: false,
    },
  ],
  setTodos: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}

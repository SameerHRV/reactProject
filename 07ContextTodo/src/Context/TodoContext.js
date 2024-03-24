import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: "Learn React",
      completed: false
    },
  ],
  addTodos: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id, todo) => {},
  toggleComplete: (id) => {}
});

export const useTodo = () => {
  return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider;

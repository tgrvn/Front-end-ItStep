import React, { useState } from 'react';

export const TodoContext = React.createContext(null);

export default function TodoContextProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);

  function addTodo(todo) {
    setAllTodos([...allTodos, todo]);
  }

  function delTodo(id) {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{
        allTodos,
        addTodo,
        delTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

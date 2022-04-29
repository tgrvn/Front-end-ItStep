import React, { useState } from 'react';

export const TodoContext = React.createContext([]);

export default function TodoContextProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);

  // function addTodo(todo) {
  //   allTodos.map((todo) => [...])
  // }

  return (
    <TodoContext.Provider
      value={{
        allTodos,
        setAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

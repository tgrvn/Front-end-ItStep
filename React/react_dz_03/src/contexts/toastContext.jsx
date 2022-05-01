import React, { useState } from 'react';

export const TosastContext = React.createContext(null);

export default function TosastContextProvider({ children }) {
  const [allTosts, setAllTosts] = useState([]);

  //   function addToast(tost) {
  //     setAllTosts([...allTosts, tost]);
  //   }

  //   function delTost(id) {
  //     setAllTodos(allTodos.filter((todo) => todo.id !== id));
  //   }

  return (
    <TosastContext.Provider
      value={{
        allTosts,
      }}
    >
      {children}
    </TosastContext.Provider>
  );
}

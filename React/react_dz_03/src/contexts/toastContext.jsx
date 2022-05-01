import React, { useEffect, useState } from 'react';
import { Toast } from '../components/toast/toast';
import { v4 as uuidv4 } from 'uuid';

export const ToastContext = React.createContext(null);

export default function ToastContextProviider({ children }) {
  const [allToasts, setallToasts] = useState([]);

  function createToast(message, color) {
    const toast = {
      id: uuidv4(),
      message,
      color,
    };
    setallToasts([...allToasts, toast]);
  }

  function deleteToast(id) {
    setallToasts(allToasts.filter((toast) => id !== toast.id));
  }

  const showToasts =
    !!allToasts &&
    allToasts.map((toast) => <Toast key={toast.id} toast={toast} />);

  return (
    <ToastContext.Provider
      value={{ allToasts, createToast, showToasts, deleteToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

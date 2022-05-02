import React, { useState } from 'react';

export const ToastContext = React.createContext(null);

export default function ToastContextProviider({ children }) {
  const [toast, settoast] = useState({ isShowToast: false })

  function showToast(type) {
    switch (type) {
      case 'add':
        settoast({ isShowToast: true, message: 'Todo added', color: '#81C784' });
        break;

      case 'del':
        settoast({ isShowToast: true, message: 'Todo deleted', color: '#E57373' });
        break;

      default:
        break;
    }

    setTimeout(() => {
      settoast({ isShowToast: false })
    }, 2000);
  }


  return (
    <ToastContext.Provider
      value={{ toast, showToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

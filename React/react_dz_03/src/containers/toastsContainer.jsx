import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../contexts/toastContext';

export function ToastsContainer() {
  const { deleteToast, allToasts, showToasts } = useContext(ToastContext);
  const [toasts, settoasts] = useState(null);

  useEffect(() => {
    if (!!allToasts.length) {
      setTimeout(() => {
        deleteToast(allToasts[allToasts.length - 1].id);
      }, 1500);
    }

    settoasts(showToasts);
  }, [allToasts]);

  return <div className='toasts'>{toasts}</div>;
}

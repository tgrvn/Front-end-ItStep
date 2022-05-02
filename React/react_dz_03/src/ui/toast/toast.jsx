import './style.scss';
import { useContext } from "react";
import { ToastContext } from "../../contexts/toastContext";

export function Toast() {
  const { toast } = useContext(ToastContext);


  return (
    <div className='toasts'>
      {toast.isShowToast && <div
        className='toast animate__animated animate__fadeIn'
        style={{ backgroundColor: `${toast.color}` }}
      >
        <p>{toast.message}</p>
      </div>}

    </div>
  );
}

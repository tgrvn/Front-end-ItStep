import './style.scss';

export function Toast({ toast }) {
  return (
    <div
      className='toast animate__animated animate__fadeIn'
      style={{ backgroundColor: `${toast.color}` }}
    >
      <p>{toast.message}</p>
    </div>
  );
}

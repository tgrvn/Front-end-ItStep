import { useContext } from 'react';
import { TodoContext } from '../../contexts/todoContext';
import { useLocation } from 'react-router-dom';
import './style.scss';

export function Todo({ todo }) {
  const { delTodo } = useContext(TodoContext);
  const loaction = useLocation();

  function handlerDelete() {
    delTodo(todo.id);
  }

  return (
    <div className='todo animate__animated animate__fadeIn'>
      <h3 className='head'>{todo.head}</h3>
      <p>{todo.descr}</p>
      <p className='date'>{todo.date}</p>
      {loaction.pathname.match(/del/) && (
        <div className='del' onClick={handlerDelete}></div>
      )}
    </div>
  );
}

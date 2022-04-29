import { useContext } from 'react';
import { TodoContext } from '../../contexts/todoContext';
import './style.scss';

export function Todo({ todo, delFlag, styles }) {
  const { delTodo } = useContext(TodoContext);

  function handlerDelete() {
    delTodo(todo.id);
  }

  return (
    <div
      className='todo animate__animated animate__fadeIn'
      style={styles}
    >
      <h3>{todo.head}</h3>
      <p>{todo.descr}</p>
      <p className='date'>{todo.date}</p>
      {delFlag && <button onClick={handlerDelete}>delete</button>}
    </div>
  );
}

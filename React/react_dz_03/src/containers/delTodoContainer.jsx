import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';
import { Empty } from '../components/emptyMessage/emptyMessage';
import { useNavigate } from 'react-router-dom';
import { ToastsContainer } from './toastsContainer';

export function Del() {
  const { allTodos, showTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  function handlerClick() {
    navigate('/add');
  }

  return (
    <div className='todo-container'>
      {allTodos.length ? showTodo : <Empty event={handlerClick} />}
      <ToastsContainer />
    </div>
  );
}

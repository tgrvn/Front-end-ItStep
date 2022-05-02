import { useContext } from 'react';
import { TodoContext } from '../../contexts/todoContext';
import { Empty } from '../../ui/emptyMessage/emptyMessage';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../ui/toast/toast';

export function Del() {
  const { allTodos, showTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  function handlerClick() {
    navigate('/add');
  }

  return (
    <div className='todo-container'>
      {allTodos.length ? showTodo : <Empty event={handlerClick} />}
      <Toast />
    </div>
  );
}

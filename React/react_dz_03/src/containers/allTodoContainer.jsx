import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';
import { Todo } from '../components/todo/todo';
import { Empty } from '../components/emptyMessage/emptyMessage';
import { useNavigate } from 'react-router-dom';

export function All() {
  const { allTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  function handlerClick() {
    navigate('/add');
  }

  return (
    <div className='todo-container'>
      {allTodos.length ? (
        allTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <Empty event={handlerClick} />
      )}
    </div>
  );
}

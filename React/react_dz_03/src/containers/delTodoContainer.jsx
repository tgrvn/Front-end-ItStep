import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';
import { Todo } from '../components/todo/todo';
import { Empty } from '../components/emptyMessage/emptyMessage';
import { useNavigate } from 'react-router-dom';

export function Del() {
  const { allTodos } = useContext(TodoContext);
  const delFlag = true;
  const navigate = useNavigate();

  function handlerClick() {
    navigate('/add');
  }

  return (
    <div className='todo-container'>
      {allTodos.length ? (
        allTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            delFlag={delFlag}
            styles={{ cursor: 'default' }}
          />
        ))
      ) : (
        <Empty event={handlerClick} />
      )}
    </div>
  );
}

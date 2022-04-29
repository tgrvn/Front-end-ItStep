import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';
import { Todo } from '../components/todo/todo';

export function Del() {
  const { allTodos } = useContext(TodoContext);
  const delFlag = true;

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
        <h1>ADD</h1>
      )}
    </div>
  );
}

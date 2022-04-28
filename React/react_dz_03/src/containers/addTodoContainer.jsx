import { useContext } from 'react';
import { AddInputs } from '../components/addInputs/addInputs';
import { TodoContext } from '../contexts/todoContext';

export function Add() {
  const { allTodos, setAllTodos } = useContext(TodoContext);
  let head = '';
  let descr = '';

  function handlerSaveTodo() {
    head = '';
    descr = '';
    console.log('---> save');
  }

  function handlerTxtTodo({ target: { value } }) {
    descr = value;
    console.log('text--->', descr);
  }

  function handlerHeadTodo({ target: { value } }) {
    head = value;
    console.log('head--->', head);
  }

  return (
    <>
      <AddInputs
        saveTodo={handlerSaveTodo}
        txtTodo={handlerTxtTodo}
        headTodo={handlerHeadTodo}
      />
    </>
  );
}

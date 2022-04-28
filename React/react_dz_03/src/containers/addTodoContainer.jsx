import { useContext, useState } from 'react';
import { AddInputs } from '../components/addInputs/addInputs';
import { TodoContext } from '../contexts/todoContext';
import { validateHead, validateTxt, uid } from '../utils/validate';

export function Add() {
  const { allTodos, setAllTodos } = useContext(TodoContext);
  const [head, setHead] = useState('');
  const [descr, setDescr] = useState('');

  function handlerSaveTodo() {
    if (validateHead(head) && validateTxt(descr)) {
      const todo = {
        head,
        descr,
      };
      console.log('todo--->', todo);
    }
  }

  function handlerTxtTodo({ target: { value } }) {
    setDescr(value);
  }

  function handlerHeadTodo({ target: { value } }) {
    setHead(value);
  }

  return (
    <div style={{overflowY: 'hidden'}}>
      <AddInputs
        saveTodo={handlerSaveTodo}
        txtTodo={handlerTxtTodo}
        headTodo={handlerHeadTodo}
        head={head}
        descr={descr}
      />
    </div>
  );
}

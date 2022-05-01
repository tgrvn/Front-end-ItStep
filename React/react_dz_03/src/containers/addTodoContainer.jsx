import { useContext, useState } from 'react';
import { AddInputs } from '../components/addInputs/addInputs';
import { TodoContext } from '../contexts/todoContext';
import { validateHead, validateTxt } from '../utils/validate';
import { v4 as uuidv4 } from 'uuid';

export function Add() {
  const { addTodo } = useContext(TodoContext);
  const [error, seterror] = useState('');
  const [head, setHead] = useState('');
  const [descr, setDescr] = useState('');

  function handlerSaveTodo() {
    if (validateHead(head) && validateTxt(descr)) {
      const todo = {
        head,
        descr,
        id: uuidv4(),
        date: new Date().toLocaleString().replace(',', ''),
      };

      addTodo(todo);
      setHead('');
      setDescr('');
      seterror('');
    } else if (!validateHead(head)) {
      seterror('*head must be min 3, max 12');
    } else if (!validateTxt(descr)) {
      seterror('*descr must be min 3, max 30');
    }
  }

  function handlerTxtTodo({ target: { value } }) {
    setDescr(value);
  }

  function handlerHeadTodo({ target: { value } }) {
    setHead(value);
  }

  return (
    <div className='inputs-container'>
      <AddInputs
        saveTodo={handlerSaveTodo}
        txtTodo={handlerTxtTodo}
        headTodo={handlerHeadTodo}
        head={head}
        descr={descr}
        error={error}
      />
    </div>
  );
}

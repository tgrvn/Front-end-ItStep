import './style.scss';
import 'animate.css';
import { Button } from '../../ui/button/button';
import { ErrorMsg } from '../../ui/errorMessage/errorMessage';

export function AddInputs(props) {
  const { saveTodo, txtTodo, headTodo, head, descr, error } = props;

  return (
    <div className='inputs animate__animated animate__fadeIn'>
      <input
        type='text'
        placeholder='Head Todo'
        onChange={headTodo}
        value={head}
      />
      <textarea
        placeholder='Description Todo'
        onChange={txtTodo}
        value={descr}
      ></textarea>
      <Button event={saveTodo} title={'ADD TODO'} />
      <ErrorMsg error={error} />
    </div>
  );
}

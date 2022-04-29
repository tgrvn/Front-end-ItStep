import './style.scss';
import 'animate.css';

export function AddInputs(props) {
  const { saveTodo, txtTodo, headTodo, head, descr } = props;

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
      <button onClick={saveTodo}>add</button>
    </div>
  );
}

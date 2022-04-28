export function AddInputs({ saveTodo, txtTodo, headTodo }) {
  return (
    <>
      <input type='text' placeholder='Head Todo' onChange={headTodo} />
      <textarea placeholder='Description Todo' onChange={txtTodo}></textarea>
      <button onClick={saveTodo}>add</button>
    </>
  );
}

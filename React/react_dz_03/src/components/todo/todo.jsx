import './style.scss';

export function Todo() {
  return (
    <div className='todo-container animate__animated animate__fadeIn'>
      <div className='todo'>
        <h3>TODO</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          velit rerum illum.
        </p>
        <p className='date'>2020.20.20</p>
      </div>
      <div className='todo'>
        <h3>TODO</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          velit rerum illum.
        </p>
        <p className='date'>2020.20.20</p>
      </div>
      <div className='todo'>
        <h3>TODO</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          velit rerum illum.
        </p>
        <p className='date'>2020.20.20</p>
      </div>
    </div>
  );
}

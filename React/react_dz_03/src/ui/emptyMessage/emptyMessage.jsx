import { Button } from '../button/button';
import './style.scss';

export function Empty({ event }) {
  return (
    <div className='msg-container animate__animated animate__fadeIn'>
      <h3>todo list empty...</h3>
      <Button title={'add'} event={event} />
    </div>
  );
}

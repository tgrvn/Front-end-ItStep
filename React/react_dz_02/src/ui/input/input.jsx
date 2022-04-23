import { Error } from '../errorMsg/errorMsg';
import './style.scss';

export function Input(props) {
  const { createRequest, errorMsg, error } = props;

  return (
    <>
      <input
        type='text'
        onChange={createRequest}
        placeholder='What you want to know?'
      />
      <Error error={error ? errorMsg : ''} />
    </>
  );
}

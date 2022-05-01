import './style.scss';

export function Button(props) {
  const { title, event } = props;

  return <button className='btn' onClick={event}>{title}</button>;
}

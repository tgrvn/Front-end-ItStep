import './style.scss';

export function Button(props) {
  const { title, event } = props;

  return <button onClick={event}>{title}</button>;
}

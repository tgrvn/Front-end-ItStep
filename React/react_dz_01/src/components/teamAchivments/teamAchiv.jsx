import './style.scss';

export function TeamAchivments(props) {
  const { achivments } = props;
  return (
    <div>
      <ul>{achivments}</ul>
    </div>
  );
}

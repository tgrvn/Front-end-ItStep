import './style.scss';

export function TeamAchivments(props) {
  const { achivments } = props;
  return (
    <div className='achivemnts'>
      <ul>{achivments}</ul>
    </div>
  );
}

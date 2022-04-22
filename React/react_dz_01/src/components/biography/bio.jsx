import './style.scss';

export function Bio(props) {
  const { bio, descr, date } = props;

  return (
    <div className='bio-container'>
      <div className='intro'>
        <img src={bio.src} alt={bio.fName + ' ' + bio.lName} />
        <h2>
          {bio.fName} {bio.lName}
        </h2>
        <p>
          {bio.city}, {bio.country}
        </p>
        <p>Born: {bio.born}</p>
        <p>Died: {bio.died}</p>
      </div>
      <div className='bio'>
        <h2>biography</h2>
        {descr}
        <p className='timer'>{date}</p>
      </div>
    </div>
  );
}

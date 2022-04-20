import './style.scss';
import { useState } from 'react';
import { biography } from '../../../data/data';

export function Bio() {
  const [bio, setBio] = useState(biography);
  const { bioText } = bio;
  const [date, setDate] = useState(new Date().toLocaleString());

  const interval = () => {
    setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return date.replace(',', '');
  };

  const descr = bioText.map((item) => <p key={item.id}>{item.p}</p>);

  return (
    <div className='container'>
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
        <p className='timer'>{interval()}</p>
      </div>
    </div>
  );
}

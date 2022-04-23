import { useState } from 'react';
import { biography } from '../../data/bio';
import { Bio } from '../../components/biography/bio';

export function BiographyCOntainer() {
  const { bioText } = biography;
  const [date, setDate] = useState(new Date().toLocaleString());

  const interval = () => {
    setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return date.replace(',', '');
  };

  const descr = bioText.map((item) => <p key={item.id}>{item.p}</p>);
  return (
    <>
      <Bio bio={biography} descr={descr} date={interval()} />
    </>
  );
}

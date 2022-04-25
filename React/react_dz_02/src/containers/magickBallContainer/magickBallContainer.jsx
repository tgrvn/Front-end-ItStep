import { useState } from 'react';
import { getPrediction } from '../../services/predictions';
import { Ball } from '../../components/magicBall/ball';

export function MagickBallContainer({ value, error }) {
  const [prediction, setprediction] = useState(null);
  const answ = value;

  const getCurrentPrediction = () => {
    if (!error && answ) {
      getPrediction(answ).then((data) => {
        if (data) {
          setprediction(data);
        }
      });
    }
  };

  function hanlerClick() {
    getCurrentPrediction();
  }

  return (
    <>
      <Ball event={hanlerClick} prediction={prediction} />
    </>
  );
}

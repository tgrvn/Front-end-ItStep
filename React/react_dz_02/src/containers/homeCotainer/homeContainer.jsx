import { useState } from 'react';
import { Input } from '../../ui/input/input';
import { Header } from '../../components/header/header';
import { MagickBallContainer } from '../magickBallContainer/magickBallContainer';

export function Home() {
  const [error, seterror] = useState(false);
  const [errorMsg, seterrorMsg] = useState('');
  const [value, setvalue] = useState('');

  function checkString(str) {
    if (str.length <= 3) {
      seterror(true);
      seterrorMsg('*this question is too short :c');
      return false;
    } else if (str.slice(-1) !== '?') {
      seterror(true);
      seterrorMsg('*question must have "?" in the end :c');
      return false;
    }

    seterror(false);
    return true;
  }

  function handlerInput({ target: { value } }) {
    if (checkString(value)) {
      setvalue(value);
    }
  }

  return (
    <>
      <Header />
      <Input createRequest={handlerInput} errorMsg={errorMsg} error={error} />
      <MagickBallContainer value={value} />
    </>
  );
}

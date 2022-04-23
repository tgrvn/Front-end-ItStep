import './style.scss';

export function Ball(props) {
  const { event, prediction } = props;

  return (
    <div className='ball-wrap' onClick={event}>
      <div className='ball'>
        <div className='volume'></div>
        <div className='triange'></div>
        <p>{prediction && prediction.magic.answer}</p>
      </div>
    </div>
  );
}

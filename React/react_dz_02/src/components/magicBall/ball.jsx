import './style.scss';

export function Ball(props) {
  const { event, prediction } = props;

  return (
    <div className='ball-wrap' onClick={event}>
      <div className='ball'></div>
      <div className='volume'>
        <div className='triange'></div>
      </div>
      <p className='prediction'>{prediction && prediction.magic.answer}</p>
    </div>
  );
}

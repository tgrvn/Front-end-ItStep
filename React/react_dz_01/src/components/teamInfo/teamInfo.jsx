import { TeamAchivments } from '../teamAchivments/teamAchiv';
import './style.scss';

export function TeamInfo(props) {
  const { teamData, achivments, playerCard } = props;

  return (
    <div className='container'>
      <div className='teamInfo'>
        <div className='left'>
          <img src={teamData.img} alt={teamData.name} />
        </div>
        <div className='rigth'>
          <h2 className='teamName'>{teamData.name}</h2>
          <p className='descr'>Country: {teamData.country}</p>
          <p className='descr'>Founding Date: {teamData.foundingDate}</p>
          <p className='descr'>UEFA Champion League awawrds:</p>
          <div className='awards'>
            <TeamAchivments achivments={achivments} />
          </div>
        </div>
      </div>
      <h2>SQUAD</h2>
      <div className='playerCards'>
        {playerCard}
        <div className='break'></div>
        <div className='break'></div>{' '}
      </div>
    </div>
  );
}

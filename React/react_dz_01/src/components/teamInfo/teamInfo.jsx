import { TeamAchivments } from '../teamAchivments/teamAchiv';
import './style.scss';

export function TeamInfo(props) {
  const { teamData, achivments } = props;

  return (
    <div>
      <div className='left'>
        <img src={teamData.img} alt={teamData.name} />
      </div>
      <div className='rigth'>
        <h2>{teamData.name}</h2>
        <p>{teamData.foundingDate}</p>
        <TeamAchivments achivments={achivments} />
      </div>
    </div>
  );
}

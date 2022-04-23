import './style.scss';

export function PlayerCard({ player }) {
  return (
    <div className='playerCard'>
      <p className='number'>{player.number}</p>
      <img src={player.img} alt='' />
      <div className='playerInfo'>
        <h3>{player.name}</h3>
        <p className='role'>{player.role}</p>
      </div>
    </div>
  );
}

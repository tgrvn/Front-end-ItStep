import { TeamInfo } from '../../components/teamInfo/teamInfo';
import { PlayerCard } from '../..//components/playerCard/playerCard';
import { team } from '../../data/team';

export function TeamContainer() {
  const { awards } = team;
  const { squad } = team;

  const achivments = awards.map((item) => {
    if (item.id.includes('w')) {
      return (
        <li key={item.id}>
          <p>Winner: {item.winner}</p>
          <p>Goals: {item.goals}</p>
        </li>
      );
    } else if (item.id.includes('f')) {
      return (
        <li key={item.id}>
          <p>Finalist: {item.finalist}</p>
          <p>Goals: {item.goals}</p>
        </li>
      );
    }
  });

  const player = squad.map((player) => (
    <PlayerCard key={player.id} player={player} />
  ));

  return (
    <>
      <TeamInfo teamData={team} achivments={achivments} playerCard={player} />
    </>
  );
}

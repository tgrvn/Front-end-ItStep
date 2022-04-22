import { TeamInfo } from '../../components/teamInfo/teamInfo';
import { team } from '../../data/data';

export function TeamContainer() {
  const { awards } = team;

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

  // const { squad } = team;

  // const teamSquad = squad.map((item) => {

  // })

  return (
    <>
      <TeamInfo teamData={team} achivments={achivments} />
    </>
  );
}

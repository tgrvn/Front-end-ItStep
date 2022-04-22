import './App.css';
import { BiographyCOntainer } from './containers/biographyContainer/biographyContainer';
import { TeamContainer } from './containers/teamContainer/teamContainer';

function App() {
  return (
    <div className="App">
      <BiographyCOntainer />
      <TeamContainer />
    </div>
  );
}

export default App;

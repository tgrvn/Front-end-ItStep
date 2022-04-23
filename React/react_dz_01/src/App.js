import './App.css';
import { BiographyCOntainer } from './containers/biographyContainer/biographyContainer';
import { PetContainer } from './containers/petContainer/petContainer';
import { TeamContainer } from './containers/teamContainer/teamContainer';

function App() {
  return (
    <div className="App">
      <BiographyCOntainer />
      <TeamContainer />
      <PetContainer />
    </div>
  );
}

export default App;

import './App.css';
import { Home } from './containers/home/home';
import { Routes, Route } from 'react-router-dom';
import { CarPage } from './components/carPage/carPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars/:id' element={<CarPage />} />
      </Routes>
    </div>
  );
}

export default App;

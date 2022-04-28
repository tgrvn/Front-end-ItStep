import { Routes, Route } from 'react-router-dom';
import { All } from './containers/allTodoContainer';
import { Add } from './containers/addTodoContainer';
import { Del } from './containers/delTodoContainer';

import './App.css';
import { Menu } from './components/menu/menu';

function App() {
  return (
    <div className='App'>
      <Menu />

      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/add' element={<Add />} />
        <Route path='/del' element={<Del />} />

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;

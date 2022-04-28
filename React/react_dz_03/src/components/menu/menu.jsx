import './menu.scss';
import { Link, NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive && 'active'}>
            all todo
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' className={({ isActive }) => isActive && 'active'}>
            add todo
          </NavLink>
        </li>
        <li>
          <NavLink to='/del' className={({ isActive }) => isActive && 'active'}>
            del todo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

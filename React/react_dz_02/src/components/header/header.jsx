import { ThemeBtn } from '../../ui/themeButton/themeButton';
import './style.scss';

export function Header({ changeTheme, theme }) {
  return (
    <div className='header'>
      <ThemeBtn changeTheme={changeTheme} theme={theme}/>
    </div>
  );
}

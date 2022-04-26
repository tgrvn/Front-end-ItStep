import './styles.scss';

export function ThemeBtn({ changeTheme, theme }) {
  return (
    <button className={theme} onClick={changeTheme} theme={theme}></button>
  );
}

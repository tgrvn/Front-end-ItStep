import './styles.scss';

export function ThemeBtn({ changeTheme, theme }) {
  return <button onClick={changeTheme} theme={theme}></button>;
}

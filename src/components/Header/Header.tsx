import React, { useContext, useEffect } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import { ThemeContext } from 'src/App';

export default function Header() {
  const theme = useContext(ThemeContext);

  function changeTheme() {
    const value = theme.state === 'light' ? 'dark' : 'light';

    theme.changeTheme(value)
  }

  return (
    <header className={styles.header}>
      <Logo />

      { theme.state }

      <button onClick={changeTheme}>switcher</button>
    </header>
  );
}

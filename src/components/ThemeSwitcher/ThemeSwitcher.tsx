import React, { useContext } from 'react';
import styles from './ThemeSwitcher.module.scss';
import { ThemeContext } from '../../App';

export default function ThemeSwitcher() {
  const theme = useContext(ThemeContext);

  function changeTheme() {
    const value = theme.state === 'light' ? 'dark' : 'light';

    theme.changeTheme(value)
  }

  return (
    <div className={styles.themeSwitcher}>
      <input
        className={styles.themeSwitcher_input}
        onChange={changeTheme}
        type="checkbox"
        hidden
        id="switcher-id"
      />

      <label
        htmlFor="switcher-id"
        className={styles.themeSwitcher_box}
      >

      </label>
    </div>
  )
}

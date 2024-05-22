import React, { useContext } from 'react';
import styles from './LangSwitch.module.scss';
import { ThemeContext } from '../../App';

export default function LangSwitch() {
  const theme = useContext(ThemeContext);

  return (
    <select name="lang" className={styles.langSwitch} onChange={(e) => theme.changeLang(e.target.value)}>
      <option value="ru">Ru</option>

      <option value="en">En</option>
    </select>
  );
}

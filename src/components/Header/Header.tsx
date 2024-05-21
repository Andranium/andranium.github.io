import React, { useContext } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import ThemeSwitcher from 'src/components/ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <ThemeSwitcher />
    </header>
  );
}

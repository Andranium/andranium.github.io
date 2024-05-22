import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LangSwitch from '../LangSwitch/LangSwitch';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <LangSwitch />

      <ThemeSwitcher />
    </header>
  );
}

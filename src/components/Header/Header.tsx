import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo.tsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

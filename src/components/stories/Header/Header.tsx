import React from 'react';
import styles from './Header.module.scss';
import Logo from 'src/components/stories/Logo/Logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}
import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';

export default function Layout() {
  return (
    <main className={styles.layout}>
      <Header />
    </main>
  );
}

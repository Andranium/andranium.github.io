import React, { createContext, useState } from 'react';
import Modal from 'src/components/Modal/Modal';
import Header from 'src/components/Header/Header';
import styles from './App.scss';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const providerData = {
    state: theme,
    changeTheme(value: string) {
      setTheme(value)
    }
  }

  return (
    <ThemeContext.Provider value={providerData}>
      <main className={styles[`theme-${providerData.state}`]}>
        <Header />
        <Modal />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

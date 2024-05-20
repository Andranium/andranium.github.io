import React, { createContext, useState } from 'react';
import Modal from 'src/components/Modal/Modal';
import './App.css';
import Header from 'src/components/Header/Header';

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
      <Header />
      <Modal shown />
    </ThemeContext.Provider>
  );
}

export default App;

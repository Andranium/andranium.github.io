import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import styles from './App.scss';
import { use } from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import ruLang from '../lang/ru.json';
import enLang from '../lang/en.json';
import ModalButton from './components/ModalButton/ModalButton';
import Products from './components/Products/Products';

use(initReactI18next).init({
  resources: {
    en: {
      translation: enLang,
    },

    ru: {
      translation: ruLang,
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
} as undefined);

export const ThemeContext = createContext(null);

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');

  const providerData = {
    state: theme,
    lang: 'ru',
    changeLang(lang: string) {
      i18n.changeLanguage(lang);
    },
    changeTheme(value: string) {
      setTheme(value);
    },
  };

  return (
    <ThemeContext.Provider value={providerData}>
      <main className={styles[`theme-${providerData.state}`]}>
        <Header />

        {t('my-app')}

        <ModalButton />

        <Products />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

import React, { createContext, useState } from 'react';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import styles from './App.scss';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ruLang from '../lang/ru.json';
import enLang from '../lang/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLang,
      },

      ru: {
        translation: ruLang
      }
    },
    lng: "ru",
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false
    }
  } as any);

export const ThemeContext = createContext(null);

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');

  const providerData = {
    state: theme,
    lang: 'ru',
    changeLang(lang: string) {
      console.log(lang);

      i18n.changeLanguage(lang);
    },
    changeTheme(value: string) {
      setTheme(value)
    }
  }

  return (
    <ThemeContext.Provider value={providerData}>
      <main className={styles[`theme-${providerData.state}`]}>
        <Header />
        <Modal />

        {t('my-app')}
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

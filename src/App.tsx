import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Здравствуйте, меня зовут Андраник :) можно Андро, так будет легче ))</p>

        <ul>
          <li>Хочу обучаться Реакту</li>
          <li>React.js</li>
          <li>Vue, Nuxt, Jquery</li>
        </ul>

        <p>Мне 24, работаю в компани Иннотех, разрабатываем проект для Росгидромета.</p>
      </header>
    </div>
  );
}

export default App;

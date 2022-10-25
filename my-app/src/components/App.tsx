import React from 'react';
import '../styles/App.css';
import Header from './Header';
import MainWrap from './MainWrap';
import { data } from '../data/data';


function App() {

  return (
    <div className="App">
      <Header />
      <MainWrap />
    </div>
  );
}

export default App;

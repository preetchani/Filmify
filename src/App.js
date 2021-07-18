import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home';
import {GlobleStyle} from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobleStyle/>
    </div>
  );
}

export default App;

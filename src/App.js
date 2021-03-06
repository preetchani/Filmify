import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home';
import {GlobleStyle} from './GlobalStyle';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App =() => (
    <Router>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:movieId' element={<Movie/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      <GlobleStyle/>
    </Router>
);

export default App;

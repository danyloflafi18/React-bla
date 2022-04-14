import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Plot from './components/Plot';
import Plot1 from './components/Plot1';
import Movie from './components/Movie';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Routes>
          <Route path='/Danylo' element={<Plot />} />
          <Route path='/John' element={<Movie />} />
          <Route path='/Alex' element={<Plot1 />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

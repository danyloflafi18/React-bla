import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Plot from './components/Plot';
import Plot1 from './components/Plot1';
import Movie from './components/Movie';
import Login from './components/Login';
import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GApiProvider } from 'react-gapi-auth2';

const clientConfig = {
  client_id: '604594895802-m9vu2v8gkfd3a1t44hm4lfc74jimqfkl.apps.googleusercontent.com',
  cookie_policy: 'single_host_origin',
  scope: 'https://www.googleapis.com/auth/drive'
};

const App = () => (
  <GApiProvider clientConfig={clientConfig}>
    <Login />
  </GApiProvider>
);
  
export default App;

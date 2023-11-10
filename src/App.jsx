import React from 'react';
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer />
      <CardWidget />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Articulos } from './Components/Articulos';
import { TopBar } from './Components/TopBar';
function App() {
  const [action, setAction] = useState('articulos');
  const checkAction = () =>{
    switch (action) {
      case 'articulos':
        return(<Articulos />)
    }
  }
  return (
    <div className="App">
      <TopBar onAction={setAction}/>
      {checkAction()}
    </div>
  );
}

export default App;

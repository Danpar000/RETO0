import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/CreateDigimon.jsx';
import './components/EditDigimon.jsx';
import './components/ShowDigimon.jsx';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowDigimon from './components/ShowDigimon.jsx';
import CreateDigimon from './components/CreateDigimon.jsx';
import EditDigimon from './components/EditDigimon.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowDigimon/>} />
          <Route path='/create' element={ <CreateDigimon/>} />
          <Route path='/edit/:id' element={ <EditDigimon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

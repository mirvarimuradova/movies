import React from 'react';
import './App.css';
import Movies from './Components/Movies'
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
function App() {

  return (

    <div className="App">
   
      <Routes>
        <Route path='/' element={<Movies/>}/>

        <Route path='/details/:id' element={<Details/>}/>
          
        <Route/>
        <Route/>
          
        <Route/>
      </Routes>
     
    </div>
  );
}

export default App;

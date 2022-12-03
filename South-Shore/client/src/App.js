import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './Navbar';
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Need from './Need'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route exact path ='/' element ={<Homepage/>}/>
      <Route exact path ='/about' element ={<Aboutpage/>}/>
      <Route exact path ='/needs' element ={<Need/>}/>
     </Routes>
    </div>
  );
}

export default App;

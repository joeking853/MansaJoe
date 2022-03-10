import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

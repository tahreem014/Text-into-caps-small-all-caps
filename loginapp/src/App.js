
// import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); // whether dark mode is enable or not

  const[alert, setalert] = useState(null);
  const showAlert = (message, type)=> {
   setalert({
    msg: message,
    type: type
   })
   setTimeout(()=>{
    setalert(null);
   }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success:");
    }
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  // showAlert("Light mode has been enabled", "success:");
}
  }
  return (
    <>
{/* <Navbar title="Navbar" aboutText="About me" /> */}
{/* <Navbar/> */}
<Router>
<Navbar title='Navbar' mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  {/* /user -----> Components 1 */}
  {/* /user/home -----> Components 2  */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter your Text" mode={mode}/>
          </Route>
        </Routes>

</div>
</Router>
</>
);
  }

export default App;

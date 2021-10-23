
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import About from './components/About'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [day, setday] = useState('Day')
  const toggolmode = () => {
    if (mode === "light") {
      setmode('dark')
      setday('Night')
    }
    else {
      setmode('light')
      setday('Day')
    }
  }
  return (
    <>

      <Router>

        <Navbar titel="Magical Notes" mode={mode} toggolmode={toggolmode} day={day} />
        <Switch>
          <Route exact path="/">
            <Forms heading="Text" topic="Topic : " mode={mode} />
          </Route>
          <Route path="/">
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

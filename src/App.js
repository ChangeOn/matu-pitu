import React from "react";
import Main from './components/Main';
import About from './components/About';
import './App.css';
import {Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

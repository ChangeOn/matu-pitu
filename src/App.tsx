import * as React from "react";
import {Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Route path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
           <Route path="/" exact component={Home} />

           <Route path="/apropos" exact component={About} />
        </Switch>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;

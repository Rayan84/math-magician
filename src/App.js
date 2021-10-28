import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

 const App = () => {
    return(
      <Router>
       <div className="App">
         <Navbar />
         <Switch>
           <Route path="/quote">
             <Quote />
           </Route>
           <Route path="/calculator">
             <Calculator />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>

      </div>
      </Router>
    )
};

export default App;

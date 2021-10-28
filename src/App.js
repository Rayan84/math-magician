import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

 const App = () => {
    return(
      <Router>
       <div className="App">
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="./calculator">Calculator</Link></li>
           <li><Link to="./quote">Quote</Link></li>
         </ul>
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

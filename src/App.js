import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
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
           <Route path="/Calculator">
             <Calculator />
           </Route>
         </Switch>

      </div>
      </Router>
    )
};

// function Home() {
//   return <h2>Home</h2>;
// }

// function Quote2() {
//   return <h2>Quote</h2>;
// }

// function Calculator2() {
//   return <h2>Calculator</h2>;
// }

export default App;

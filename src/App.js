import logo from './logo.svg';
import './App.css';
import Equipments from './Equipments';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// all routing has to be defined here.
function App() {
  return (
    <div className="App">
      <Router>
        <div>
                    </div> 

          <Switch>
          <Route path="/">
            <Equipments category="vehicles" />
          </Route>
      
          </Switch>

      </Router>
      {/* based up on the url path i want to decide which component i want to load */}
    </div>
  );
}

export default App;

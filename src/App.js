import React from 'react';
import HomePage from "./pages/homepage/homepage"
import './App.css';
import { Switch,Route} from "react-router-dom";
import Shop from "./pages/shop/shop"

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path= "/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;

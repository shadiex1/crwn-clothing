import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage"
import './App.css';
import { Switch,Route} from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in and sign-up"
import {auth} from "./firebase/firbase.utlities";
class App extends Component {
  state={
    currentUser:null
  }
  unSubscribeFromAuth=null;
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user)
    })

  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path= "/shop" component={Shop}/>
      <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
  }
  
}

export default App;

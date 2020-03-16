import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage"
import './App.css';
import { Switch,Route} from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in and sign-up"
import {auth,createUserProfileDocument} from "./firebase/firbase.utlities";
class App extends Component {
  state={
    currentUser:null
  }
  unSubscribeFromAuth=null;
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }else {
        this.setState({currentUser:userAuth});
      }
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

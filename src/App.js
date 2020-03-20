import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage"
import './App.css';
import { Switch,Route,Redirect} from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/header";
import {connect} from "react-redux"
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in and sign-up"
import CheckoutPage from "./pages/checkout/checkout"
import {auth,createUserProfileDocument} from "./firebase/firbase.utlities";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect"
class App extends Component {
 
  unSubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
              id:snapShot.id,
               ...snapShot.data()
          });
        });
      }else {
        setCurrentUser(userAuth);
      }
    })

  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path= "/shop" component={Shop}/>
      <Route exact= "/checkout" component={CheckoutPage}/>
      <Route exact path="/signin" render={()=>this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>} />
      </Switch>
    </div>
  );
  }
  
}
const mapStatetoProps =createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps= dispatch =>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);

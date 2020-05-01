import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage";
import {GlobalStyle} from "./global.styles"
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
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>

      

      
      </div>


    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
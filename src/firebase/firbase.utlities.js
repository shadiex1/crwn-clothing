import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyX-K6Z0jGBI0jP4Ad8MtdvDUFwUU52VA",
  authDomain: "crwn-database-1d74e.firebaseapp.com",
  databaseURL: "https://crwn-database-1d74e.firebaseio.com",
  projectId: "crwn-database-1d74e",
  storageBucket: "crwn-database-1d74e.appspot.com",
  messagingSenderId: "191706251460",
  appId: "1:191706251460:web:6a8cae347e72330d910991",
  measurementId: "G-S894E6YTGP"
};

  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get()
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt= new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("error creating user" , error.message)
      }
    }
    return userRef;
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle= ()=> auth.signInWithPopup(provider);

  export default firebase;
  
  
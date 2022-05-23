import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBu8qrsndZRODrwcMUqmr-yFPygwGNxdmk",
    authDomain: "linkedin-return-dc43d.firebaseapp.com", 
    projectId: "linkedin-return-dc43d", 
    storageBucket: "linkedin-return-dc43d.appspot.com",  
    messagingSenderId: "94864086561",  
    appId: "1:94864086561:web:b950f82b6de5a1ed1e3560", 
    measurementId: "G-M74XNC2T1N"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
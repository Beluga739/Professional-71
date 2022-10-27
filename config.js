import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDI8TqYU9VfvqwEq_JzQg-sA8hOWRsjfjY",
    authDomain: "project71-b36c7.firebaseapp.com",
    projectId: "project71-b36c7",
    storageBucket: "project71-b36c7.appspot.com",
    messagingSenderId: "791784787094",
    appId: "1:791784787094:web:f870140e5eb3f0ba2186b7"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDtr8lN68DXkWem1e8e8IEcKupyORgCVrE",
    authDomain: "planning-app-e53af-563d2.firebaseapp.com",
    databaseURL: "https://planning-app-e53af-563d2.firebaseio.com",
    projectId: "planning-app-e53af",
    storageBucket: "",
    messagingSenderId: "504978950454",
    appId: "1:504978950454:web:9e514859546b398c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();//.settings({timestampsInSnapshots: true});

  export default firebase;
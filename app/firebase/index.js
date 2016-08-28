import firebase from "firebase";

try {
  var config = {
    apiKey: "AIzaSyDDO92omTiRb_h854CObRzuqp5eAZ5cNo8",
    authDomain: "murali-todo-app.firebaseapp.com",
    databaseURL: "https://murali-todo-app.firebaseio.com",
    storageBucket: "murali-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}
// Initialize Firebase


export var firebaseRef=firebase.database().ref();
export default firebase;

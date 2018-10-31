import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDfeNKNPqoZaUkkSqGZZyABTJz8Hwuo68M",
  authDomain: "banbang-a173c.firebaseapp.com",
  databaseURL: "https://banbang-a173c.firebaseio.com",
  projectId: "banbang-a173c",
  storageBucket: "banbang-a173c.appspot.com",
  messagingSenderId: "93005425679"
};

var fire = firebase.initializeApp(config);
export default fire;

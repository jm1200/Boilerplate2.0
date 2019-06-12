import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDc-lOgEOpHi6Qzd4dg6h_4cUiplv2WSLQ",
  authDomain: "boilerplate2-d0bab.firebaseapp.com",
  databaseURL: "https://boilerplate2-d0bab.firebaseio.com",
  projectId: "boilerplate2-d0bab",
  storageBucket: "",
  messagingSenderId: "576346658660",
  appId: "1:576346658660:web:69352412d9398129"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    // Firebase APIs
    this.auth = app.auth();
    this.db = app.firestore();
    //console.log(app.firestore.Timestamp.fromDate(new Date()));
    this.firestore = app.firestore;
  }
  // Users API

  user = uid => this.db.doc(`users/${uid}`);
  users = () => this.db.collection("users");
}

export default Firebase;

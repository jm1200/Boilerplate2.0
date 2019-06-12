import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.css";
import Store from "./Store";
import * as serviceWorker from "./serviceWorker";
import Firebase from "./firebase/Firebase";

export const FirebaseContext = React.createContext(null);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Store />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

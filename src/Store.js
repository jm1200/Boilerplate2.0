import React, { useReducer, useContext } from "react";
import AppBase from "./App";
import authStateReducer, {
  initialAuthState
} from "./store/reducers/authStateReducer";
//import FirebaseContext from "./firebase";

export const AppStateContext = React.createContext(null);

const Store = () => {
  //const firebase = useContext(FirebaseContext);
  const [state, dispatch] = useCombinedReducers({
    auth: useReducer(authStateReducer, initialAuthState)
  });

  const updateAuthState = user => {
    if (user) {
      dispatch({ type: "signIn", payload: user.uid });
    } else {
      dispatch({ type: "signOut" });
    }
  };

  //TODO: May want to add my own user database later to store maybe a birthday or other user info.
  /**
   * Adds user to users in Firestore after signup.
   * @param user
   */

  const createUser = user => {
    console.log();
  };

  console.log("State: ", state);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      <AppBase updateAuthState={updateAuthState} createUser={createUser} />
    </AppStateContext.Provider>
  );
};

export default Store;

const useCombinedReducers = combinedReducers => {
  // Global State
  const state = Object.keys(combinedReducers).reduce(
    (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
    {}
  );

  // Global Dispatch Function
  const dispatch = action =>
    Object.keys(combinedReducers)
      .map(key => combinedReducers[key][1])
      .forEach(fn => fn(action));

  return [state, dispatch];
};

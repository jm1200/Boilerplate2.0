export const initialAuthState = {
  isSignedIn: false,
  authUser: null
};

const authStateReducer = (state, action) => {
  switch (action.type) {
    case "signIn": {
      return Object.assign(
        {},
        { ...state },
        { isSignedIn: true, authUser: action.payload }
      );
    }
    case "signOut": {
      return Object.assign(
        {},
        { ...state },
        { isSignedIn: false, authUser: null }
      );
    }

    default:
      return state;
  }
};

export default authStateReducer;

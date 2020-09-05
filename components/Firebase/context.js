import { useEffect, createContext } from 'react'
import { useDispatch } from 'react-redux';
import Firebase from './firebase';

const FirebaseContext = createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export function FirebaseProvider({ children }) {
  const firebase = new Firebase();
  const dispatch = useDispatch();
  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const idToken = await firebase.retrieveToken();
          dispatch({ type: "UPDATE_AUTH", idToken: idToken})
        } else { 
          dispatch({ type: "LOGOUT" })
        };
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}
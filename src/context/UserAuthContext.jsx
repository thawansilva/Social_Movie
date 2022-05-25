import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const handleSignUp = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleSignIn = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider value={(handleSignIn, handleSignUp)}>
      {children}
    </userAuthContext.Provider>
  );
};

const useUserAuth = () => {
  return useContext(userAuthContext);
};

export default { UserAuthContextProvider, useUserAuth };

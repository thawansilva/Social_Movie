import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

export const userAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [erro, setErro] = useState(null);

  const outErrorMessage = () => {
    return setTimeout(() => {
      setErro(null);
    }, 10000);
  };

  const SignUp = async ({ email, password, name }) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.displayName = name;
      })
      .catch((err) => {
        setErro(err.message);
        outErrorMessage();
      });
  };

  const SignIn = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((err) => {
        setErro(err.message);
        outErrorMessage();
      });
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, erro, SignIn, SignUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
};

export { UserAuthContextProvider };

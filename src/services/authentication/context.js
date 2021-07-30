import React, {useState, createContext} from "react";
import firebase from "firebase";

import {loginRequest} from "./service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await loginRequest(email, password);
      setUser(user);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e)
      console.log(e.message);
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    try {
      setIsLoading(true);
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      setUser(user);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e);
      console.log(e.message);
    }
  };

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };


  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
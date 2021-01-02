import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0mGhdQYkAZGDfHgtFF77P8EgbExoMdlo",
  authDomain: "crown-application.firebaseapp.com",
  projectId: "crown-application",
  storageBucket: "crown-application.appspot.com",
  messagingSenderId: "663583050135",
  appId: "1:663583050135:web:ba462a131b51ccc8f91cd2",
  measurementId: "G-BLZ8DFTWD8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export default firebase;

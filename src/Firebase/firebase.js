import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAVKa_5yrj_JyikLlaflqIkomusQ0VnwdA",
  authDomain: "my-clothing-db-fe405.firebaseapp.com",
  databaseURL: "https://my-clothing-db-fe405.firebaseio.com",
  projectId: "my-clothing-db-fe405",
  storageBucket: "my-clothing-db-fe405.appspot.com",
  messagingSenderId: "810182001913",
  appId: "1:810182001913:web:2acde7995df7597c190e28"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

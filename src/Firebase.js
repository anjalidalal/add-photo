import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { store } from "./Redux/Store";
import { getUser } from "./Redux/Action";

const firebaseConfig = {
  apiKey: "AIzaSyCHoDO5QFmn0D-Q6j_YHxKnAywuwqlywv4",
  authDomain: "add-photo-47d6e.firebaseapp.com",
  projectId: "add-photo-47d6e",
  storageBucket: "add-photo-47d6e.appspot.com",
  messagingSenderId: "398631029543",
  appId: "1:398631029543:web:2999575ac0005e01393702",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = async () => {
  try {
    const result = await auth.signInWithPopup(provider);
    store.dispatch(
      getUser({
        displayName: result.user.displayName,
        email: result.user.email,
        id: result.user.uid,
        photo: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
      })
    );
  } catch (error) {
    store.dispatch(getUser(null));
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    store.dispatch(getUser(null));
  } catch (error) {
    console.log(error);
    store.dispatch(getUser(null));
  }
};

export { auth };

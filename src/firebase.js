import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB2Jca0DlVS2xDCwM00BBsbJBaluIQX99c",
  authDomain: "fb-clone-12ae1.firebaseapp.com",
  projectId: "fb-clone-12ae1",
  storageBucket: "fb-clone-12ae1.appspot.com",
  messagingSenderId: "53179310107",
  appId: "1:53179310107:web:74983a37e7ed5cd0d998be",
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, provider, db, storage };

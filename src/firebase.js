// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCltokNopL_pir7W4NoruQHU0fqhXz_Y5E",
  authDomain: "clone-e4d0e.firebaseapp.com",
  projectId: "clone-e4d0e",
  storageBucket: "clone-e4d0e.appspot.com",
  messagingSenderId: "1026684428013",
  appId: "1:1026684428013:web:4ec7bbd53f94327c5236e4",
  measurementId: "G-J6XQ2MZNX6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

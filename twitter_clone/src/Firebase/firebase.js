// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBpbQ0MuZGII0cgUj8YlrFq0VSNjUrzFAI",
  authDomain: "twitterclone-d6f40.firebaseapp.com",
  projectId: "twitterclone-d6f40",
  storageBucket: "twitterclone-d6f40.appspot.com",
  messagingSenderId: "585040289188",
  appId: "1:585040289188:web:ca728965864f7d19dd3531",
  measurementId: "G-5W2QGHKVGQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
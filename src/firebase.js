// const firebaseConfig = {
//
// };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD5MCve5pP375pz6Y22SfQDwMNm4ISUInU",
  authDomain: "todoapp-79ecd.firebaseapp.com",
  projectId: "todoapp-79ecd",
  storageBucket: "todoapp-79ecd.appspot.com",
  messagingSenderId: "700719646746",
  appId: "1:700719646746:web:2b2990caa0663dbef2e9a3",
  measurementId: "G-361WFJ7RSX",
});

const db = firebase.firestore();

export default db;

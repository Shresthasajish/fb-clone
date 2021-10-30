import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_04z5GEW68J1irrDCeTHEQdpBa6PxUio",
    authDomain: "facebook-messenger-clone-2b94e.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-2b94e.firebaseio.com",
    projectId: "facebook-messenger-clone-2b94e",
    storageBucket: "facebook-messenger-clone-2b94e.appspot.com",
    messagingSenderId: "869168840719",
    appId: "1:869168840719:web:621c7b0b8fd9865511237a",
    measurementId: "G-KSSDG1NTKV"
});

const db = firebaseApp.firestore();

export default db;
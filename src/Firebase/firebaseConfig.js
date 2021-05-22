import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAr54RToR0DsOeZKVGY5JjRXz7cwmV164",
    authDomain: "react-journalapp-6357e.firebaseapp.com",
    projectId: "react-journalapp-6357e",
    storageBucket: "react-journalapp-6357e.appspot.com",
    messagingSenderId: "881098436955",
    appId: "1:881098436955:web:d75fadd0ec64327923ea7e"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, query, orderBy, where, onSnapshot } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyADGIhoPlrkI7x9_LtZJpWbOdM-Bvv--T4",
    authDomain: "euphoriajournal.firebaseapp.com",
    projectId: "euphoriajournal",
    storageBucket: "euphoriajournal.firebasestorage.app",
    messagingSenderId: "361171963946",
    appId: "1:361171963946:web:bc56a25279255d1a3eb353",
    measurementId: "G-7JLWFVJ4DE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const tradesCol = collection(db, 'trades');

export { db, auth, tradesCol, addDoc, deleteDoc, doc, query, orderBy, where, onSnapshot, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut };

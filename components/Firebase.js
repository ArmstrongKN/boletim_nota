import { initializeApp, } from "firebase/app";
import { getFirestore, collection, addDoc,  getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyBy0gHIfJrLSj2v3wIpEGjQTn08amQYP9g",
    authDomain: "boletim-80046.firebaseapp.com",
    projectId: "boletim-80046",
    storageBucket: "boletim-80046.appspot.com",
    messagingSenderId: "186221526322",
    appId: "1:186221526322:web:4d05663be0b114aa4fab2b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, getFirestore, collection, addDoc,  getDocs, doc, updateDoc, deleteDoc };
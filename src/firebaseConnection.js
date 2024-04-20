import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNN-QYj2cRkzbGpxhJCN37qF9-Uoz79Fs",
  authDomain: "financialmanager-f02a7.firebaseapp.com",
  projectId: "financialmanager-f02a7",
  storageBucket: "financialmanager-f02a7.appspot.com",
  messagingSenderId: "596006517547",
  appId: "1:596006517547:web:66b29ac02d5a9a241f236e",
  measurementId: "G-TD48S49VMH",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };

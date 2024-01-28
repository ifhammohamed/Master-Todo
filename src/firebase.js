// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVNi1TtCBL7laFYSJkv7W0xuVqC6d9wfk",
  authDomain: "master-todo-5e767.firebaseapp.com",
  projectId: "master-todo-5e767",
  storageBucket: "master-todo-5e767.appspot.com",
  messagingSenderId: "1024333618867",
  appId: "1:1024333618867:web:ea2da0868a83a6a19cdac6",
  measurementId: "G-C42PXC20RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
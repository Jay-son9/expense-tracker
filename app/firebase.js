// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvgaD0ZDA3nFJkFptHZpsbdfwcLAN2rkc",
  authDomain: "expense-tracker-6dc7e.firebaseapp.com",
  projectId: "expense-tracker-6dc7e",
  storageBucket: "expense-tracker-6dc7e.appspot.com",
  messagingSenderId: "112836163381",
  appId: "1:112836163381:web:faf19fa0c128a6e74dbe7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);

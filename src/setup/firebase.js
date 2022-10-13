// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHLE6cpr68izRlppSJRqyfsGMgQXoczX0",
  authDomain: "flip-webco.firebaseapp.com",
  projectId: "flip-webco",
  storageBucket: "flip-webco.appspot.com",
  messagingSenderId: "852948416263",
  appId: "1:852948416263:web:ed6a486fa6cee7c95bf7a2",
  measurementId: "G-9R1W2L0PD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
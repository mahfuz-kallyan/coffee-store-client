// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAekJ08SkgN30dcMmlodCJzMq-NNFS6ir4",
  authDomain: "store-coffee-a78db.firebaseapp.com",
  projectId: "store-coffee-a78db",
  storageBucket: "store-coffee-a78db.firebasestorage.app",
  messagingSenderId: "676321240084",
  appId: "1:676321240084:web:d8261c4224ec1120d13301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
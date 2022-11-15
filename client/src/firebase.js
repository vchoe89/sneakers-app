// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC36CvlpRmUBPmSgdn8LNyJDdFuN4k9hU0",
  authDomain: "sneakers-app-aa92b.firebaseapp.com",
  projectId: "sneakers-app-aa92b",
  storageBucket: "sneakers-app-aa92b.appspot.com",
  messagingSenderId: "616040023427",
  appId: "1:616040023427:web:c1ebd797105faac6eca2b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

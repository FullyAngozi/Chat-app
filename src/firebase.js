// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ErMwxdF6hnc4l1ifBjyDYWbu3r0DXog",
  authDomain: "sweet-chat-app.firebaseapp.com",
  projectId: "sweet-chat-app",
  storageBucket: "sweet-chat-app.appspot.com",
  messagingSenderId: "666294356334",
  appId: "1:666294356334:web:dcf24424ecb37b6ac2197f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
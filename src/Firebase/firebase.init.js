import { getAuth } from "firebase/auth"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA03uTqK7W0HqyvQLEeVd8HyKcZIEB0J_Y",
  authDomain: "laptop-store-2d59d.firebaseapp.com",
  projectId: "laptop-store-2d59d",
  storageBucket: "laptop-store-2d59d.appspot.com",
  messagingSenderId: "29279803386",
  appId: "1:29279803386:web:e80342195cf8c7089ab643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
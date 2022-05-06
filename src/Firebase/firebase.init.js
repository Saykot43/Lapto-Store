import { getAuth } from "firebase/auth"; 
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2b9hHQRdaoziWgLSY5GElu27fP6Hie6o",
  authDomain: "laptop-store-63bf2.firebaseapp.com",
  projectId: "laptop-store-63bf2",
  storageBucket: "laptop-store-63bf2.appspot.com",
  messagingSenderId: "159597671427",
  appId: "1:159597671427:web:5d90faafec29ed6cbbca36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
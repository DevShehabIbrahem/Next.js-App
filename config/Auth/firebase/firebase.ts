import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkO_yN3OmzcoKHMFJyyECWcERooiRtIYw",
  authDomain: "movies-6e223.firebaseapp.com",
  projectId: "movies-6e223",
  storageBucket: "movies-6e223.appspot.com",
  messagingSenderId: "74467886599",
  appId: "1:74467886599:web:7ece0830789bc424e5cca2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

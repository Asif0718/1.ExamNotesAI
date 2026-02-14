
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-1b960.firebaseapp.com",
  projectId: "authexamnotes-1b960",
  storageBucket: "authexamnotes-1b960.firebasestorage.app",
  messagingSenderId: "502251833487",
  appId: "1:502251833487:web:6e165869103f2d6fffc8fa"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
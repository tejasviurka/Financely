// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2bOjmiP6Jz1xZiryGe0r4G4Cl7SwfHCc",
  authDomain: "finance-727ff.firebaseapp.com",
  projectId: "finance-727ff",
  storageBucket: "finance-727ff.appspot.com", // Corrected
  messagingSenderId: "842946935",
  appId: "1:842946935:web:b2fadaf6c5fe9532576972",
  measurementId: "G-KBZMLH7X5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };

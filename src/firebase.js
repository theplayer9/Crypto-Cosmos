import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };

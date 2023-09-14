import 'firebase/firestore'; // se você pretende usar o Firestore
import 'firebase/storage'; // se você pretende usar o Storage
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4KsdeM_1T0Rsp7F0qN9yQVN85yEHuDRo",
  authDomain: "portfolios-5e737.firebaseapp.com",
  projectId: "portfolios-5e737",
  storageBucket: "portfolios-5e737.appspot.com",
  messagingSenderId: "146805809499",
  appId: "1:146805809499:web:74c0811dc1b40614ab7a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export default app;
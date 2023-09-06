import 'firebase/firestore'; // se você pretende usar o Firestore
import 'firebase/storage'; // se você pretende usar o Storage
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnI-RKkCNglpu4hMPlpVXBrJGw2vqzrZw",
  authDomain: "portfolios-6f9be.firebaseapp.com",
  projectId: "portfolios-6f9be",
  storageBucket: "portfolios-6f9be.appspot.com",
  messagingSenderId: "91060627431",
  appId: "1:91060627431:web:5e11e6c9aeb5d95f9d7f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
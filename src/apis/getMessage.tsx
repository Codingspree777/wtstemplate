import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "take-home-wts-template.firebaseapp.com",
  projectId: "take-home-wts-template",
  storageBucket: "take-home-wts-template.appspot.com",
  messagingSenderId: "377204863220",
  appId: "1:377204863220:web:f2775f68b182107f616ea1",
  measurementId: "G-1ZGK3R9BRP",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getMessage = async () => {
  // Update the message with the new message

  const docRef = doc(db, "messages", "Zy6sPTKcMK839d9LYwdE");

  try {
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch {
    console.error("Error getting document: ");
  }
};

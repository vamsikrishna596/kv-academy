// ⚠️ REPLACE VALUES FROM FIREBASE CONSOLE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDauIQm8EkIwFCDS1zXNvRAw4KAHCYf1so",
  authDomain: "kv-academy.firebaseapp.com",
  projectId: "kv-academy",
  storageBucket: "kv-academy.firebasestorage.app",
  messagingSenderId: "540176448234",
  appId: "1:540176448234:web:e23705dfa34dcccc98f593",
  measurementId: "G-P6DWGH7J37"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

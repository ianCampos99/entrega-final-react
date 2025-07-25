import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBY5qY2tN5FZ77g0jpOH6zEuKms8MPcFMM",
    authDomain: "tiendafluxx-db.firebaseapp.com",
    projectId: "tiendafluxx-db",
    storageBucket: "tiendafluxx-db.firebasestorage.app",
    messagingSenderId: "1096608651249",
    appId: "1:1096608651249:web:d9f16320189d48ec881650"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
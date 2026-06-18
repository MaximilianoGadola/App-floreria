import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBnOOc3VH2RTnnMyxmvYk-ibRgxS7geY-k",
    authDomain: "floreria-mia.firebaseapp.com",
    projectId: "floreria-mia",
    storageBucket: "floreria-mia.firebasestorage.app",
    messagingSenderId: "772199433762",
    appId: "1:772199433762:web:2bd2e0448f85070846ec7b"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
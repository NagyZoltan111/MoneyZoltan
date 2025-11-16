import { initializeApp } from 'firebase/app';

import { initializeAuth, indexedDBLocalPersistence } from 'firebase/auth'; // Crucial for Auth persistence!

import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyBQKq1YggF3GjajZAmjHYtGmZk0ihPJwRs",

  authDomain: "moneyzoltan-68329.firebaseapp.com",

  projectId: "moneyzoltan-68329",

  storageBucket: "moneyzoltan-68329.firebasestorage.app",

  messagingSenderId: "969689374570",

  appId: "1:969689374570:web:06b24cafc605bf78f94f13",

  measurementId: "G-PQW8QDLY5Q"

};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {

  persistence: indexedDBLocalPersistence // This helps maintain user sessions

});

export const db = getFirestore(app);

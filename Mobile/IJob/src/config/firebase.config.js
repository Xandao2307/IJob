import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbkTVvjQXN7Grelmnmzk8kgwgY8pcTFec",
  authDomain: "ijob-2147e.firebaseapp.com",
  projectId: "ijob-2147e",
  storageBucket: "ijob-2147e.appspot.com",
  messagingSenderId: "445150782701",
  appId: "1:445150782701:web:bf339913c3e573e29d18e4"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)
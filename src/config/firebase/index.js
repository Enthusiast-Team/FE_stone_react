// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQZ9Kq7bKgkPPz64P3OdRH4us_UwrStdw",
  authDomain: "semedo-apps.firebaseapp.com",
  databaseURL: "https://semedo-apps-default-rtdb.firebaseio.com",
  projectId: "semedo-apps",
  storageBucket: "semedo-apps.appspot.com",
  messagingSenderId: "848501833083",
  appId: "1:848501833083:web:4b9c4d759a9f8017c1d1de",
  measurementId: "G-FF06FGLCVZ"
};



// Initialize Firebase
export const Fire = initializeApp(firebaseConfig);
export const database = getDatabase(Fire)
// const database = getDatabase(Fire);


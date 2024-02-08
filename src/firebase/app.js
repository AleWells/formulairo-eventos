// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAggB3talFQD90uJIV4K3gBJVSPgRO4q34",
  authDomain: "welspring-api.firebaseapp.com",
  projectId: "welspring-api",
  storageBucket: "welspring-api.appspot.com",
  messagingSenderId: "410578936637",
  appId: "1:410578936637:web:b20a969d34c0fed8699b54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

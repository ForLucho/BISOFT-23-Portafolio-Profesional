import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaKC_G7_oDS3J22GOOSFI6e1yw5ktG19Y",
  authDomain: "bisoft-23-portafolio.firebaseapp.com",
  projectId: "bisoft-23-portafolio",
  storageBucket: "bisoft-23-portafolio.appspot.com",
  messagingSenderId: "940325946201",
  appId: "1:940325946201:web:2df63084e81c79ad7e8248",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

//export default { app, db}

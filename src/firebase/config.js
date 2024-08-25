import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAsykjqZ9HwExp0Jq0j1KA65-j9I-FSo8g",
    authDomain: "kreatormemow.firebaseapp.com",
    projectId: "kreatormemow",
    storageBucket: "kreatormemow.appspot.com",
    messagingSenderId: "880567868527",
    appId: "1:880567868527:web:c4a7a4499e413d4292819a",
    measurementId: "G-5JPQ48WX84"
  };



const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);


export { projectStorage , projectFirestore , app}
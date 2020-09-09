import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYoqHadK3HV5AmIj7OdjC9_Myc2N8v1wQ",
  authDomain: "clone-659a6.firebaseapp.com",
  databaseURL: "https://clone-659a6.firebaseio.com",
  projectId: "clone-659a6",
  storageBucket: "clone-659a6.appspot.com",
  messagingSenderId: "627457826841",
  appId: "1:627457826841:web:96419aae22be9a03e28a88",
  measurementId: "G-LLD9FWSD34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

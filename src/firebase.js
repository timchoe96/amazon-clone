import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAK0zRAEa1n0iOikCVLIfxPcuto-eshDiQ",
  authDomain: "clone-60890.firebaseapp.com",
  databaseURL: "https://clone-60890.firebaseio.com",
  projectId: "clone-60890",
  storageBucket: "clone-60890.appspot.com",
  messagingSenderId: "880404557656",
  appId: "1:880404557656:web:b4a5662367ffb605527f2d",
  measurementId: "G-DYEDZ4QNRV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };

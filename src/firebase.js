import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWEyYIeb9XmcBCzZ2YGTpplryGRHabdDI",
  authDomain: "clone-4e6c3.firebaseapp.com",
  projectId: "clone-4e6c3",
  storageBucket: "clone-4e6c3.appspot.com",
  messagingSenderId: "1016979314046",
  appId: "1:1016979314046:web:4fc650e3efdd469c570f2f",
  measurementId: "G-VQRQPT54KV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO74He02_n9pV8zVarXtIZJYMP2NWhGrc",
  authDomain: "e-clone-8152e.firebaseapp.com",
  projectId: "e-clone-8152e",
  storageBucket: "e-clone-8152e.appspot.com",
  messagingSenderId: "108339030584",
  appId: "1:108339030584:web:a3aecd760792ee9b4f14cd",
  measurementId: "G-RJ8JDZW8FB",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

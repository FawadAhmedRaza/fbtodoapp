import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBducPPw6t9muxyjWyjaTM7cs1qVsaWSNk",
    authDomain: "fir-app-1acf4.firebaseapp.com",
    projectId: "fir-app-1acf4",
    storageBucket: "fir-app-1acf4.appspot.com",
    messagingSenderId: "371944812024",
    appId: "1:371944812024:web:27215dd0b877d9ad3cba0d",
    measurementId: "G-5TQ9QNT2X4"
  };
  firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore()
  export default db;
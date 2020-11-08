import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCfdJTF7p-y1iLWgEp3cT3bMem0i24S0Kk",
  authDomain: "colorex-9b7a6.firebaseapp.com",
  databaseURL: "https://colorex-9b7a6.firebaseio.com",
  projectId: "colorex-9b7a6",
  storageBucket: "colorex-9b7a6.appspot.com",
  messagingSenderId: "586000299470",
  appId: "1:586000299470:web:af5858817307177b30a79f",
  measurementId: "G-PHCNV40NV3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth,firebaseApp};
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkDwb4HZhsOzL8xIxOC63EAgOWnMz22G8",
    authDomain: "crwn-db-38cf0.firebaseapp.com",
    databaseURL: "https://crwn-db-38cf0.firebaseio.com",
    projectId: "crwn-db-38cf0",
    storageBucket: "crwn-db-38cf0.appspot.com",
    messagingSenderId: "146267780361",
    appId: "1:146267780361:web:361424c600ea248feccfd8"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
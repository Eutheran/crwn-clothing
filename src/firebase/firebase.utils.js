import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCqRjtE2Zr-auTRyo7Hh0OCYtUXR6AaBSE',
  authDomain: 'crwn-db-8433e.firebaseapp.com',
  databaseURL: 'https://crwn-db-8433e.firebaseio.com',
  projectId: 'crwn-db-8433e',
  storageBucket: 'crwn-db-8433e.appspot.com',
  messagingSenderId: '853912708150',
  appId: '1:853912708150:web:441b706ee03d223c55a497',
  measurementId: 'G-JF41XHX0H5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ6WjhUXu0pD66na2jgesI105pu50qd4U",
  authDomain: "my-project-735fe.firebaseapp.com",
  databaseURL: "https://my-project-735fe.firebaseio.com",
  projectId: "my-project-735fe",
  storageBucket: "my-project-735fe.appspot.com",
  messagingSenderId: "819110495268",
  appId: "1:819110495268:web:75dad24842f926cbdc04b1",
  measurementId: "G-ELDB50X1E2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
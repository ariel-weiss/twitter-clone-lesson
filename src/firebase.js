import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHqoOpxWOtSTGrO_IxhMeK5MK6HKmIezU",
    authDomain: "twitter-clone-32ce3.firebaseapp.com",
    databaseURL: "https://twitter-clone-32ce3.firebaseio.com",
    projectId: "twitter-clone-32ce3",
    storageBucket: "twitter-clone-32ce3.appspot.com",
    messagingSenderId: "398409491293",
    appId: "1:398409491293:web:92ae5eaace500581657eb4",
    measurementId: "G-HC36GEXX11"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
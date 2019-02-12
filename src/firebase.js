import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

// Initialize Firebase
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "m-city-4469c.firebaseapp.com",
    databaseURL: "https://m-city-4469c.firebaseio.com",
    projectId: "m-city-4469c",
    storageBucket: "m-city-4469c.appspot.com",
    messagingSenderId: "228784706500"
};

firebase.initializeApp(config);

// making network connection
const firebaseDB = firebase.database();
// request to get the matches from firebase
const firebaseMatches = firebaseDB.ref("matches");


export {
    firebase,
    firebaseMatches
}
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDH3hSb1lpqKZKsOVHIuXBbkrGEQ-VWrCk",
    authDomain: "fir-react-chat-fc877.firebaseapp.com",
    projectId: "fir-react-chat-fc877",
    storageBucket: "fir-react-chat-fc877.appspot.com",
    messagingSenderId: "1091199349328",
    appId: "1:1091199349328:web:1d3cc0e092c4c0d80c5755"

}) 

const db =firebaseApp.firestore();

const auth = firebase.auth();

export {db,auth};

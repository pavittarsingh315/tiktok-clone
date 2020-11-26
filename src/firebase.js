import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCadF1MQyVUsyvRV8MN1TqNQs8FccvzDPc",
    authDomain: "tiktok-clone-1c31f.firebaseapp.com",
    databaseURL: "https://tiktok-clone-1c31f.firebaseio.com",
    projectId: "tiktok-clone-1c31f",
    storageBucket: "tiktok-clone-1c31f.appspot.com",
    messagingSenderId: "285377468294",
    appId: "1:285377468294:web:a911c88dc2a69b7859be07",
    measurementId: "G-QTN0C5FFVD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
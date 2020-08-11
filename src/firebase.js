import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCJHcapr5LZATgZF7LBurSiOtzxXuD647M",
    authDomain: "yeric-twitter-clone.firebaseapp.com",
    databaseURL: "https://yeric-twitter-clone.firebaseio.com",
    projectId: "yeric-twitter-clone",
    storageBucket: "yeric-twitter-clone.appspot.com",
    messagingSenderId: "1054582064877",
    appId: "1:1054582064877:web:1ba768fcb7379f654a6ee4",
    measurementId: "G-V8TMBMLL10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;
import firebase from 'firebase';
const config = {
    apiKey: "d8a38055e25c42b2b4464fb48b2ff5dc23b97bd5",
    authDomain: "imagesstorage-e5c86.firebaseapp.com",
    databaseURL: "https://imagesstorage-e5c86.firebaseio.com",
    storageBucket: "imagesstorage-e5c86.appspot.com",
    messagingSenderId: "472126861593"
};

firebase.initializeApp(config);
export default class FirebaseStorage {
    static storage = firebase.storage().ref();
}


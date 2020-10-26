let firebase = require('firebase');
var firebaseConfig = {
    apiKey: "",
    authDomain: "flegue-464f2.firebaseapp.com",
    databaseURL: "https://flegue-464f2.firebaseio.com",
    projectId: "flegue-464f2",
    storageBucket: "flegue-464f2.appspot.com",
    messagingSenderId: "333522182157",
    appId: "1:333522182157:web:ea598f44254dec3770b544"
  };

firebase.initializeApp(firebaseConfig);

exports.firebaseRef = () => {
    return firebase.database().ref()
}
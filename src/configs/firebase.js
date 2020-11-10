let firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyBebBWxI_M3O4W4k0hI9m30vJUtLn05ePA",
    authDomain: "flegue-464f2.firebaseapp.com",
    databaseURL: "https://flegue-464f2.firebaseio.com",
    projectId: "flegue-464f2",
    storageBucket: "flegue-464f2.appspot.com",
    messagingSenderId: "333522182157",
    appId: "1:333522182157:web:6c144eb35561ef9e70b544"
  };

firebase.initializeApp(firebaseConfig);

exports.firebaseRef = () => {
    return firebase.database().ref()
}
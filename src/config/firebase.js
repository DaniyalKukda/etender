import firebase from 'firebase';
//firebase initialization
var firebaseConfig = {
    apiKey: "AIzaSyC3U63LlIL-p5sQPk124Tlxp_heI-96kvU",
    authDomain: "e-tender-1997.firebaseapp.com",
    databaseURL: "https://e-tender-1997.firebaseio.com",
    projectId: "e-tender-1997",
    storageBucket: "e-tender-1997.appspot.com",
    messagingSenderId: "774076261049",
    appId: "1:774076261049:web:66439f9c05f78b51"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
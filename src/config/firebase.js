import firebase from 'firebase';
//firebase initialization
var firebaseConfig = {
    apiKey: "AIzaSyDh-1JxMCQkhPXoeJImsTZfYpdKLHD_0qk",
    authDomain: "etender-b9ca1.firebaseapp.com",
    databaseURL: "https://etender-b9ca1.firebaseio.com",
    projectId: "etender-b9ca1",
    storageBucket: "etender-b9ca1.appspot.com",
    messagingSenderId: "318273515941",
    appId: "1:318273515941:web:6a24bb62335d795c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
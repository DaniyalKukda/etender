import React from "react";
import firebase from "../config/firebase";
import { SweetAlert } from "sweet-alert"

const onConfirm = () => {
    console.log("object")
}
const LoginUser = (data) => {
    console.log(data)
    firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((success) => {
        let uid = success.user.uid;
        console.log("sucdesss")
        firebase.database().ref("users/" + uid).once("value",(res) => {
            let data = res.val();
            console.log(data)
        }).then((success) => {
           return <SweetAlert success title="Welcome!" onConfirm={onConfirm}>
                Login Successfully
            </SweetAlert>
        }).catch((err) => {
            console.log(err.message)
        })

    }).catch((err) => {
        console.log(err.message)
    })

}

export default LoginUser
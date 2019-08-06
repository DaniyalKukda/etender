import Swal from 'sweetalert2'
import firebase from "../config/firebase";

const LoginUser = (data, props) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((success) => {
            let uid = success.user.uid;
            firebase.database().ref("users/" + uid).once("value", (res) => {
                let data = res.val();
                Swal.fire({
                    type: 'success',
                    title: 'Welcome',
                    text: "Login successfully....!",
                })
                resolve(data)
            })
        }).catch((err) => {
            reject(err)
            console.log(err.message)
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: err.message,
            })
        })
    })

}

const forgotPassword = (email) => {
    return new Promise((resolve,reject) => {
        firebase.auth().sendPasswordResetEmail(email).then(() => {
            Swal.fire({
                type: 'success',
                title: 'Email is Sent',
                text: email,
            })
        }).catch((err) => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: err.message,
            })
        })
    })
}

export {LoginUser , forgotPassword}
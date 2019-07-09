import firebase from "../config/firebase"
import Swal from 'sweetalert2'
 const  CreateUser = (data , props) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((success) => {
            console.log("login ka then chala")
            let storageRef = firebase.storage().ref().child(`licence/${data.file.name}`)
            storageRef.put(data.file).then((url) => {
            console.log("storage ka then chala")

                url.ref.getDownloadURL().then((urlref) => {
                    data.file = urlref;
                    let userId = firebase.auth().currentUser.uid;
                    data.uid = userId
                    firebase.database().ref("users/"+userId).set(data).then((res) => {
                        Swal.fire({
                            type: 'success',
                            title: 'Welcome',
                            text: 'Login Successfully...',
                        })
                        console.log("created")
                        setTimeout(() => {
                            props.history.push("/home/login")
                        }, 2000);
                    }).catch((err) => {
                        console.error(err.message);
                        console.log(err);
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: err.message,
                        })
                    })

                }).catch((err) => {
                    console.error(err.message);
                    console.log(err);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: err.message,
                    })
                })

            }).catch((err) => {
                console.error(err.message);
                console.log(err);
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
            })
        }).catch((err) => {
            console.error(err.message);
            console.log(err);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: err.message,
            })
        })
}
export default CreateUser
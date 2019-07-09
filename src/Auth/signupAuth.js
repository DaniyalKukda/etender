import firebase from "../config/firebase"
import Swal from 'sweetalert2'

const CreateUser = (data, props) => {
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
                    data.userFlag = false
                    firebase.database().ref("users/" + userId).set(data).then((res) => {
                        Swal.fire({
                            type: 'success',
                            title: 'Welcome',
                            text: 'Account Created Successfully...',
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

const updateUserData = (data, props) => {
    let storageRef1 = firebase.storage().ref().child(`licence/${data.file.name}`)
    storageRef1.put(data.file).then((url1) => {

        url1.ref.getDownloadURL().then((urlref1) => {
            data.file = urlref1
            let storageRef = firebase.storage().ref().child(`BankLetter/${data.bankLetter.name}`)
            storageRef.put(data.bankLetter).then((url) => {
                url.ref.getDownloadURL().then((urlref) => {
                    data.bankLetter = urlref;
                    let userId = props.user.uid;
                    data.uid = userId
                    data.userFlag = true
                    firebase.database().ref("users/" + userId).set(data).then((res) => {
                        Swal.fire({
                            type: 'success',
                            title: 'Updated',
                            text: 'Account is Successfully Updated...',
                        })
                        setTimeout(() => {
                            props.history.push("/")
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
    })
}
export { CreateUser, updateUserData }
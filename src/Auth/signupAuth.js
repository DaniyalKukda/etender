import firebase from "../config/firebase"
import * as emailjs from "emailjs-com";
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
                    data.verification = false
                    firebase.database().ref("users/" + userId).set(data).then((res) => {
                        let template_params = {
                            "name": data.fullName,
                            "email": data.email,
                            "companyName": data.companyName,
                            "mobileNo": data.mobileNumber,
                            "tradeLicenceCopy": data.file,
                            "tradeLicenceNo": data.tradeLN,
                            "trnNo": data.trnNo,
                            "Country": data.country,
                            "State": data.state,
                            "Expertise": data.expertise,
                            "uid": data.uid
                        }

                        let service_id = "default_service";
                        let template_id = "new_user_verification";
                        let user_id_params = "user_XEa25EaJJWUYF0vL3EtMT";
                        emailjs.send(service_id, template_id, template_params, user_id_params).then(() => {
                            console.log("email is sent")
                        }).catch((err) => {
                            console.log(err.message)
                        })
                        Swal.fire({
                            type: 'success',
                            title: 'Welcome',
                            text: 'Account Created Successfully...',
                        })
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
    // let storageRef1 = firebase.storage().ref().child(`licence/${data.file.name}`)
    // storageRef1.put(data.file).then((url1) => {

    //     url1.ref.getDownloadURL().then((urlref1) => {
    //         data.file = urlref1
    let storageRef = firebase.storage().ref().child(`BankLetter/${data.bankLetter.name}`)
    storageRef.put(data.bankLetter).then((url) => {
        url.ref.getDownloadURL().then((urlref) => {
            data.bankLetter = urlref;
            let userId = props.user.uid;
            data.uid = userId
            data.userFlag = true
            data.verification = true
            firebase.database().ref("users/" + userId).set(data).then((res) => {
                Swal.fire({
                    type: 'success',
                    title: 'Updated',
                    text: 'Account is Successfully Updated...',
                })
                props.history.push("/")
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
    // }).catch((err) => {
    //     console.error(err.message);
    //     console.log(err);
    //     Swal.fire({
    //         type: 'error',
    //         title: 'Oops...',
    //         text: err.message,
    //     })
    // })
    // })
}
export { CreateUser, updateUserData }
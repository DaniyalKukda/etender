import firebase from "../config/firebase"

 const  CreateUser = (data) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((success) => {
            let storageRef = firebase.storage().ref().child(`licence/${data.file.name}`)
            storageRef.put(data.file).then((url) => {
                url.ref.getDownloadURL().then((urlref) => {
                    data.file = urlref;
                    let userId = firebase.auth().currentUser.uid;
                    data.uid = userId
                    firebase.database().ref("users/"+userId).set(data).then((res) => {
                        console.log("User is created")
                    }).catch((err) => {
                        console.error(err.message);
                        console.log(err);
                    })

                }).catch((err) => {
                    console.error(err.message);
                    console.log(err);
                })

            }).catch((err) => {
                console.error(err.message);
                console.log(err);
            })
        }).catch((err) => {
            console.error(err.message);
            console.log(err);
        })
}
export default CreateUser
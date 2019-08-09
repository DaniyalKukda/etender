import firebase from "../../config/firebase"
import Swal from "sweetalert2";


function PostApllication(data,props){
    let storageRef = firebase.storage().ref().child(`resume/${data.resume.name}`)
    storageRef.put(data.resume).then((url) => {
        url.ref.getDownloadURL().then((urlref) => {
            data.resume = urlref;
            firebase.database().ref("jobsApplications/").push(data).then((res) => {
                Swal.fire({
                    type: 'success',
                    title: 'Posted',
                    text: 'Your Application is Successfully Submitted...',
                })
                props.history.push("/home/careers")
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
export default PostApllication
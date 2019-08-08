import Swal from "sweetalert2";
import firebase from "../../config/firebase"

var storageRef = firebase.storage().ref();

const saveData = (obj) => {
    return new Promise((resolve , reject) => {
        storageRef.child(`engineeringdrawings/${obj.engineeringdrawings.name}`).put(obj.engineeringdrawings).then((url1) => {
            url1.ref.getDownloadURL().then((urlref1) => {
                obj.engineeringdrawings = urlref1;
                storageRef.child(`siteplan/${obj.siteplan.name}`).put(obj.siteplan).then((url2) => {
                    url2.ref.getDownloadURL().then((urlref2) => {
                        obj.siteplan = urlref2;
                        storageRef.child(`buildingPermit/${obj.buildingPermit.name}`).put(obj.buildingPermit).then((url3) => {
                            url3.ref.getDownloadURL().then((urlref3) => {
                                obj.buildingPermit = urlref3;
                                storageRef.child(`materialAndSpecification/${obj.materialAndSpecification.name}`).put(obj.materialAndSpecification).then((url4) => {
                                    url4.ref.getDownloadURL().then((urlref4) => {
                                        obj.materialAndSpecification = urlref4;
                                        firebase.database().ref("openTender/" + obj.uid).push(obj).then((success) => {
                                            Swal.fire({
                                                type: 'success',
                                                title: 'Open Tender',
                                                text: 'Tender is Successfully Posted...',
                                            })
                                            resolve({res:"success"})
                                            
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
                                        Swal.fire({
                                            type: 'error',
                                            title: 'Oops...',
                                            text: err.message,
                                        })
                                    })
                                })
                                
                            }).catch((err) => {
                                Swal.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: err.message,
                                })
                            })
                        })
                        
                    }).catch((err) => {
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: err.message,
                        })
                    })
                })
            }).catch((err) => {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: err.message,
                })
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
export default saveData
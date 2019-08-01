const functions = require('firebase-functions');

const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(SENDGRID_API_KEY);

exports.firebaseEmail = functions.database.ref("contact/").onCreate(event => {
    const db = admin.database()

    return db.ref("contact/").on("value" , (value) => {
        const data = value.val()
        const msg = {
            to : "daniyalkukda545@gmail.com",
            from : data.email,
            subject : "Contact Us",
            
            templateId : "d-1986f97cd57645ca924218c0b46997d6",
            substitutionWrappers : ['{{' , '}}'],
            substitutions : {
                from : data.email,
                phoneNumber: data.phoneNumber,
                HelpYou: data.HelpYou,
                Description: data.Description,
                Country: data.Country
            }
        }
        return sgMail.send(msg)
    })
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

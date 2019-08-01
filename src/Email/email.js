




// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');
// const cors = require('cors')({origin: true});
// admin.initializeApp();

// /**
// * Here we're using Gmail to send 
// */
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'daniyalkukda545@gmail.com',
//         pass: 'Daniyalkukda1997'
//     }
// });

// exports.sendMail = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
      
//         // getting dest email by query string
//         const dest = req.query.dest;

//         const mailOptions = {
//             from: 'Your Account Name <daniyalkukda545@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
//             to: dest,
//             subject: 'I\'M A PICKLE!!!', // email subject
//             html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
//                 <br />
//                 <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
//             ` // email content in HTML
//         };
  
//         // returning result
//         return transporter.sendMail(mailOptions, (erro, info) => {
//             if(erro){
//                 return res.send(erro.toString());
//             }
//             return res.send('Sended');
//         });
//     });    
// });








// // const nodeMailer = require('nodemailer');
// // const xoauth2 = require('xoauth2');

// // var transporter = nodeMailer.createTransport({
// //     service : "gmail",
// //     auth : {
// //         xoauth2 : xoauth2.createXOAuth2Generator({
// //             user : "daniyalkukda545@gmail.com",
// //             clientId : "758147685499-kmfkdnucbm8m9uvqvueq750cip61rebn.apps.googleusercontent.com",
// //             clientSecret : "8E45es73oYnsUp1JS2XI9dOi",
// //             refreshToken : "1/98emrdlGgs5hy6VX2avj8QLOQWSYZhMVV_Ksy0Yrlsk"
// //         })
// //     }
// // })


// // export default transporter

// // // transporter.sendMail(mailOptions, (err , res) => {
// //     //     if(err){
// //         //         console.log("error" , err)
// //         //     }else{
// //             //         console.log("Email sent")
// //             //     }
// // // })
// //                         // var mailOptions = {
// //                         //     from : "sender <shakilkukda545@gmail.com>",
// //                         //     to : "daniyalkukda545@gmail.com",
// //                         //     subject : "checking",
// //                         //     text : "hello email",
// //                         // }
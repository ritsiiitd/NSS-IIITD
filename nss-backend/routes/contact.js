// import express from "express";
// import * as dotenv from 'dotenv'
// // import {v2 as cloudinbary} from 'cloudinary';
// // import Department from '../mongodb/models/departments.js' ;
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// dotenv.config();

// const router = express.Router();

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "nssiiitdweb@gmail.com",
//       pass: "********",
//     },
// });

// contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

// //GET all Statistics
// router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: "***************@gmail.com",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });


// export default router;
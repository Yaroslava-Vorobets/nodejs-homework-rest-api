const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SG_API_KEY} = process.env;

sgMail.setApiKey(SG_API_KEY);

const sendEmail = async (data) => {
    const email = {...data, from: "slavavor85@gmail.com"};
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;

// sgMail.setApiKey(SG_API_KEY)
// const email = { 
//     to: "wafit83082@fectode.com",
//     from: "slavavor85@gmail.com",
//     subject: "test",
//     html: "<p>test email from localhost<p>"
// }

// sgMail.send(email)
// .then(() => console.log('Email send success'))
// .catch(error => console.log(error.message))
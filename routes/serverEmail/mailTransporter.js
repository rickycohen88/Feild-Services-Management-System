const nodemailer = require('nodemailer');

// transporter function is  to send an email from this server through our emails host to the recipient
// **the function accepts an email address
function transporter (userEmail) { 

const transporter = nodemailer.createTransport({
  host:process.env.Mail_Host,
  port:587,
  secure: false,
  requireTLS:true,
  auth:{
    user:process.env.Mail_Auth,
    pass:process.env.Mail_Pass
  }
  });
  let mailOptions = {
    from: process.env.Mail_Auth,
    to: userEmail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  console.log("recived user email:_"+userEmail);

   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return error
    } else {
      console.log('Email sent: ' + info.response);
      return info;
    }
  });
};

module.exports = transporter;
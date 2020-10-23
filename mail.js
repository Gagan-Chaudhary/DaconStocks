const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key:  '208e52eeb982f8e5328e3ed93aff880c-a2b91229-9bf9941d',
        domain:  'sandbox637990d93a624be49c1f889b5ef44f73.mailgun.org' 
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = ( email,subject,text, cb) => {
    const mailOptions = {
        from: email, 
        to:'201852009@iiitvadodara.ac.in' , 
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
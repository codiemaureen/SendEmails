const nodeMailer = require('nodemailer');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

exports.sendEmailMailtrap = async(req, res) => {
    const testAccount = await nodeMailer.createTestAccount();

    const transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const info = await transporter.sendMail({
        from: "Codie",
        to: "user@example.com",
        subject: "Example",
        html:' <h2>Sending esmails with Node.js</h2>'
    })
    res.json(info);
};

exports.sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.MAIL_API_KEY);
    const msg = {
        to: 'logangroth@gmail.com', // Change to your recipient
        from: 'codiestover.cs@gmail.com', // Change to your verified sender
        subject: 'Test Email',
        text: 'You have been selected to receive my test email!',
        html: '<strong>sorry dude</strong>',
    };
        const info = await sgMail.send(msg);
        res.json(info);
};
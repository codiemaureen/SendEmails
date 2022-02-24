const nodeMailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = async(req, res) => {
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
        html:' <h2>Sending emails with Node.js</h2>'
    })
    res.json(info);
};
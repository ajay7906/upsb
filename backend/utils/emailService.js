const nodemailer = require('nodemailer');

const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};
// Email queue for handling multiple requests
const emailQueue = [];
let isProcessing = false;

// process email queue
const processQueue = async () => {
    if (isProcessing || emailQueue.length === 0) return;
    isProcessing = true;
    const transporter = createTransporter();
    while (emailQueue.length > 0){
        const emailOptions = emailQueue.shift();
        try {
            await transporter.sendMail(emailOptions);
            console.log('Email sent to:', emailOptions.to);
            // add delay to respect email service limits
            await new Promise(resolve => setTimeout(resolve, 100)); // 1 second delay
        }catch (error) {
            console.error('Error sending email to:', emailOptions.to, error);
        }

    }

    isProcessing = false;


}


// functions to send email
const sendMail = (emailOptions) => {
    return new Promise((resolve, reject) => {
        const emailWithDefaults = {
            from: process.env.EMAIL_USER,
            ...emailOptions
        };

        emailQueue.push(emailWithDefaults);
        processQueue();
        resolve();
    })
};

module.exports = {
    sendMail
}
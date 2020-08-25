import nodemailer = require('nodemailer');
import config from '../config';

export class Mailer {
    mailTransporter: any;
    mailDetails: any;

    constructor() {
        this.setMailTransporter();
    }

    setMailTransporter() {
        this.mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.mailer.mailUser,
                pass: config.mailer.mailPass,
            }
        });
    }

    setMailDetails(subject: string, text: string) {
        this.mailDetails = {
            from: config.mailer.mailUser,
            to: config.mailer.mailTo,
            subject: subject,
            text: text
        };
    }

    send(subject: string, text: string) {
        this.setMailDetails(subject, text);
        this.mailTransporter.sendMail(this.mailDetails, (err: any, _data: any) => {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
                console.log(this.mailDetails);
            }
        });
    }
}

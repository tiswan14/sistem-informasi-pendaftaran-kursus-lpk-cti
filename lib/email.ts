import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
    },
});

interface SendEmailProps {
    to: string;
    subject: string;
    html: string;
}

export const sendEmail = async ({ to, subject, html }: SendEmailProps) => {
    await transporter.sendMail({
        from: `"LPK CTI - Admin" <${process.env.EMAIL_FROM}>`,
        to,
        subject,
        html,
    });
};

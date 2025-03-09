import http from "http";
import nodemailer from "nodemailer";

// Cấu hình transporter SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

//Hàm gửi mail
async function sendEmail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to,
        subject,
        text,
        html,
    })
    return {success: true, messageId: info.messageId};
  } catch (error) {
    console.error('Lỗi gửi email', error);
    return {success: false, error: error.message};
  }
}

export default sendEmail;

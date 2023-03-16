import nodemailer from "nodemailer";

// Replace with your SMTP credentials
const smtpOptions = {
  service: "Gmail",
  //   host: process.env.SMTP_HOST,
  //   port: parseInt(process.env.SMTP_PORT),
  //   secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  });
};

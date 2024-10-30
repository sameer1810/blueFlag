import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { Email } from "./email";
import ContactForm from "../components/ContactForm";

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: "my_user",
      pass: "my_password",
    },
  });

  const emailHtml = await render(<ContactForm  url="'www.url.com"/>
  );

  const options = {
    from: "sam.mansuri1999@gmail.com",
    to: "mansurisameer590@gmail.com",
    subject: "hello world",
    html: emailHtml,
  };

  await transporter.sendMail(options);
};

sendEmail().catch(console.error);
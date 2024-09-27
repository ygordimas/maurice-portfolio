"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  console.log("running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "ygordimas@gmail.com",
    to: "ikyste@gmail.com",
    subject: "Message from contact form",
    text: "Hello hello world",
  });
};

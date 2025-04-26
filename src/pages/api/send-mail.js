import nodemailer from "nodemailer";
import { renderFile } from "ejs";
import path from "path";

export default async function handler(req, res) {
  console.log("reached here ");
  if (req.method === "POST") {
    console.log(req.body);
    const { username, email, message } = req.body;
    console.log(username, email, message);
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: `<${email}>`,
        to: process.env.EMAIL,
        subject: `New message from ${username}`,
        text: `Message: ${message}\nFrom: ${email}`,
      };

      await transporter.sendMail(mailOptions);
      const successPagePath = path.join(
        process.cwd(),
        "src",
        "components",
        "views",
        "success.ejs"
      );

      // Render and send the success page
      renderFile(successPagePath, { username }, (err, html) => {
        if (err) {
          console.error("Error rendering EJS:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.setHeader("Content-Type", "text/html");
          res.status(200).send(html);
        }
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("An error occurred while sending the email.");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}

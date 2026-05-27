import { transporter } from "../config/email.js";
export const sendContactEmail = async ({ name, email, message }) => {
  return transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_TO,
    name,
    email,
    message,
    html: `<div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">Nouveau message de contact</h2>

          <p>
            <strong>Nom :</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email :</strong><br />
            ${email}
          </p>

          <p>
            <strong>Message :</strong><br />
            ${message}
          </p>
        </div>
      </div>`,
  });
};

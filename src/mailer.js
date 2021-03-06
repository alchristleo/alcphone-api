import nodemailer from "nodemailer";

const from = '"Alcphone" <info@alcphone.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Alcphone",
    text: `
    Welcome to Alcphone. Please, confirm your email.

    ${user.generateConfirmationUrl()}
    `
  };

  tranport.sendMail(email);
}

export function sendAdminConfirmationEmail(admin) {
  const tranport = setup();
  const email = {
    from,
    to: admin.email,
    subject: "Welcome to Alcphone",
    text: `
    Hello admin, please confirm your email to continue.

    ${admin.generateAdminConfirmationUrl()}
    `
  };

  tranport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Reset password",
    text: `
    To reset password please click this link below:

    ${user.generateResetPasswordLink()}
    `
  };

  tranport.sendMail(email);
}

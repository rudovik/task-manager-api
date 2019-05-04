const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rudovik@mead.io',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me now how you get along with the app.`
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rudovik@mead.io',
    subject: 'Cancellation of an account.',
    text: `It's so sad you've decided to cancel your account.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
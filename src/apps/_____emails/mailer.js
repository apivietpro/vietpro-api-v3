const sgMail = require("@sendgrid/mail");
const ejs = require("ejs");
const config = require("config");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (template, payload) => {
  const html = await ejs.renderFile(template, { payload });

  const msg = {
    to: payload.email,
    from: config.get("mail.mailFrom"),
    subject: payload.subject,
    html,
  };

  await sgMail.send(msg);
};

module.exports = sendMail;

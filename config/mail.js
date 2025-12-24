module.exports = {
  mailFrom: process.env.MAIL_FROM || "api.vietpro@gmail.com",
  mailTemplate: `${__dirname}/../src/emails/templates`,
};

const NotificationService = require('./NotificationService');

class EmailService extends NotificationService {
  send(email, message) {
    console.log(`📧 Email enviado a ${email}: "${message}"`);
  }
}

module.exports = EmailService;

const NotificationService = require('./NotificationService');

class SMSService extends NotificationService {
  send(phoneNumber, message) {
    console.log(`📱 SMS enviado a ${phoneNumber}: "${message}"`);
  }
}

module.exports = SMSService;

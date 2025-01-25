const UserController = require('./src/controllers/UserController');
const EmailService = require('./src/services/EmailService');
const SMSService = require('./src/services/SMSService');

// Configuración flexible:
const useEmail = true; // Cambia a false para usar SMS

const service = useEmail ? new EmailService() : new SMSService();
const userController = new UserController(service);

userController.createUser({
  name: 'Ada Lovelace',
  contact: useEmail ? 'ada@lovelace.com' : '+123456789',
});

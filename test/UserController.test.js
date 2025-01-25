const UserController = require('../src/controllers/UserController');
const NotificationService = require('../src/services/NotificationService');

// Mock para pruebas
class MockNotificationService extends NotificationService {
  send(to, message) {
    this.lastReceived = { to, message }; // Capturamos los datos
  }
}

test('Debería enviar notificación al crear usuario', () => {
  const mockService = new MockNotificationService();
  const controller = new UserController(mockService);

  controller.createUser({ name: 'Test User', contact: 'test@test.com' });

  expect(mockService.lastReceived.to).toBe('test@test.com');
  expect(mockService.lastReceived.message).toMatch('Bienvenido');
});

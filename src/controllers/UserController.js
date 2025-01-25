class UserController {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  createUser(userData) {
    // Lógica simulada de creación de usuario
    console.log(`✅ Usuario ${userData.name} creado`);

    // Notificación desacoplada
    this.notificationService.send(
      userData.contact,
      '¡Bienvenido a nuestra plataforma!'
    );
  }
}

module.exports = UserController;

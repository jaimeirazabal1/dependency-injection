# 🔄 Dependency Injection en Node.js - Ejemplo Práctico

¡Aprende a implementar el patrón de **Inyección de Dependencias** en Node.js con un ejemplo real y fácil de entender! Este repositorio demuestra cómo desacoplar componentes y mejorar la testabilidad de tu código.

[![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://jestjs.io/)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen.svg)](https://nodejs.org/)

## 🚀 Características

- **Ejemplo práctico**: Sistema de notificaciones (Email/SMS) con DI.
- **Código limpio**: Implementación del principio de inversión de dependencias (SOLID).
- **Testeable**: Pruebas unitarias con Jest y mocks.
- **Fácil extensión**: Añade nuevos servicios sin modificar el código existente.

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jaimeirazabal1/dependency-injection.git
   ```
2. Instala las dependencias:
   ```bash
   cd dependency-injection && npm install
   ```

## 🛠 Uso

### Ejecutar el ejemplo
```bash
node index.js
```
**Salida:**
```
✅ Usuario Ada Lovelace creado
📧 Email enviado a ada@lovelace.com: "¡Bienvenido a nuestra plataforma!"
```

### Cambiar a SMS
Modifica `index.js`:
```javascript
const useEmail = false; // 👈 Cambia a false
```

## 🧪 Testing
Ejecuta los tests con:
```bash
npm test
```
**Test de ejemplo:**
```javascript
test("Debería enviar notificación al crear usuario", () => {
  const mockService = new MockNotificationService();
  const controller = new UserController(mockService);

  controller.createUser({ name: "Test User", contact: "test@test.com" });

  expect(mockService.lastReceived.to).toBe("test@test.com");
  expect(mockService.lastReceived.message).toMatch("Bienvenido");
});
```

## 🗂 Estructura del Proyecto
```
dependency-injection/
├── src/
│   ├── services/      # Implementaciones de notificaciones
│   └── controllers/   # Lógica de negocio desacoplada
├── test/              # Pruebas unitarias
├── index.js           # Ejemplo de uso
└── package.json
```

## 💡 Beneficios Clave
- ✅ **Flexibilidad**: Cambia entre proveedores de servicios fácilmente.
- ✅ **Testeabilidad**: Prueba componentes aislados con mocks.
- ✅ **Mantenibilidad**: Añade nuevas funcionalidades sin romper código existente.
- ✅ **Escalabilidad**: Arquitectura lista para crecer.

## 🤝 Contribuir
¡Las contribuciones son bienvenidas! 
1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia
MIT © [Jaime Irazábal](https://github.com/jaimeirazabal1)

---

¿Te sirvió? ⭐️ Dale una estrella al repo y compártelo con otros desarrolladores 👥

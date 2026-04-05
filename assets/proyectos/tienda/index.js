const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");
const { calcularTotalCarrito } = require("./utilidades");

// Usuarios
const user1 = new Usuario("Carlos", "carlos@mail.com");
const user2 = new Usuario("Ana", "ana@mail.com", "admin");
const userVIP = new UsuarioVIP("Luis", "luis@mail.com", "Gold");

// Desactivar uno
user2.desactivar();

// Productos
const prod1 = new Producto("Laptop", 2000, "Tecnología");
const prod2 = new Producto("Zapatos", 300, "Ropa");

const prod3 = new ProductoDigital("Curso JS", 100, "mensual");
const prod4 = new ProductoDigital("Ebook", 50, "de por vida");

// Descuento
console.log("Precio con descuento:", prod1.aplicarDescuento(20));

// Tarjetas productos
console.log("\n--- PRODUCTOS ---");
console.log(prod1.tarjeta());
console.log(prod2.tarjeta());
console.log(prod3.tarjeta());
console.log(prod4.tarjeta());

// Usuarios
console.log("\n--- USUARIOS ---");
console.log(user1.resumen());
console.log(user2.resumen());
console.log(userVIP.resumen());

// Carrito
const carrito = [prod1, prod3, prod4];
console.log("\nTotal carrito:", calcularTotalCarrito(carrito));